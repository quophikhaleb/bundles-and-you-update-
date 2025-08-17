import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import hairCuttingImage from "@/assets/hair-cutting.jpg";
import hairColoringImage from "@/assets/hair-coloring.jpg";
import hairStylingImage from "@/assets/hair-styling.jpg";

const services = [
  {
    title: "Hair Cutting & Styling",
    description: "Precision cuts and expert styling tailored to your face shape and lifestyle.",
    price: "Starting at $85",
    image: hairCuttingImage,
  },
  {
    title: "Hair Coloring",
    description: "From subtle highlights to bold color transformations using premium products.",
    price: "Starting at $120",
    image: hairColoringImage,
  },
  {
    title: "Blowouts & Styling",
    description: "Professional blowouts and special event styling for any occasion.",
    price: "Starting at $65",
    image: hairStylingImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium hair services designed to enhance your natural beauty
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-0 shadow-soft overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-warm-brown">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-bronze">
                    {service.price}
                  </span>
                  <Button variant="luxury" size="sm">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;