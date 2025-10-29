import { Button } from "@/components/ui/button";
import resultsImage from "@/assets/results-transformation.jpg";

const Results = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
              CONFIRA ALGUNS <span className="text-gold">RESULTADOS</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90">Método LIPO Manual HD!</p>
            <div className="h-1 w-32 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full mt-4"></div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden shadow-2xl mb-6 md:mb-8 animate-scale-in">
            <img 
              src={resultsImage} 
              alt="Resultados Antes e Depois" 
              className="w-full h-auto"
            />
          </div>

          <div className="bg-primary-foreground text-primary p-6 md:p-8 rounded-2xl shadow-xl animate-fade-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center leading-tight">
              O MÉTODO VALIDADO QUE ELIMINA ATÉ <span className="text-gold">-45CM EM 1 ÚNICA SESSÃO</span> – SIGA O PASSO A PASSO SIMPLES E LEVE ESSA TRANSFORMAÇÃO PARA SUAS CLIENTES!
            </h3>
            
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              O método <span className="font-bold text-gold">LIPO MANUAL – HABILITANDO PROFISSIONAIS</span> não é apenas mais um protocolo. 
              Ele foi criado para que você domine um passo a passo validado, com aulas práticas onde ensinamos a aplicação em modelo, 
              e possa replicar em suas clientes — entregando resultados de <span className="font-bold text-gold">–30 cm a –45 cm já na primeira sessão</span>.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Validado por mais de <span className="font-bold text-gold">4.739 mulheres</span> e inspirado em técnicas renomadas como 
              as de <span className="font-bold">R. França</span>, a Lipo Manual foi estruturada em curso online, com videoaulas claras, 
              objetivas e altamente eficazes.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Com <span className="font-bold text-gold">1 ano de acesso + suporte</span>, você terá em mãos um protocolo IMEDIATO e de 
              EFEITO LIPO, capaz de elevar seus resultados e <span className="font-bold text-gold">duplicar o faturamento da sua clínica</span>.
            </p>

            <div className="text-center px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-6 py-5 md:px-8 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                🔥 EU QUERO ACESSO IMEDIATO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
