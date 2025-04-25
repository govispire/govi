import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PossibilitiesSection from '@/components/PossibilitiesSection';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import WelcomeMessage from '@/components/WelcomeMessage';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
    
    // Apply page title
    document.title = "VIEO Productions | Transforming Ideas into Iconic Brands";
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
          <WelcomeMessage />
        </div>
        <PossibilitiesSection />
        <ServicesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
