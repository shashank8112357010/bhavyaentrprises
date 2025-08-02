import {
  ArrowLeft,
  Building,
  CheckCircle,
  ShieldCheck,
  Wrench,
  Users,
  TrendingUp,
  Map,
  Clock,
  Phone,
  Mail,
  MapPin,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/Navbar";
export default function InteriorDesign() {
  const coreServices = [
    {
      icon: <Wrench className="w-8 h-8 text-brand-600" />,
      title: "Preventive & Corrective Maintenance",
      description: "Proactive and reactive maintenance to keep your infrastructure in top condition.",
    },
    {
      icon: <Building className="w-8 h-8 text-brand-600" />,
      title: "Interior Repair & Setup",
      description: "Complete interior solutions, from minor repairs to full branch setups.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-600" />,
      title: "Facility Inspection & Upkeep",
      description: "Regular inspections and upkeep to ensure compliance and operational readiness.",
    },
    {
      icon: <Users className="w-8 h-8 text-brand-600" />,
      title: "On-site Technical Support",
      description: "Expert support for ACs, lighting, furniture, electricals, and more.",
    },
  ];

  const industriesServed = [
    "Banks",
    "NBFCs",
    "Insurance Companies",
    "Office Establishments",
  ];

  const clients = [
    "AU Small Finance Bank",
    "Bandhan Bank",
    "Azure Power",
    "roundglass",
    "Birla Sun Life Insurance",
    "TATA Capital",
    "ICICI Bank",
    "Mahindra Finance",
    "HDFC Ergo General Insurance",
    "Utkarsh Small Finance Bank",
    "Bajaj Allianz",
    "Kogta Financial",
    "Chola MS General Insurance",
    "Hero Housing Finance",
    "Aditya Birla Group",
    "Aadhar Housing Finance Ltd",
    "Yes Bank",
    "Future Generali Total Insurance Solutions",
    "Shriram Housing Finance",
  ];

  const projects = [
    {
      id: 1,
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern office space with blue dividers",
      title: "Corporate Office Renovation",
      description: "Complete overhaul of a 5,000 sq. ft. corporate office space, including new workstations and collaborative zones.",
    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Executive meeting room with wooden table",
      title: "Executive Boardroom Design",
      description: "A sophisticated boardroom featuring custom furniture, advanced AV integration, and premium finishes.",
    },
    {
      id: 3,
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Reception area with modern lighting",
      title: "Retail Space Fit-Out",
      description: "Designed and built a vibrant retail environment for a leading fashion brand, focusing on customer experience.",
    },
    {
      id: 4,
      imageSrc: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Open-plan office with workstations",
      title: "Startup Hub Interior",
      description: "A dynamic and flexible workspace for a growing tech startup, designed to foster innovation and teamwork.",
    },
    {
      id: 5,
      imageSrc: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Cafeteria with modern seating",
      title: "Commercial Cafeteria",
      description: "A bright and inviting cafeteria space for a large corporate campus, designed for comfort and efficiency.",
    },
    {
      id: 6,
      imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Small meeting pods",
      title: "Quiet Zone & Meeting Pods",
      description: "Installation of acoustic meeting pods and quiet zones to enhance productivity in an open-plan office.",
    },
  ];

  const whyUs = [
    {
      icon: <Map className="w-8 h-8" />,
      title: "300+ Service Locations",
      description: "Extensive network ensuring wide-reaching and prompt service delivery.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "4+ Years of Experience",
      description: "Proven track record of excellence and reliability in the industry.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Skilled, Verified Workforce",
      description: "Professional and trustworthy teams dedicated to quality service.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Technology-Driven",
      description: "Using streamlined ticketing systems for real-time tracking and resolution.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Navbar />


      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-50/50 to-tech-50/50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200 animate-bounce-in">
            Interior & Infrastructure
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
            Infrastructure & Maintenance Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Comprehensive solutions for maintaining and enhancing your physical infrastructure across hundreds of locations.
          </p>
          <div className="mt-10 flex justify-center animate-fade-in-up">
            <a href="#portfolio">
              <Button
                size="lg"
                className="button-glow bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-lift"
              >
                View Our Work
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Our Company Section */}
      <section id="about" className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">About Bhavya Enterprises</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bhavya Enterprises is a multi-vertical service provider specializing in Infrastructure Maintenance, Logistics & Courier Services, and Custom Software Solutions. With over four years of operational excellence and a presence across 300+ branches in New Delhi, Punjab, Haryana, Rajasthan, Himachal Pradesh, Madhya Pradesh, Uttar Pradesh, and Chandigarh, we are trusted by India’s top banking, NBFC, and insurance brands.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-brand-600">300+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Branches Served</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-brand-600">8+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">States & UTs Covered</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-8 lg:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 animate-fade-in-up">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              We offer a wide range of services to ensure your facilities are always operational and compliant.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <Card 
                key={service.title} 
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex p-4 rounded-full bg-brand-100 mb-4 animate-float">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section id="industries" className="py-8 lg:py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our expertise caters to the unique needs of various high-stakes industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industriesServed.map((industry, index) => (
              <Badge 
                key={industry} 
                variant="outline" 
                className="text-lg px-6 py-3 border-2 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 transition-all duration-300 hover:scale-105 hover:shadow-md animate-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-8 lg:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trusted By The Best</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are proud to partner with leading brands across India, ensuring their operations run smoothly.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-x space-x-12 py-4">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <p className="text-lg font-semibold text-muted-foreground whitespace-nowrap">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Latest Projects Section */}
      <section id="portfolio" className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200">
              Our Work
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Latest Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of our recent interior design and infrastructure projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <img
                    src={project.imageSrc}
                    alt={project.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Bhavya Enterprises?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality, reliability, and technology sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, index) => (
              <Card 
                key={item.title} 
                className="p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-brand-600 animate-float">{item.icon}</div>
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

      {/* Images Gallery Section */}
      <section id="gallery" className="py-8 lg:py-12 bg-gradient-to-br from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Interior Design Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our real project spaces, designed for comfort, style, and productivity.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-x space-x-6 py-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
                <div key={index} className="flex-shrink-0 w-80 rounded-2xl overflow-hidden shadow-xl bg-white transition-transform hover:scale-105 group">
                  <img
                    src={`/Interior${num}.png`}
                    alt={`Interior Project ${num}`}
                    className="w-full h-64 object-cover group-hover:brightness-90 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200">
              Get In Touch
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact us today to discuss your interior design and infrastructure needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in-up border-border/50">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-brand-100 to-tech-100 text-brand-700 mb-6 animate-float">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground mb-4">
                Call us for immediate assistance
              </p>
              <a href="tel:+919988818489" className="text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200">+91 99888 18489</a>
              <br />
              <a href="tel:01724031600" className="text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200">0172-4031600</a>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in-up border-border/50" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-tech-100 to-brand-100 text-tech-700 mb-6 animate-float">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">
                Send us your requirements
              </p>
              <a href="mailto:bhavyaenterpriseschd@gmail.com" className="text-tech-600 hover:text-tech-700 font-medium transition-colors duration-200">bhavyaenterpriseschd@gmail.com</a>
              <br />
              <a href="mailto:helpdesk@bhavyaenterprises.com" className="text-tech-600 hover:text-tech-700 font-medium transition-colors duration-200">helpdesk@bhavyaenterprises.com</a>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in-up border-border/50" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-brand-100 to-tech-100 text-brand-700 mb-6 animate-float">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground mb-4">Visit our office</p>
              <address className="text-brand-600 hover:text-brand-700 font-medium transition-colors duration-200">
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
