const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-brown mb-4">
              About Luxe Hair Studio
            </h2>
            <p className="text-xl text-muted-foreground">
              Where artistry meets expertise in hair care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-bronze mb-6">
                Our Story
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Founded with a passion for exceptional hair care, Luxe Hair Studio has been 
                transforming looks and boosting confidence for over a decade. Our team of 
                master stylists brings years of experience and ongoing education to every service.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that great hair is not just about technique—it's about understanding 
                each client's unique style, lifestyle, and vision. That's why we take the time 
                to consult, listen, and create personalized solutions for every guest.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-cream p-6 rounded-lg">
                <h4 className="text-xl font-serif font-semibold text-warm-brown mb-2">
                  Expert Stylists
                </h4>
                <p className="text-muted-foreground">
                  Our team consists of certified professionals with advanced training in the latest techniques.
                </p>
              </div>
              
              <div className="bg-cream p-6 rounded-lg">
                <h4 className="text-xl font-serif font-semibold text-warm-brown mb-2">
                  Premium Products
                </h4>
                <p className="text-muted-foreground">
                  We use only the finest professional-grade products for optimal results and hair health.
                </p>
              </div>
              
              <div className="bg-cream p-6 rounded-lg">
                <h4 className="text-xl font-serif font-semibold text-warm-brown mb-2">
                  Luxury Experience
                </h4>
                <p className="text-muted-foreground">
                  Enjoy a relaxing, upscale environment designed for your comfort and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;