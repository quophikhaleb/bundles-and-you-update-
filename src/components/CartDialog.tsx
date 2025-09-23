import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDialog = ({ open, onOpenChange }: CartDialogProps) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const proceedToWhatsApp = () => {
    if (cartItems.length === 0) return;
    
    const orderDetails = cartItems.map(item => 
      `${item.quantity}x ${item.title} (${item.price} each)`
    ).join('\n');
    
    const total = getCartTotal();
    const message = `Hi! I'd like to place the following order:\n\n${orderDetails}\n\nTotal: ₵${total.toFixed(2)}`;
    
    const whatsappUrl = `https://wa.me/233241377156?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-warm-brown flex items-center justify-between">
            Shopping Cart
            {cartItems.length > 0 && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearCart}
                className="text-red-600 hover:text-red-700"
              >
                Clear All
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>
        
        {cartItems.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-muted-foreground text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-full max-h-[50vh] pr-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-warm-brown">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-bronze font-semibold">{item.price}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-semibold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-bronze">₵{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => onOpenChange(false)}
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="luxury" 
                  onClick={proceedToWhatsApp}
                  className="flex-1"
                  disabled={cartItems.length === 0}
                >
                  Order via WhatsApp
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;