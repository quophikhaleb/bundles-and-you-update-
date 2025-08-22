import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const handleEmailClick = () => {
    window.open('mailto:Acquayedeborah1@gmail.com', '_blank');
    onOpenChange(false);
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to get in touch with Bundles &You.";
    const whatsappUrl = `https://wa.me/233241377156?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onOpenChange(false);
  };

  const handlePhoneClick = () => {
    window.open('tel:+233241377156', '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-warm-brown font-serif">
            Contact Us
          </DialogTitle>
          <DialogDescription className="text-center">
            Choose your preferred way to get in touch
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button 
            variant="outline" 
            className="flex items-center gap-3 justify-start h-12"
            onClick={handleEmailClick}
          >
            <Mail className="w-5 h-5 text-bronze" />
            <div className="text-left">
              <div className="font-semibold">Email</div>
              <div className="text-sm text-muted-foreground">Acquayedeborah1@gmail.com</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-3 justify-start h-12"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-5 h-5 text-bronze" />
            <div className="text-left">
              <div className="font-semibold">WhatsApp</div>
              <div className="text-sm text-muted-foreground">+233 24 137 7156</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center gap-3 justify-start h-12"
            onClick={handlePhoneClick}
          >
            <Phone className="w-5 h-5 text-bronze" />
            <div className="text-left">
              <div className="font-semibold">Phone Call</div>
              <div className="text-sm text-muted-foreground">+233 24 137 7156</div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;