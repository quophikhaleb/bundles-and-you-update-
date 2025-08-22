import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-warm-brown text-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Visit Our Studio
          </h2>
          <p className="text-xl opacity-90">
            Ready to transform your look? Get in touch with us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="bg-bronze/20 border-bronze/30 text-cream">
            <CardHeader className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-luxury-gold" />
              <CardTitle className="text-lg font-serif">Location</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm opacity-90">
                Kasoa
              </p>
            </CardContent>
          </Card>

          <Card className="bg-bronze/20 border-bronze/30 text-cream">
            <CardHeader className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-2 text-luxury-gold" />
              <CardTitle className="text-lg font-serif">Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm opacity-90">
                +233 24 137 7156
              </p>
            </CardContent>
          </Card>

          <Card className="bg-bronze/20 border-bronze/30 text-cream">
            <CardHeader className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-2 text-luxury-gold" />
              <CardTitle className="text-lg font-serif">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm opacity-90">
                Acquayedeborah1@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card className="bg-bronze/20 border-bronze/30 text-cream">
            <CardHeader className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-luxury-gold" />
              <CardTitle className="text-lg font-serif">Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm opacity-90">
                Tue-Fri: 9AM-7PM<br />
                Sat: 8AM-6PM<br />
                Sun-Mon: Closed
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="luxury" size="lg" className="text-lg">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;