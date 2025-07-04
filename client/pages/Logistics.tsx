import {
  ArrowLeft,
  Truck,
  Globe,
  Warehouse,
  Package,
  Shield,
  Clock,
  Users,
  Network,
  Phone,
  Mail,
  MapPin,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Logistics() {
  const coreServices = [
    {
      icon: <Truck className="w-8 h-8 text-brand-600" />,
      title: "Freight & Transportation",
      description: "Reliable domestic and international shipping with real-time tracking and proof of delivery.",
    },
    {
      icon: <Warehouse className="w-8 h-8 text-brand-600" />,
      title: "Warehousing & Distribution",
      description: "Secure storage, inventory management, and efficient distribution to streamline your supply chain.",
    },
    {
      icon: <Package className="w-8 h-8 text-brand-600" />,
      title: "E-commerce Logistics",
      description: "Specialized solutions for online businesses, including order fulfillment and returns management.",
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-600" />,
      title: "Express & Same-Day Delivery",
      description: "Time-critical delivery services for urgent shipments with guaranteed timelines.",
    },
  ];

  const logisticsNetwork = [
    {
      name: "Delhivery",
      description: "Leveraging India's largest fully-integrated logistics provider for extensive reach.",
    },
    {
      name: "DTDC",
      description: "Partnering with a trusted name for reliable courier services across India and globally.",
    },
  ];

  const industriesServed = [
    "E-commerce & Retail",
    "Manufacturing & Industrial",
    "Pharmaceuticals & Healthcare",
    "Automotive",
    "Electronics & High-Tech",
  ];

  const whyUs = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Extensive Network",
      description: "Broad domestic and international coverage through our trusted logistics partners.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability & Security",
      description: "Commitment to secure handling and on-time delivery for every shipment.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "Utilizing modern tech for real-time tracking, and efficient supply chain management.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Expert team providing personalized service and support for all your logistics needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:text-brand-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-50/50 to-tech-50/50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200">
            Logistics Solutions
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Efficient & Reliable Logistics Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive logistics and supply chain solutions to keep your business moving forward.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete range of logistics services to meet your supply chain and delivery needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service) => (
              <Card key={service.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-brand-100 mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Network Section */}
      <section id="network" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Logistics Network</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            As authorized franchisees of leading logistics companies, we offer an extensive delivery network.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {logisticsNetwork.map((partner) => (
              <Card key={partner.name} className="p-6 text-center bg-brand-50/50 border-brand-100">
                <h3 className="text-2xl font-bold text-brand-700 mb-2">{partner.name}</h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section id="industries" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Providing specialized logistics solutions for a wide range of industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industriesServed.map((industry) => (
              <Badge key={industry} variant="outline" className="text-lg px-6 py-2">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our focus on reliability, technology, and customer service makes us your ideal logistics partner.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-brand-600">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200">
              Get In Touch
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact us today to discuss your logistics needs and get a customized quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-brand-100 to-tech-100 text-brand-700 mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">
                Call us for immediate assistance
              </p>
              <a href="tel:+919988818489" className="text-brand-600 hover:text-brand-700 font-medium">+91 99888 18489</a>
              <br />
              <a href="tel:01724031600" className="text-brand-600 hover:text-brand-700 font-medium">0172-4031600</a>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-tech-100 to-brand-100 text-tech-700 mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                Send us your requirements
              </p>
              <a href="mailto:bhavyaenterpriseschd@gmail.com" className="text-tech-600 hover:text-tech-700 font-medium">bhavyaenterpriseschd@gmail.com</a>
              <br />
              <a href="mailto:helpdesk@bhavyaenterprises.com" className="text-tech-600 hover:text-tech-700 font-medium">helpdesk@bhavyaenterprises.com</a>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-brand-100 to-tech-100 text-brand-700 mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground mb-4">Visit our office</p>
              <address className="text-sm not-italic text-muted-foreground leading-relaxed">
                SCO 393, 2nd floor Sector - 37 D, Chandigarh
                <br /><br />
                <strong>B.O. :</strong> Plot No. 1025, Rani Sati Nagar, Nirman Nagar, Jaipur-302019
              </address>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffdc28ddde5e54c3f9d3cea402d3f7131%2Fcf30f0ca4be14927af75698ec9d7768b?format=webp&width=800"
                  alt="Bhavya Enterprises Logo"
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-tech-600 bg-clip-text text-transparent">
                  Bhavya Enterprises
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Multi-domain company specializing in interior design, software
                development, and logistics solutions. Creating beautiful spaces,
                innovative technology, and efficient supply chains.
              </p>
              <Badge className="bg-brand-100 text-brand-800 border-brand-200">
                <Award className="mr-2 w-4 h-4" />
                Excellence Across Industries
              </Badge>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Interior Design</li>
                <li>Software Development</li>
                <li>Logistics Solutions</li>
                <li>Project Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="tel:+919988818489" className="hover:text-brand-600">+91 99888 18489</a></li>
                <li><a href="mailto:helpdesk@bhavyaenterprises.com" className="hover:text-brand-600">helpdesk@bhavyaenterprises.com</a></li>
                <li>SCO 393, 2nd floor Sector - 37 D, Chandigarh</li>
                <li><a href="https://www.bhavyaenterprises.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">www.bhavyaenterprises.com</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Bhavya Enterprises. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
