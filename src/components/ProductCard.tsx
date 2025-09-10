import { ShoppingCart, MessageCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

const ProductCard = ({ id, name, description, price, image, category, inStock }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre: ${name}`);
    window.open(`https://wa.me/5585999999999?text=${message}`, "_blank");
  };

  const handleAddToCart = () => {
    // Implementar lógica do carrinho futuramente
    console.log(`Adicionado ao carrinho: ${name}`);
  };

  return (
    <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!inStock && (
            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
              <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                Indisponível
              </span>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">
                R$ {price.toFixed(2)}
              </span>
              <span className="text-muted-foreground text-sm ml-2">por unidade</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button 
              onClick={handleAddToCart}
              disabled={!inStock}
              className="flex-1"
              variant={inStock ? "default" : "secondary"}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {inStock ? "Comprar" : "Esgotado"}
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              variant="whatsapp"
              size="icon"
              className="shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>

          <Button variant="outline" className="w-full">
            <Eye className="w-4 h-4 mr-2" />
            Ver Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;