import { Link } from "react-router-dom";
import { ArrowLeft, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/ui/Navbar";
const portfolioProjects = [
  {
    title: "Modern Urban Apartment",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop",
    description: "A sleek and modern apartment design focusing on functionality and minimalist aesthetics."
  },
  {
    title: "Cozy Cafe & Bistro",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    description: "A warm and inviting space for a local cafe, designed to foster community and comfort."
  },
  {
    title: "Innovative Tech Office",
    category: "Corporate",
    imageUrl: "https://images.unsplash.com/photo-1521737852577-684897f092a2?q=80&w=2072&auto=format&fit=crop",
    description: "A dynamic and collaborative workspace for a growing tech company, featuring flexible layouts."
  },
  {
    title: "Luxury Retail Boutique",
    category: "Retail",
    imageUrl: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop",
    description: "An elegant and high-end retail environment that showcases products in the best light."
  },
  {
    title: "Serene Spa & Wellness Center",
    category: "Hospitality",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
    description: "A tranquil and rejuvenating space designed for relaxation and well-being."
  },
  {
    title: "Family-Friendly Suburban Home",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41fa2047?q=80&w=1974&auto=format&fit=crop",
    description: "A comfortable and stylish home designed for a modern family's needs."
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />


      <main>
        <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-50/50 to-tech-50/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore a selection of our finest projects across interior design, software, and logistics.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="relative aspect-video">
                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <Eye className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
