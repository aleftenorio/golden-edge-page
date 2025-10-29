import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-4 md:mb-6 inline-block">
            <span className="text-gold font-semibold text-xs md:text-sm tracking-wider uppercase border border-gold/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gold/5">
              Método Validado por 4.739 Profissionais
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-primary leading-tight">
            EFEITO <span className="text-gold">LIPO</span> HD
          </h1>
          
          <div className="inline-block mb-6 md:mb-8 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-gold/20 to-gold-light/20 border-2 border-gold rounded-lg">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              Elimine até <span className="text-gold">-45cm</span> em 1 Única Sessão
            </p>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-foreground/80 max-w-3xl mx-auto leading-relaxed px-2">
            O método que <span className="font-semibold text-primary">transforma resultados</span> de esteticistas e massoterapeutas em <span className="font-semibold text-gold">apenas 45 minutos</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold group"
            >
              🔥 QUERO ACESSO IMEDIATO
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mt-8 md:mt-16 px-4">
            <div className="bg-card/80 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1 md:mb-2">45min</div>
              <div className="text-xs md:text-sm text-muted-foreground">Duração do Tratamento</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1 md:mb-2">-45cm</div>
              <div className="text-xs md:text-sm text-muted-foreground">Redução Imediata</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-1 md:mb-2">4.739</div>
              <div className="text-xs md:text-sm text-muted-foreground">Profissionais Formados</div>
            </div>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
