import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Code,
  Users,
  Settings,
  Award,
  Building2,
  Smartphone,
  HeadphonesIcon,
  FileCheck,
  Network,
  Wrench,
  Menu,
  X,
  Truck,
  Palette,
  PhoneCall
} from "lucide-react";
import Navbar from "@/components/ui/Navbar";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Logistics Solutions",
      description:
        "Comprehensive logistics and supply chain management solutions including transportation, warehousing, and distribution.",
      link: "/logistics",
    },

    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporate Interior Design",
      description:
        "Complete interior design services for residential, commercial, and corporate spaces with modern aesthetics and functionality.",
      link: "/interior-design",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description:
        "Custom software solutions including web applications, mobile apps, enterprise systems, and digital transformation services.",
      link: "/software",
    },
 
    // {
    //   icon: <Network className="w-8 h-8" />,
    //   title: "Commercial Interiors",
    //   description:
    //     "Office spaces, retail stores, restaurants, and hospitality interiors designed for maximum impact and functionality.",
    //   link: "#",
    // },
    // {
    //   icon: <Smartphone className="w-8 h-8" />,
    //   title: "Mobile Applications",
    //   description:
    //     "iOS and Android mobile app development with modern UI/UX design and seamless user experiences.",
    //   link: "#",
    // },
    // {
    //   icon: <FileCheck className="w-8 h-8" />,
    //   title: "Logistics Management",
    //   description:
    //     "End-to-end logistics management including inventory control, fleet management, and supply chain optimization.",
    //   link: "#",
    // },
    // {
    //   icon: <Wrench className="w-8 h-8" />,
    //   title: "Project Consulting",
    //   description:
    //     "Expert consulting services for software projects, interior design planning, and logistics optimization strategies.",
    //   link: "#",
    // },
    // {
    //   icon: <Award className="w-8 h-8" />,
    //   title: "Quality Assurance",
    //   description:
    //     "Comprehensive testing and quality assurance services ensuring highest standards across all our service domains.",
    //   link: "#",
    // },
  ];

  const features = [
    "Award-Winning Interior Designs",
    "Custom Software Development",
    "End-to-End Logistics Solutions",
    "Commercial & Corporate Interiors",
    "Mobile & Web Applications",
    "Supply Chain Management",
    "15+ Years Industry Experience",
    "800+ Successful Projects",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
    <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-background to-tech-50 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg')`,
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-gradient-to-r from-brand-100 to-tech-100 text-brand-800 border-brand-200">
              <Award className="mr-2 w-4 h-4" />
              ISO 9001:2015 Certified Company
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Transforming Spaces, Building Software &{" "}
              <span className="bg-gradient-to-r from-brand-600 to-tech-600 bg-clip-text text-transparent">
                Optimizing Logistics
              </span>
            </h1>

            <p className="mb-8 text-xl text-muted-foreground sm:text-2xl lg:text-xl max-w-3xl mx-auto leading-relaxed">
              A multi-disciplinary company specializing in interior design,
              software development, and logistics solutions. We create beautiful
              spaces, innovative technology, and efficient supply chain systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start-project">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-500 to-tech-500 hover:from-brand-600 hover:to-tech-600 text-lg px-8 py-6"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-brand-200 hover:bg-brand-50"
                >
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-3 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600">100+</div>
                <div className="text-sm text-muted-foreground">
                  Interior Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600">150+</div>
                <div className="text-sm text-muted-foreground">
                  Logistics Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">New Vertical Launch</div>
                <div className="text-sm text-muted-foreground">
                Software Development Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200">
              Our Expertise
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Multi-Domain Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From stunning interior designs to cutting-edge software
              development and efficient logistics solutions - we deliver
              excellence across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link to={service.link} key={index}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-brand-100 to-tech-100 text-brand-700 group-hover:from-brand-500 group-hover:to-tech-500 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-brand-50/50 to-tech-50/50">
        <div className="container mx-auto px-4">
          {/* Interior Design Portfolio */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200">
                <Palette className="mr-2 w-4 h-4" />
                Interior Design Portfolio
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Transforming Spaces, Creating Dreams
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our stunning interior design projects across
                residential, commercial, and corporate spaces.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg"
                    alt="A bright and open living room showcasing contemporary interior design and luxury furnishings"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold text-lg">
                      Luxury Villa Interior
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Modern Luxury Villa</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete home makeover with contemporary design elements and
                    smart home integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Residential
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Modern
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Luxury
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
                    alt="Open-plan office with modern decor and natural lighting, ideal for productivity"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold text-lg">Corporate Office</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Tech Startup Office</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Open-concept workspace design promoting collaboration and
                    productivity.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Commercial
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Tech
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Modern
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg"
                    alt="Elegant lobby with comfortable sofas, large windows, and natural light enhancing the indoor ambiance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-semibold text-lg">
                      Boutique Hotel Lobby
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Boutique Hotel Lobby</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Elegant hospitality design creating memorable guest
                    experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Hospitality
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Elegant
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Premium
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-brand-200 hover:bg-brand-50"
              >
                View Complete Portfolio
              </Button>
            </div> */}
          </div>

          {/* Software Development Portfolio */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-tech-100 text-tech-800 border-tech-200">
                <Code className="mr-2 w-4 h-4" />
                Software Development Portfolio
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Innovative Technology Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge software solutions including AI, CRM systems, and
                custom applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-tech-100 to-brand-100 text-tech-700 group-hover:from-tech-500 group-hover:to-brand-500 group-hover:text-white transition-all duration-300">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-tech-600 transition-colors">
                    AI-Powered CRM
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Intelligent customer relationship management with predictive
                    analytics and automation.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">
                      AI/ML
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      CRM
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-brand-100 to-tech-100 text-brand-700 group-hover:from-brand-500 group-hover:to-tech-500 group-hover:text-white transition-all duration-300">
                    <Code className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-600 transition-colors">
                    E-Commerce Platform
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Complete online marketplace with payment integration and
                    inventory management.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">
                      E-Commerce
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Web
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-tech-100 to-brand-100 text-tech-700 group-hover:from-tech-500 group-hover:to-brand-500 group-hover:text-white transition-all duration-300">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-tech-600 transition-colors">
                    HR Management
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Comprehensive HR solution with payroll, attendance, and
                    performance tracking.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">
                      HRMS
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Enterprise
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-brand-100 to-tech-100 text-brand-700 group-hover:from-brand-500 group-hover:to-tech-500 group-hover:text-white transition-all duration-300">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-600 transition-colors">
                    IoT Dashboard
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    Real-time monitoring and control system for smart devices
                    and sensors.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">
                      IoT
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Dashboard
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-16">
              <Button
                variant="outline"
                size="lg"
                className="border-tech-200 hover:bg-tech-50"
              >
                Explore Our Tech Solutions
              </Button>
            </div>

            {/* Technology Showcase */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Technology That Powers Success
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our development team leverages cutting-edge technologies
                  including AI, machine learning, and modern frameworks to
                  create solutions that drive business growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative p-4 rounded-xl bg-gradient-to-r from-tech-50 to-tech-100 border border-tech-200 hover:border-tech-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-tech-500 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:animate-pulse">
                          <CheckCircle className="w-5 h-5 text-white group-hover:animate-bounce" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-tech-900 group-hover:text-tech-700 transition-colors duration-300 group-hover:scale-105 transform origin-left">AI/ML Integration</span>
                        <p className="text-xs text-tech-600 mt-1 group-hover:text-tech-500 transition-colors duration-300">Advanced machine learning solutions</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-tech-400/0 to-tech-500/0 group-hover:from-tech-400/5 group-hover:to-tech-500/10 transition-all duration-500 pointer-events-none"></div>
                  </div>
                  
                  <div className="group relative p-4 rounded-xl bg-gradient-to-r from-tech-50 to-tech-100 border border-tech-200 hover:border-tech-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-200">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-tech-500 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:animate-pulse">
                          <CheckCircle className="w-5 h-5 text-white group-hover:animate-bounce" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-tech-900 group-hover:text-tech-700 transition-colors duration-300 group-hover:scale-105 transform origin-left">Cloud Solutions</span>
                        <p className="text-xs text-tech-600 mt-1 group-hover:text-tech-500 transition-colors duration-300">Scalable cloud infrastructure</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-tech-400/0 to-tech-500/0 group-hover:from-tech-400/5 group-hover:to-tech-500/10 transition-all duration-500 pointer-events-none"></div>
                  </div>
                  
                  <div className="group relative p-4 rounded-xl bg-gradient-to-r from-tech-50 to-tech-100 border border-tech-200 hover:border-tech-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-tech-500 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:animate-pulse">
                          <CheckCircle className="w-5 h-5 text-white group-hover:animate-bounce" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-tech-900 group-hover:text-tech-700 transition-colors duration-300 group-hover:scale-105 transform origin-left">Mobile Apps</span>
                        <p className="text-xs text-tech-600 mt-1 group-hover:text-tech-500 transition-colors duration-300">Cross-platform mobile development</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-tech-400/0 to-tech-500/0 group-hover:from-tech-400/5 group-hover:to-tech-500/10 transition-all duration-500 pointer-events-none"></div>
                  </div>
                  
                  <div className="group relative p-4 rounded-xl bg-gradient-to-r from-tech-50 to-tech-100 border border-tech-200 hover:border-tech-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-700 delay-400">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-tech-500 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:animate-pulse">
                          <CheckCircle className="w-5 h-5 text-white group-hover:animate-bounce" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-tech-900 group-hover:text-tech-700 transition-colors duration-300 group-hover:scale-105 transform origin-left">Enterprise Systems</span>
                        <p className="text-xs text-tech-600 mt-1 group-hover:text-tech-500 transition-colors duration-300">Robust business solutions</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-tech-400/0 to-tech-500/0 group-hover:from-tech-400/5 group-hover:to-tech-500/10 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  alt="A woman with digital code projections on her face, representing technology and future concepts"
                  className="rounded-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-500/20 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Additional Software Showcase */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src="https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg"
                    alt="Hands holding a smartphone displaying business stages in a cozy indoor setting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold text-lg">
                      Mobile App Development
                    </h4>
                    <p className="text-sm opacity-90">
                      Native iOS & Android applications
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm">
                    Custom mobile applications with intuitive UI/UX design,
                    cross-platform compatibility, and seamless integration with
                    backend systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src="https://images.pexels.com/photos/6214474/pexels-photo-6214474.jpeg"
                    alt="Laptop displaying online shopping with boxes and cart, representing ecommerce"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold text-lg">
                      E-Commerce Solutions
                    </h4>
                    <p className="text-sm opacity-90">
                      Complete online marketplace platforms
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm">
                    Full-featured e-commerce platforms with payment gateways,
                    inventory management, analytics, and scalable cloud
                    infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Logistics Services */}
          <div>
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200">
                <Truck className="mr-2 w-4 h-4" />
                Logistics & Courier Services
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Comprehensive Logistics Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fast, secure, and trackable courier services with comprehensive
                logistics management. Authorized partners of leading logistics
                companies in India.
              </p>
            </div>

            {/* Main Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-lg bg-gradient-to-br from-brand-100 to-tech-100 text-brand-700 group-hover:from-brand-500 group-hover:to-tech-500 group-hover:text-white transition-all duration-300">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-600 transition-colors">
                    Domestic Courier Services
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Reliable nationwide courier services with same-day delivery
                    within Mumbai and next-day delivery across Maharashtra.
                  </p>
                  <div className="text-lg font-bold text-brand-600">01</div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-lg bg-gradient-to-br from-tech-100 to-brand-100 text-tech-700 group-hover:from-tech-500 group-hover:to-brand-500 group-hover:text-white transition-all duration-300">
                    <Network className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-tech-600 transition-colors">
                    International Courier Services
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Global shipping solutions with customs clearance and
                    international tracking for worldwide deliveries.
                  </p>
                  <div className="text-lg font-bold text-tech-600">02</div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-lg bg-gradient-to-br from-brand-100 to-tech-100 text-brand-700 group-hover:from-brand-500 group-hover:to-tech-500 group-hover:text-white transition-all duration-300">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-600 transition-colors">
                    Express Delivery
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Fast express delivery services with guaranteed time slots
                    and priority handling for urgent shipments.
                  </p>
                  <div className="text-lg font-bold text-brand-600">03</div>
                </CardContent>
              </Card>
            </div>

            {/* Partnerships & Trust */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Authorized Partners</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We are proud authorized franchisees of{" "}
                  <strong>Delhivery Limited</strong> and partners with{" "}
                  <strong>DTDC</strong>, two of India's most trusted logistics
                  companies. This allows us to provide extensive network
                  coverage and advanced logistics technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-sm">
                      Extensive nationwide network
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-500 flex-shrink-0" />
                    <span className="text-sm">
                      Advanced tracking technology
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0" />
                    <span className="text-sm">Reliable delivery options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-500 flex-shrink-0" />
                    <span className="text-sm">Competitive pricing</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <p className="text-muted-foreground mb-6">
                  We are well-experienced courier professionals committed to
                  delivering excellence.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Trust & Reliability</h4>
                    <p className="text-sm text-muted-foreground">
                      We deliver more than packages; we deliver trust with
                      timely and secure deliveries.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Advanced Tracking</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time GPS tracking allows you to monitor packages
                      every step of the way.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">24/7 Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Our customer support team is always ready to assist with
                      any queries or requests.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Ship Your Package?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Experience reliable, fast, and secure logistics services with
                our comprehensive courier solutions.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/logistics">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-500 to-tech-500 hover:from-brand-600 hover:to-tech-600"
                  >
                    Explore Logistics Services
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-200 hover:bg-brand-50"
                >
                  <a href="https://www.bhavyaenterprises.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">www.bhavyaenterprises.com</a>
                </Button>
              </div> */}
            </div>

            {/* Logistics Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">
                1000000+
                </div>
                <div className="text-sm text-muted-foreground">
                  Packages Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-600 mb-2">
                  99.8%
                </div>
                <div className="text-sm text-muted-foreground">
                  On-Time Delivery
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600 mb-2">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Partner Networks
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-600 mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-tech-100 text-tech-800 border-tech-200">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Three Decades of Multi-Domain Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From creating stunning interior spaces to developing innovative
                software solutions and optimizing supply chains, we bring
                unmatched expertise across these key industries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group relative p-4 rounded-xl bg-gradient-to-r from-brand-50 to-tech-50 border border-brand-200 hover:border-brand-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-in slide-in-from-bottom-4 duration-700"
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-500 to-tech-500 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:animate-pulse">
                          <CheckCircle className="w-5 h-5 text-white group-hover:animate-bounce" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-brand-900 group-hover:text-brand-700 transition-colors duration-300 group-hover:scale-105 transform origin-left">{feature}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-400/0 to-tech-400/0 group-hover:from-brand-400/5 group-hover:to-tech-400/10 transition-all duration-500 pointer-events-none"></div>
                  </div>
                ))}
              </div>

              <Link to="/software">
                <Button
                  size="lg"
                  className="mt-8 bg-gradient-to-r from-tech-500 to-brand-500 hover:from-tech-600 hover:to-brand-600"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Close-up of professionals shaking hands over coffee in a modern office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/90 to-tech-500/90">
                  <div className="h-full w-full p-8 flex flex-col justify-center text-white">
                    <div className="text-center">
                      <Award className="w-16 h-16 mx-auto mb-4 text-white" />
                      <h3 className="text-2xl font-bold mb-2">
                        Excellence Across Industries
                      </h3>
                      <p className="text-white/90 mb-6">
                        Multi-domain expertise delivering outstanding results
                      </p>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Quality Assurance</span>
                          <span>100%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Client Satisfaction</span>
                          <span>98%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>On-time Delivery</span>
                          <span>95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200">
              About Bhavya Enterprises
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Your Trusted Multi-Domain Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Established as a leading enterprise offering excellence across
              interior design, software development, and logistics services with
              a commitment to quality and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Company History & Mission */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Story & Mission</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to provide comprehensive business
                  solutions, Bhavya Enterprises has grown into a multi-domain
                  company serving clients across various industries. Our unique
                  approach combines creativity, technology, and operational
                  excellence.
                </p>
                <p>
                  We believe in delivering not just services, but complete
                  solutions that transform businesses and create lasting value.
                  From designing inspiring spaces to developing cutting-edge
                  software and optimizing supply chains, we are your one-stop
                  solution.
                </p>
                <p>
                  <p>SCO 393, 2nd floor Sector - 37 D, Chandigarh</p>
                  <p className="mt-2">B.O. : Plot No. 1025, Rani Sati Nagar, Nirman Nagar, Jaipur-302019</p>innovation, and customer
                  satisfaction has earned us the trust of over 500+ clients across, Delhi,  Mumbai, Punjab, Rajasthan, and beyond.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Our Core Values</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Innovation</div>
                      <div className="text-sm text-muted-foreground">
                        Cutting-edge solutions
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Quality</div>
                      <div className="text-sm text-muted-foreground">
                        Excellence in delivery
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Reliability</div>
                      <div className="text-sm text-muted-foreground">
                        Consistent performance
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-tech-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Customer Focus</div>
                      <div className="text-sm text-muted-foreground">
                        Client-centric approach
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Office</h3>
              <Card className="p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-8 h-8 text-brand-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Head Office</h4>
                    <address className="not-italic text-muted-foreground leading-relaxed">
                      SCO 393, 2nd floor Sector - 37 D, Chandigarh
                      <br />
                      B.O. : Plot No. 1025, Rani Sati Nagar, Nirman Nagar, Jaipur-302019
                      <br />
                      India
                    </address>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Card className="p-4">
                  <div className="flex items-center space-x-3">
                 <PhoneCall className="w-5 h-5 text-tech-500" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">
                        +91 - 9821019626 <br/>
                        <a href="tel:+919988818489" className="hover:text-brand-600">+91 99888 18489</a><br />
                        <a href="tel:0172-4031600" className="hover:text-brand-600">0172-4031600</a>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-tech-500" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">
                        info@bhavyaenterprises.com
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-brand-50 to-tech-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div> 
          </div>

          {/* Our Clients */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are proud to work with diverse clients across various
                sectors, from startups to established enterprises.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {/* <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-brand-600 mb-2">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Tech Companies
                </div>
              </Card> */}
              {/* <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-tech-600 mb-2">
                  100+
                </div>
                <div className="text-sm text-muted-foreground">
                  Retail Businesses
                </div>
              </Card> */}
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-brand-600 mb-2">
                  400+
                </div>
                <div className="text-sm text-muted-foreground">
                Bank/ NBFC /Corporate Offices
                </div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-tech-600 mb-2">30+</div>
                <div className="text-sm text-muted-foreground">
                  Hotels & Restaurants
                </div>
              </Card>
              {/* <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-brand-600 mb-2">
                  150+
                </div>
                <div className="text-sm text-muted-foreground">
                  E-commerce Partners
                </div>
              </Card> */}
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-tech-600 mb-2">
                  200+
                </div>
                <div className="text-sm text-muted-foreground">
                  Logistics Clients
                </div>
              </Card>
            </div>
          </div>

          {/* Team & Expertise */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-tech-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Expert Team</h4>
              <p className="text-muted-foreground mb-4">
                50+ skilled professionals including designers, developers,
                project managers, and logistics experts.
              </p>
              <div className="text-2xl font-bold text-brand-600">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-tech-500 to-brand-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Industry Experience</h4>
              <p className="text-muted-foreground mb-4">
                Over 15 years of combined experience across interior design,
                software development, and logistics.
              </p>
              <div className="text-2xl font-bold text-tech-600">15+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-tech-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">Project Success</h4>
              <p className="text-muted-foreground mb-4">
                Successfully completed over 800 projects with 98% client
                satisfaction rate across all major domains.
              </p>
              <div className="text-2xl font-bold text-brand-600">800+</div>
              <div className="text-sm text-muted-foreground">
                Completed Projects
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-8 lg:py-12 bg-gradient-to-br from-brand-50/30 to-tech-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-100 text-brand-800 border-brand-200">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our clients across interior design, software development, and
              logistics sectors trust us for exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-tech-500 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                  RS
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Bhavya Enterprises transformed our office space beautifully.
                The modern design increased our team's productivity and client
                impressions."
              </p>
              <div>
                <div className="font-semibold">Rajesh Sharma</div>
                <div className="text-sm text-muted-foreground">
                  CEO, TechCorp Solutions
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-tech-500 to-brand-500 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                  AP
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Their AI-powered CRM solution revolutionized our customer
                management. Outstanding technical expertise and support."
              </p>
              <div>
                <div className="font-semibold">Anita Patel</div>
                <div className="text-sm text-muted-foreground">
                  Director, Global Enterprises
                </div>
              </div>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-border/50">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-tech-500 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xl">
                  MK
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Reliable logistics partner for our e-commerce business. Fast
                delivery and excellent tracking system."
              </p>
              <div>
                <div className="font-semibold">Manoj Kumar</div>
                <div className="text-sm text-muted-foreground">
                  Founder, StyleHub
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">98%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-600 mb-2">400+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-600 mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact us today to discuss your software development needs and
              discover how we can help you achieve your goals.
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
              <address className="text-brand-600 hover:text-brand-700 font-medium">
                SCO 393, 2nd floor Sector - 37 D, Chandigarh
                <br /><br />
                <strong>B.O. :</strong> Plot No. 1025, Rani Sati Nagar, Nirman Nagar, Jaipur-302019
              </address>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/start-project">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-500 to-tech-500 hover:from-brand-600 hover:to-tech-600 text-lg px-8 py-6"
              >
                Schedule a Consultation
              </Button>
            </Link>
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
