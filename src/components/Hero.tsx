import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-warm-brown/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-shadow animate-fade-in">
          Transform Your Look
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cream animate-slide-up font-light">
          Experience luxury hair care with our expert stylists and premium services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button variant="luxury" size="lg" className="text-lg">
            Contact Us
          </Button>
          <Button variant="outline" size="lg" className="text-lg border-cream text-cream hover:bg-cream hover:text-warm-brown">
            View Our Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;