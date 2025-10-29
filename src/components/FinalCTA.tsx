import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Rolou a página toda pro final?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Então leia esse resumo...
            </p>
          </div>

          <div className="bg-card text-card-foreground p-8 md:p-12 rounded-2xl shadow-2xl mb-8 animate-scale-in">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-left">
              O que você encontra aqui é o <span className="font-bold text-gold">exato protocolo que eu usei para 
              me tornar referência na estética</span> — e que você pode usar para <span className="font-bold text-gold">transformar 
              seus atendimentos e surpreender suas clientes.</span>
            </p>
            
            <div className="my-8 p-6 bg-secondary/20 rounded-lg border-2 border-gold/30">
              <p className="text-xl font-bold text-gold mb-4">
                PROTOCOLO IMEDIATO + EFEITO LIPO
              </p>
              <p className="text-lg text-left">
                Você terá em mãos um protocolo validado, com aulas práticas, 
                que pode duplicar seus resultados e faturamento.
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xl md:text-2xl px-8 py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold mb-6"
            >
              🔥 EU QUERO ACESSO IMEDIATO 🔥
            </Button>

            <div className="flex items-center justify-center gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="text-sm text-muted-foreground">Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm text-muted-foreground">Acesso Instantâneo</span>
              </div>
            </div>
          </div>

          <div className="bg-gold/10 backdrop-blur-sm p-6 rounded-lg border border-gold/30 animate-fade-in">
            <p className="text-sm text-primary-foreground/80">
              © 2025 Efeito LIPO HD - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
