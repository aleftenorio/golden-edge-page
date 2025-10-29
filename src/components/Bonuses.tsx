import { Award, Gift } from "lucide-react";

const Bonuses = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Gift className="w-16 h-16 mx-auto mb-4 text-gold" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">BÔNUS</span>{" "}
              <span className="text-gold">EXCLUSIVOS</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-gold/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <Award className="w-12 h-12 text-gold mb-4" />
              <h3 className="text-2xl font-bold text-gold mb-4">CERTIFICADO PROFISSIONAL</h3>
              <p className="text-foreground/80 leading-relaxed">
                Certificado de conclusão reconhecido para comprovar sua especialização no 
                Método LIPO Manual HD e destacar seus serviços no mercado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-2xl border-2 border-accent/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="text-4xl mb-4">🧊</div>
              <h3 className="text-2xl font-bold text-accent mb-4">BÔNUS CRIO CASEIRA</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                <span className="font-semibold">ELIMINANDO A GORDURA COM GELO</span>
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Técnica secreta de criolipólise caseira para potencializar ainda mais os 
                resultados e oferecer um diferencial exclusivo às suas clientes!
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-2xl border border-gold/30 text-center animate-fade-in">
            <p className="text-xl font-semibold text-primary mb-2">
              SUPER BÔNUS PROFISSIONAL
            </p>
            <p className="text-lg text-foreground/80">
              Vídeo aulas objetivas + Protocolo validado + Suporte personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
