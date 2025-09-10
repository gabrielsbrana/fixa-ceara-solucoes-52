import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/sobre" element={<About />} />
              {/* Placeholder routes for future pages */}
              <Route path="/lojas" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold">Nossas Lojas - Em breve</h1></div>} />
              <Route path="/orcamentos" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold">Orçamentos - Em breve</h1></div>} />
              <Route path="/blog" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold">Blog - Em breve</h1></div>} />
              <Route path="/contato" element={<div className="container mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold">Contato - Em breve</h1></div>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
