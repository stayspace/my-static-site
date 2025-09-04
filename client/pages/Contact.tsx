import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ContactModal } from "@/components/ContactModal";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="font-bold text-xl text-primary-600">
              <a href="/">StaySpace</a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="hidden md:flex space-x-8">
                <a
                  href="/"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Home
                </a>
                <a
                  href="/pricing"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="/careers"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Careers
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-primary-600 text-primary-600 hover:bg-primary-50"
                onClick={() =>
                  alert(
                    "Please contact our sales team at support@stayspace.in or +91 9443285501. We are currently not onboarding new customers directly through the app.",
                  )
                }
              >
                Download App
              </Button>
              <ContactModal
                trigger={
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                    Book Demo
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get in <span className="text-primary-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions about StaySpace? Want to schedule a demo? We're here
            to help you transform your hostel management.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of the following channels. We're
                  committed to responding within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 rounded-full p-3">
                        <Phone className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Phone
                        </h3>
                        <p className="text-gray-600">
                          Call us for immediate assistance
                        </p>
                        <a
                          href="tel:+919443285501"
                          className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                        >
                          +91 9443285501
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 rounded-full p-3">
                        <Mail className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Email
                        </h3>
                        <p className="text-gray-600">
                          Send us your questions or concerns
                        </p>
                        <a
                          href="mailto:support@stayspace.in"
                          className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                        >
                          support@stayspace.in
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 rounded-full p-3">
                        <MapPin className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Location
                        </h3>
                        <p className="text-gray-600">Our headquarters</p>
                        <p className="text-primary-600 font-medium">
                          4th Floor, GR Plaza, 18th Cross Rd, Sector 3, HSR
                          Layout, Bengaluru, Karnataka 560102
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 rounded-full p-3">
                        <Clock className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Business Hours
                        </h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM IST
                        </p>
                        <p className="text-gray-600">
                          Saturday: 10:00 AM - 4:00 PM IST
                        </p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 9443285501"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="What can we help you with?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your requirements or questions..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about StaySpace
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly can we get started with StaySpace?
                </h3>
                <p className="text-gray-600">
                  We can have you up and running within 24-48 hours after your
                  demo call. Our team will handle the setup and provide
                  comprehensive training.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide 24/7 customer support via phone, email, and
                  live chat. Our team is always ready to help you with any
                  questions or issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can StaySpace handle multiple properties?
                </h3>
                <p className="text-gray-600">
                  Absolutely! StaySpace is designed to manage multiple hostels
                  from a single dashboard, making it perfect for hostel chains
                  and property management companies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="font-bold text-2xl mb-4">StaySpace</div>
            <p className="text-gray-400 mb-4">
              4th Floor, GR Plaza, 18th Cross Rd, Sector 3, HSR Layout,
              Bengaluru, Karnataka 560102
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a
              href="tel:+919443285501"
              className="bg-primary-600 hover:bg-primary-700 hover:shadow-lg text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-3 min-w-[280px] transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span>Call +91 9443285501</span>
            </a>
            <a
              href="mailto:support@stayspace.in"
              className="bg-primary-600 hover:bg-primary-700 hover:shadow-lg text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-3 min-w-[280px] transform hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              <span>Email support@stayspace.in</span>
            </a>
          </div>

          <div className="flex justify-center items-center gap-8 mb-8">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms and Conditions
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            © 2024 StaySpace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
