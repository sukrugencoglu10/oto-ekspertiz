import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Packages from "@/components/sections/Packages";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Packages />
      <WhyUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
