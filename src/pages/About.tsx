import { Users, Target, Eye, Award, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import workerImage from "@/assets/professional-worker.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Oferecemos apenas produtos de fabricantes reconhecidos e certificados"
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Equipe especializada e treinada para oferecer o melhor suporte técnico"
    },
    {
      icon: Clock,
      title: "Agilidade", 
      description: "Entrega rápida e eficiente para não atrasar seus projetos"
    },
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Soluções personalizadas para cada necessidade específica"
    }
  ];

  const timeline = [
    {
      year: "2003",
      title: "Fundação",
      description: "Walter fundou a Casa dos Parafusos em Eusébio com foco em atendimento personalizado"
    },
    {
      year: "2010",
      title: "Expansão",
      description: "Abertura da primeira filial em Cidade Alpha para atender crescente demanda"
    },
    {
      year: "2018",
      title: "Baratão dos Parafusos",
      description: "Inauguração da loja em Cascavel, consolidando presença na região metropolitana"
    },
    {
      year: "2024",
      title: "Era Digital",
      description: "Lançamento do e-commerce e modernização completa do atendimento"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Quem Somos</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Há mais de 20 anos, a Casa dos Parafusos é sinônimo de qualidade, 
              confiança e expertise em soluções de fixação no Ceará. 
              Nossa jornada começou com Walter e sua visão de oferecer 
              produtos de excelência com atendimento diferenciado.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Nossa História</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A Casa dos Parafusos nasceu em 2003 da visão empreendedora de Walter, 
                  que identificou a necessidade de um fornecedor confiável de soluções 
                  de fixação na região metropolitana de Fortaleza.
                </p>
                <p>
                  Começando com uma pequena loja em Eusébio, rapidamente nos tornamos 
                  referência pela qualidade dos produtos e pelo atendimento especializado. 
                  Nossa equipe técnica foi treinada para entender as necessidades específicas 
                  de cada cliente, desde o profissional da construção civil até grandes indústrias.
                </p>
                <p>
                  Hoje, com três lojas estrategicamente localizadas, atendemos todo o Ceará 
                  com o mesmo compromisso que nos trouxe até aqui: oferecer as melhores 
                  soluções em fixação com excelência no atendimento.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src={workerImage} 
                alt="Equipe Casa dos Parafusos" 
                className="rounded-lg shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nossa Trajetória</h2>
            <p className="text-xl text-muted-foreground">
              Mais de duas décadas construindo confiança e excelência
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-primary hidden md:block"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <Card className="hover:shadow-strong transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="text-primary font-bold text-xl mb-2">{item.year}</div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                    
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer soluções completas em fixação com produtos de qualidade 
                  superior e atendimento especializado, contribuindo para o sucesso 
                  dos projetos de nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <Eye className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a referência absoluta em soluções de fixação no Nordeste, 
                  reconhecida pela excelência em produtos, serviços e inovação 
                  no atendimento ao cliente.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integridade, qualidade, compromisso com o cliente, 
                  inovação constante e responsabilidade social são os pilares 
                  que guiam todas as nossas ações.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Nossos Diferenciais */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-muted-foreground">
              O que nos torna únicos no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Faça Parte da Nossa História
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Junte-se aos milhares de clientes satisfeitos que confiam 
              na Casa dos Parafusos para suas soluções em fixação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/produtos">Ver Produtos</Link>
              </Button>
              <Button variant="whatsapp" size="lg">
                Falar Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;