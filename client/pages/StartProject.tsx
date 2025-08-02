import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/ui/Navbar";
export default function StartProject() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for your message! We will get back to you shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
     <Navbar />

      <main className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Start Your Project
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your vision to life? Fill out the form below, and one of our experts will be in touch.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-brand-600" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:bhavyaenterpriseschd@gmail.com" className="text-muted-foreground hover:text-brand-600">bhavyaenterpriseschd@gmail.com</a>
                      <br />
                      <a href="mailto:helpdesk@bhavyaentrprises.com" className="text-muted-foreground hover:text-brand-600">helpdesk@bhavyaentrprises.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-brand-600" />
                    <div>
                      <h4 className="font-semibold">Helpdesk No</h4>
                      <a href="tel:+919988818489" className="text-muted-foreground hover:text-brand-600">+91 99888 18489</a>
                      <br />
                      <a href="tel:0172-4031600" className="text-muted-foreground hover:text-brand-600">0172-4031600</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Building className="w-6 h-6 text-brand-600" />
                    <div>
                      <h4 className="font-semibold">Office</h4>
                      <p className="text-muted-foreground">SCO 393, 2nd floor Sector - 37 D, Chandigarh</p>
                      <h4 className="font-semibold mt-2">B.O.</h4>
                      <p className="text-muted-foreground">Plot No. 1025, Rani Sati Nagar, Nirman Nagar, Jaipur-302019</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Multi-Disciplinary Experts</li>
                    <li>✓ Client-Centric Approach</li>
                    <li>✓ Proven Track Record</li>
                    <li>✓ Innovative Solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tell Us About Your Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" required value={formData.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Acme Inc." value={formData.company} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interior-design">Interior & Infrastructure</SelectItem>
                          <SelectItem value="software-development">Software Development</SelectItem>
                          <SelectItem value="logistics">Logistics Solutions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea id="message" placeholder="Tell us about your project requirements, goals, and timeline." rows={6} required value={formData.message} onChange={handleChange} />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-brand-500 to-tech-500 hover:from-brand-600 hover:to-tech-600">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
