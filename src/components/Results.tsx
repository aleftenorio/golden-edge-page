import { Button } from "@/components/ui/button";
import resultsImage from "@/assets/results-transformation.jpg";

const Results = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              CONFIRA ALGUNS <span className="text-gold">RESULTADOS</span>
            </h2>
            <p className="text-xl text-primary-foreground/90">Método LIPO Manual HD!</p>
            <div className="h-1 w-32 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full mt-4"></div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden shadow-2xl mb-8 animate-scale-in">
            <img 
              src={resultsImage} 
              alt="Resultados Antes e Depois" 
              className="w-full h-auto"
            />
          </div>

          <div className="bg-primary-foreground text-primary p-8 rounded-2xl shadow-xl animate-fade-in">
            <p className="text-lg leading-relaxed mb-6">
              Pensando em maximizar os resultados de esteticistas e massoterapeutas que querem 
              entregar algo novo e comum, criamos o <span className="font-bold text-gold">Efeito Lipo HD MANUAL</span>: 
              um protocolo onde você terá resultados desde a primeira sessão.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Com o nosso passo a passo em vídeo, você vai aprender de forma prática nosso protocolo 
              secreto e replicar imediatamente, gerando <span className="font-bold text-gold">resultados imediatos e diferenciais</span> que as 
              suas clientes esperam!
            </p>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
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
