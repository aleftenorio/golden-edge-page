import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é isso tudo?",
      answer: "O Método LIPO Manual HD é um protocolo completo e validado que ensina profissionais de estética a realizar tratamentos com resultados imediatos de redução de medidas, eliminando de -30 a -45cm em uma única sessão de 45 minutos."
    },
    {
      question: "Como eu vou receber nesse curso?",
      answer: "Após a confirmação do pagamento, você receberá acesso imediato à plataforma online com todas as vídeo aulas, protocolos em PDF, certificado e bônus exclusivos. Tudo 100% digital e disponível 24/7."
    },
    {
      question: "Em quanto tempo vou ter resultados e o que vou aprender nesse programa?",
      answer: "Você aprenderá o método completo em vídeo aulas diretas e objetivas, podendo aplicar nos seus atendimentos imediatamente. Seus clientes verão resultados já na primeira sessão, com reduções visíveis de medidas."
    },
    {
      question: "Como vou receber acesso ao método?",
      answer: "O acesso é 100% online e instantâneo. Após a confirmação do pagamento, você recebe por email os dados de acesso à área de membros exclusiva com todo o conteúdo disponível."
    },
    {
      question: "Existe alguma garantia que o programa funciona?",
      answer: "Sim! O método já foi validado por mais de 4.739 profissionais que obtiveram resultados comprovados. Além disso, você terá suporte personalizado para tirar dúvidas e garantir que domine completamente a técnica."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gold">DÚVIDAS</span>{" "}
              <span className="text-primary">FREQUENTES</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-gold/20 rounded-lg px-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:text-gold transition-colors">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
