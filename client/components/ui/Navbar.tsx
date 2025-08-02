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
} from "lucide-react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return( 
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffdc28ddde5e54c3f9d3cea402d3f7131%2Fcf30f0ca4be14927af75698ec9d7768b?format=webp&width=800"
                  alt="Bhavya Enterprises Logo"
                  className="w-12 h-12"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-tech-600 bg-clip-text text-transparent">
                  Bhavya Enterprises
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/interior-design"
                className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
              >
                <Palette className="w-4 h-4" />
                Interior Design
              </Link>
              <Link
                to="/software"
                className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
              >
                <Code className="w-4 h-4" />
                Software
              </Link>
              <Link
                to="/logistics"
                className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
              >
                <Truck className="w-4 h-4" />
                Logistics
              </Link>
              <a
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </a>
              <Link to="/start-project">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-brand-500 to-tech-500 hover:from-brand-600 hover:to-tech-600"
                >
                  Start Your Project
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/interior-design"
                  className="block px-3 py-2 text-base font-medium flex items-center gap-2"
                >
                  <Palette className="w-4 h-4" />
                  Interior Design
                </Link>
                <Link
                  to="/software"
                  className="block px-3 py-2 text-base font-medium flex items-center gap-2"
                >
                  <Code className="w-4 h-4" />
                  Software
                </Link>
                <Link
                  to="/logistics"
                  className="block px-3 py-2 text-base font-medium flex items-center gap-2"
                >
                  <Truck className="w-4 h-4" />
                  Logistics
                </Link>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-base font-medium"
                >
                  Contact
                </a>
                <div className="px-3 py-2">
                  <Link to="/start-project">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-brand-500 to-tech-500 hover:from-brand-600 hover:to-tech-600"
                    >
                      Start Your Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
  )
}