
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturedSpaces } from "@/components/FeaturedSpaces";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Hero />
      <HowItWorks />
      <FeaturedSpaces />
      <Testimonials />
      <Stats />
      <CTA />
    </div>
  );
};

export default Index;
