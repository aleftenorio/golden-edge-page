import creatorImage from "@/assets/creator-portrait.jpg";

const Creator = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <p className="text-gold text-lg font-semibold mb-2">CRIADO PELA</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              ESTETICISTA DR. VIVIANE MORENO
            </h2>
            <p className="text-xl text-gold">Especialista em massagens redutoras</p>
            <div className="h-1 w-32 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={creatorImage} 
                alt="Dra. Viviane Moreno" 
                className="rounded-2xl shadow-2xl w-full h-auto border-4 border-gold/20"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <p className="text-lg leading-relaxed text-foreground/90">
                <span className="font-semibold text-primary">Oi mulher, tudo bem?</span>
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                Nos últimos 8 anos, atendi milhares de mulheres com massagens redutoras 
                e descobri algo que mudou meu jogo: <span className="font-bold text-gold">resultados imediatos são o que 
                realmente fidelizam e lotam agenda.</span>
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                Com a agenda cheia, percebi que minha <span className="font-bold text-gold">metodologia era única</span>: 
                protocolos com efeito de <span className="font-bold text-gold">lipoaspiração, em apenas 45 minutos.</span>
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                Decidi então compartilhar essa técnica no fim de ano!
              </p>

              <div className="bg-gradient-to-r from-gold/20 to-gold-light/20 p-6 rounded-lg border-2 border-gold/30">
                <p className="text-lg font-semibold text-center text-primary">
                  ✨ Mais de 4.739 profissionais já transformaram seus atendimentos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;
