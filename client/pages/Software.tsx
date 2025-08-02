import {
  ArrowLeft,
  Code,
  Globe,
  Smartphone,
  Brain,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Layers,
  Briefcase,
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
export default function Software() {
  const coreServices = [
    {
      icon: <Globe className="w-8 h-8 text-tech-600" />,
      title: "Web Development",
      description: "Custom web apps, e-commerce sites, and APIs built with modern, scalable technologies.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-tech-600" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android with a focus on user experience.",
    },
    {
      icon: <Brain className="w-8 h-8 text-tech-600" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions using AI and ML to automate processes and derive insights from data.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-tech-600" />,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, CI/CD pipelines, and automated workflows for efficient deployment.",
    },
  ];

  const technologies = [
    "React",
    "Node.js",
    "Python",
    "Java",
    "React Native",
    "Flutter",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
  ];

  const industriesServed = [
    "Finance & Banking",
    "Healthcare",
    "E-commerce & Retail",
    "Education & EdTech",
    "Logistics & Supply Chain",
  ];

  const whyUs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agile Methodology",
      description: "Iterative development and regular feedback to ensure alignment with your business goals.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Scalable Architecture",
      description: "Building robust and future-proof systems that grow with your business.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Experienced Team",
      description: "A dedicated team of skilled developers, designers, and project managers.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Focused",
      description: "Implementing best practices for data protection and application security.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Navbar />


      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-tech-50/50 to-brand-50/50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-tech-100 text-tech-800 border-tech-200">
            Software Development
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Building Innovative Software Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We create cutting-edge software solutions that drive digital transformation and business growth.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end software development services to bring your ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service) => (
              <Card key={service.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-tech-100 mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tech" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We use a modern stack of technologies to build high-performance applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-lg px-6 py-2 border-tech-200 text-tech-800">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section id="industries" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our software solutions are tailored to the unique needs of various industries.
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
              Our commitment to quality, innovation, and client success sets us apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="text-tech-600">{item.icon}</div>
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
            <Badge className="mb-4 bg-tech-100 text-tech-800 border-tech-200">
              Get In Touch
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact us today to discuss your software development needs and discover how we can help you achieve your goals.
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
