import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">CP</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Casa dos Parafusos</h3>
                <p className="text-background/80 text-sm">Soluções em Fixação</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Mais de 20 anos atendendo o Ceará com as melhores soluções em fixação. 
              Parafusos, porcas, arruelas, ferramentas e EPIs de qualidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link to="/produtos" className="block text-background/70 hover:text-background transition-colors">
                Produtos
              </Link>
              <Link to="/sobre" className="block text-background/70 hover:text-background transition-colors">
                Quem Somos
              </Link>
              <Link to="/lojas" className="block text-background/70 hover:text-background transition-colors">
                Nossas Lojas
              </Link>
              <Link to="/orcamentos" className="block text-background/70 hover:text-background transition-colors">
                Orçamentos
              </Link>
              <Link to="/contato" className="block text-background/70 hover:text-background transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Nossas Lojas */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Nossas Lojas</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-background">Matriz - Eusébio</h5>
                <p className="text-background/70 text-sm">CNPJ: 12.345.678/0001-90</p>
                <p className="text-background/70 text-sm">(85) 3273-1234</p>
              </div>
              <div>
                <h5 className="font-medium text-background">Filial - Cidade Alpha</h5>
                <p className="text-background/70 text-sm">CNPJ: 12.345.678/0002-71</p>
                <p className="text-background/70 text-sm">(85) 3274-5678</p>
              </div>
              <div>
                <h5 className="font-medium text-background">Baratão - Cascavel</h5>
                <p className="text-background/70 text-sm">CNPJ: 12.345.678/0003-52</p>
                <p className="text-background/70 text-sm">(85) 3275-9012</p>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Funcionamento</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-background/70" />
                <span className="text-background/70 text-sm">Segunda a Sexta</span>
              </div>
              <p className="text-background text-sm font-medium">07:00 às 17:00</p>
              
              <div className="flex items-center gap-2 mt-3">
                <Clock className="w-4 h-4 text-background/70" />
                <span className="text-background/70 text-sm">Sábado</span>
              </div>
              <p className="text-background text-sm font-medium">07:00 às 12:00</p>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-background/70" />
                <span className="text-background/70 text-sm">contato@casadosparafusos.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © {currentYear} Casa dos Parafusos. Todos os direitos reservados. 
            Desenvolvido com tecnologia de ponta para servir melhor nossos clientes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;