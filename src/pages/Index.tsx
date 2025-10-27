import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Benefits } from "@/components/sections/Benefits";
import { Bonuses } from "@/components/sections/Bonuses";
import { About } from "@/components/sections/About";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Bonuses />
      <About />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
