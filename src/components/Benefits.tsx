import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "TEMPO: 45 minutos",
      description: "Elimine medidas visíveis, enquanto clínicas comuns levam meses para entregar resultados"
    },
    {
      title: "ECONOMIA",
      description: "Invista R$ 97 vs. milhares em outros cursos que não trazem resultados imediatos"
    },
    {
      title: "PASSO A PASSO PRÁTICO",
      description: "Em vídeo, simples que você assiste e replica em suas clientes"
    },
    {
      title: "PROTOCOLO COMPLETO",
      description: "Os mesmos resultados de clínicas famosas, agora no seu atendimento"
    },
    {
      title: "VÍDEO AULAS",
      description: "Direto ao ponto, sem enrolação"
    },
    {
      title: "MÉTODO VALIDADO",
      description: "Para reduzir gordura localizada com eficácia comprovada"
    },
    {
      title: "RESULTADOS IMEDIATOS",
      description: "De -30 a -45cm em suas clientes por sessão"
    },
    {
      title: "SUPORTE + ACESSO INSTANTÂNEO",
      description: "Comece a transformar seus atendimentos hoje"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
              <span className="text-primary">CONFIRA O QUE VOCÊ</span>{" "}
              <span className="text-gold">VAI DOMINAR</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-4 md:p-6 rounded-xl border border-gold/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-base md:text-lg text-gold mb-1 md:mb-2">{benefit.title}</h3>
                    <p className="text-sm md:text-base text-foreground/80">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
