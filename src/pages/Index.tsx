import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import Bonuses from "@/components/Bonuses";
import Creator from "@/components/Creator";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Results />
      <Pricing />
      <Bonuses />
      <Creator />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Index;
