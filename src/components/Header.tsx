import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import ContactDialog from "./ContactDialog";
import CartDialog from "./CartDialog";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isCartDialogOpen, setIsCartDialogOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-serif font-bold text-bronze">Bundles &You</h1>
          <div 
            className="relative cursor-pointer" 
            onClick={() => setIsCartDialogOpen(true)}
          >
            <ShoppingCart className="h-6 w-6 text-bronze hover:text-bronze/80 transition-colors" />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-bronze text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                {getCartItemsCount()}
              </span>
            )}
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-bronze transition-colors">Home</a>
          <a href="#products" className="text-foreground hover:text-bronze transition-colors">Products</a>
          <a href="#about" className="text-foreground hover:text-bronze transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-bronze transition-colors">Contact</a>
        </div>

        <Button 
          variant="luxury" 
          className="hidden md:inline-flex"
          onClick={() => setIsContactDialogOpen(true)}
        >
          Contact Us
        </Button>
      </nav>
      
      <ContactDialog 
        open={isContactDialogOpen} 
        onOpenChange={setIsContactDialogOpen} 
      />
      <CartDialog 
        open={isCartDialogOpen} 
        onOpenChange={setIsCartDialogOpen} 
      />
    </header>
  );
};

export default Header;