import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-primary/90 to-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 md:mb-8 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
              OFERTA <span className="text-gold">ESPECIAL</span>
            </h2>
            <p className="text-lg sm:text-xl text-gold-light font-semibold mb-6">
              PROMOÇÃO ENCERRA EM POUCOS MINUTOS
            </p>
          </div>

          <div className="flex gap-3 md:gap-4 justify-center mb-6 md:mb-8 animate-scale-in">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border-2 border-gold/30 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-1 md:mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs md:text-sm text-primary-foreground/80">Minutos</div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border-2 border-gold/30 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-1 md:mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs md:text-sm text-primary-foreground/80">Segundos</div>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in">
            <div className="text-center mb-6">
              <p className="text-lg sm:text-xl font-semibold mb-2 px-2">
                ATENÇÃO: APENAS 100 ACESSOS LIBERADOS POR MÊS!
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                (DEVIDO AO SUPORTE PERSONALIZADO)
              </p>
              <p className="text-xl sm:text-2xl font-bold text-destructive mb-6">
                RESTAM APENAS <span className="text-2xl sm:text-3xl">2 VAGAS</span>
              </p>
            </div>

            <div className="text-center mb-8">
              <p className="text-base md:text-lg text-muted-foreground line-through mb-2">
                de R$ 297,00 por
              </p>
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gold mb-6">
                R$ 97,00
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg sm:text-xl px-6 py-6 sm:px-8 sm:py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
            >
              🔥 QUERO MEU ACESSO POR 97 🔥
            </Button>

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-secondary/20 rounded-lg border border-gold/20">
              <p className="text-xs md:text-sm text-center text-foreground/80">
                ⚡ Acesso 100% online e imediato após a confirmação do pagamento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
