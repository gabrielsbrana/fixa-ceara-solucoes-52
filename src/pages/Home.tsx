import { ArrowRight, Shield, Truck, Clock, Star, Wrench, HardHat, Nut } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-warehouse.jpg";
import fastenersImage from "@/assets/fasteners-collection.jpg";
import workerImage from "@/assets/professional-worker.jpg";

const Home = () => {
  const categories = [
    { name: "Parafusos", icon: Nut, description: "Todos os tipos e tamanhos", count: "500+ itens" },
    { name: "Ferramentas", icon: Wrench, description: "Profissionais e hobby", count: "300+ itens" },
    { name: "EPIs", icon: HardHat, description: "Segurança em primeiro lugar", count: "200+ itens" },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "Parafuso Phillips Inox M6x20mm",
      description: "Parafuso de aço inoxidável 304, resistente à corrosão, ideal para ambientes úmidos.",
      price: 2.50,
      image: fastenersImage,
      category: "Parafusos",
      inStock: true,
    },
    {
      id: "2", 
      name: "Furadeira de Impacto 650W",
      description: "Furadeira profissional com mandril de 13mm, ideal para concreto e alvenaria.",
      price: 189.90,
      image: workerImage,
      category: "Ferramentas",
      inStock: true,
    },
    {
      id: "3",
      name: "Capacete de Segurança Branco",
      description: "Capacete de proteção individual classe A, certificado pelo INMETRO.",
      price: 29.90,
      image: workerImage,
      category: "EPIs",
      inStock: false,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Produtos certificados e com garantia de fábrica"
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Entregamos em toda região metropolitana"
    },
    {
      icon: Clock,
      title: "20+ Anos de Experiência",
      description: "Referência em soluções de fixação no Ceará"
    },
    {
      icon: Star,
      title: "Atendimento Especializado",
      description: "Equipe técnica para te ajudar na escolha"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Casa dos <span className="text-accent">Parafusos</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Mais de 20 anos sendo referência em soluções de fixação no Ceará. 
              Parafusos, ferramentas e EPIs de qualidade para profissionais exigentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/produtos">
                  Ver Catálogo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="whatsapp" size="lg">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nossas Categorias
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encontre tudo que você precisa para seus projetos em nossas categorias especializadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <category.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{category.name}</h3>
                  <p className="text-muted-foreground mb-2">{category.description}</p>
                  <p className="text-primary font-semibold">{category.count}</p>
                  <Button variant="outline" className="mt-4" asChild>
                    <Link to="/produtos">
                      Ver Produtos
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Produtos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos nossos produtos mais procurados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/produtos">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Por que escolher a Casa dos Parafusos?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Pronto para encontrar a solução perfeita?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Nossa equipe especializada está pronta para te ajudar a encontrar 
              exatamente o que você precisa para seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg">
                Falar com Especialista
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/orcamentos">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;