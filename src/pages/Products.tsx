import { useState } from "react";
import { Search, Filter, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import fastenersImage from "@/assets/fasteners-collection.jpg";
import workerImage from "@/assets/professional-worker.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "parafusos", label: "Parafusos" },
    { value: "porcas", label: "Porcas" },
    { value: "arruelas", label: "Arruelas" },
    { value: "ferramentas", label: "Ferramentas" },
    { value: "epis", label: "EPIs" },
  ];

  const products = [
    {
      id: "1",
      name: "Parafuso Phillips Inox M6x20mm",
      description: "Parafuso de aço inoxidável 304, resistente à corrosão, ideal para ambientes úmidos e aplicações marítimas.",
      price: 2.50,
      image: fastenersImage,
      category: "Parafusos",
      inStock: true,
    },
    {
      id: "2", 
      name: "Furadeira de Impacto 650W",
      description: "Furadeira profissional com mandril de 13mm, ideal para concreto e alvenaria. Motor brushless de alta durabilidade.",
      price: 189.90,
      image: workerImage,
      category: "Ferramentas",
      inStock: true,
    },
    {
      id: "3",
      name: "Capacete de Segurança Branco",
      description: "Capacete de proteção individual classe A, certificado pelo INMETRO. Ajuste rápido e confortável.",
      price: 29.90,
      image: workerImage,
      category: "EPIs",
      inStock: false,
    },
    {
      id: "4",
      name: "Porca Sextavada M8 Inox",
      description: "Porca sextavada em aço inoxidável 316, resistência superior à corrosão para aplicações industriais.",
      price: 1.80,
      image: fastenersImage,
      category: "Porcas",
      inStock: true,
    },
    {
      id: "5",
      name: "Arruela Lisa M6 Galvanizada",
      description: "Arruela lisa galvanizada a fogo, proteção extra contra ferrugem, ideal para uso externo.",
      price: 0.50,
      image: fastenersImage,
      category: "Arruelas",
      inStock: true,
    },
    {
      id: "6",
      name: "Chave Inglesa 12 Polegadas",
      description: "Chave inglesa forjada em aço carbono, abertura de 0-30mm, cabo ergonômico antiderrapante.",
      price: 45.90,
      image: workerImage,
      category: "Ferramentas",
      inStock: true,
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           product.category.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Catálogo de Produtos</h1>
          <p className="text-xl text-muted-foreground">
            Encontre exatamente o que você precisa em nosso catálogo completo
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-64">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Mostrando {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} 
            {selectedCategory !== "all" && ` na categoria "${categories.find(c => c.value === selectedCategory)?.label}"`}
            {searchTerm && ` para "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar os filtros ou termos de busca
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}>
                Limpar Filtros
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More (placeholder for future pagination) */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Produtos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;