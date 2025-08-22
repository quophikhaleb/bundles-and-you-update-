import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-serif font-bold text-bronze">Bundles &You</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-bronze transition-colors">Home</a>
          <a href="#services" className="text-foreground hover:text-bronze transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-bronze transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-bronze transition-colors">Contact</a>
        </div>

        <Button variant="luxury" className="hidden md:inline-flex">
          Contact Us
        </Button>
      </nav>
    </header>
  );
};

export default Header;