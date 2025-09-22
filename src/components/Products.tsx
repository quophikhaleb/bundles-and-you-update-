import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Menu } from "lucide-react";
import hairCuttingImage from "@/assets/hair-cutting.jpg";
import hairColoringImage from "@/assets/hair-coloring.jpg";
import hairStylingImage from "@/assets/hair-styling.jpg";

const products = [
  {
    title: "Hair Cutting & Styling",
    description: "Precision cuts and expert styling tailored to your face shape and lifestyle.",
    price: "Price $85",
    image: hairCuttingImage,
  },
  {
    title: "Hair Coloring",
    description: "From subtle highlights to bold color transformations using premium products.",
    price: "Price $120",
    image: hairColoringImage,
  },
  {
    title: "Blowouts & Styling",
    description: "Professional blowouts and special event styling for any occasion.",
    price: "Price $65",
    image: hairStylingImage,
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleOrder = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity when opening dialog
    setOrderDialogOpen(true);
  };

  const proceedToWhatsApp = () => {
    if (selectedProduct) {
      const message = `Hi! I'd like to order ${quantity}x ${selectedProduct.title} for ${selectedProduct.price} each.`;
      const whatsappUrl = `https://wa.me/233241377156?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="products" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown mb-4">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium hair products designed to enhance your natural beauty
          </p>
        </div>

        {/* Hamburger Menu */}
        <div className="flex justify-start mb-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Menu className="h-4 w-4" />
                Products Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-background border border-border shadow-md">
              <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                Product 1
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                Product 2
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                Product 3
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-muted">
                Product 4
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="hover-lift border-0 shadow-soft overflow-hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="aspect-[4/3] overflow-hidden cursor-pointer">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 border-0">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                </DialogContent>
              </Dialog>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-warm-brown">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-bronze">
                    {product.price}
                  </span>
                  <Button 
                    variant="luxury" 
                    size="sm"
                    onClick={() => handleOrder(product)}
                  >
                    Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Dialog */}
        <Dialog open={orderDialogOpen} onOpenChange={setOrderDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-warm-brown">
                Order Confirmation
              </DialogTitle>
            </DialogHeader>
            {selectedProduct && (
              <div className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-brown mb-2">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {selectedProduct.description}
                  </p>
                  <p className="text-lg font-semibold text-bronze">
                    {selectedProduct.price}
                  </p>
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center justify-between py-4 border-t border-border">
                  <span className="font-medium text-warm-brown">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="text-lg font-semibold min-w-[2rem] text-center">
                      {quantity}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setOrderDialogOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="luxury" 
                    onClick={proceedToWhatsApp}
                    className="flex-1"
                  >
                    Continue to WhatsApp
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Products;