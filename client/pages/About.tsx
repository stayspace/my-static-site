import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactModal } from "@/components/ContactModal";
import { MobileNavigation } from "@/components/MobileNavigation";
import {
  Building2,
  Users,
  Target,
  Award,
  ChevronRight,
  MapPin,
  Calendar,
  Heart,
  Phone,
  Mail,
} from "lucide-react";

export default function About() {
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
              <div className="hidden md:flex space-x-10">
                <a
                  href="/"
                  className="relative text-gray-700 font-medium py-2 px-1 transition-all duration-300 ease-in-out hover:text-primary-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </a>
                <a
                  href="/pricing"
                  className="relative text-gray-700 font-medium py-2 px-1 transition-all duration-300 ease-in-out hover:text-primary-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Pricing
                </a>
                <a
                  href="/about"
                  className="relative text-primary-600 font-semibold py-2 px-1 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300"
                >
                  About
                </a>
                <a
                  href="/careers"
                  className="relative text-gray-700 font-medium py-2 px-1 transition-all duration-300 ease-in-out hover:text-primary-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Careers
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 font-semibold"
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
                  <Button
                    size="lg"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 font-semibold"
                  >
                    Book Demo
                  </Button>
                }
              />
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation currentPage="about" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-primary-600 text-white">
            <MapPin className="w-4 h-4 mr-2" />
            Based in Bangalore
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We are <span className="text-primary-600">StaySpace</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            StaySpace is owned by Time Enterprises, based in Bangalore. We build
            powerful SaaS products to solve real-world problems. Our mission is
            to digitize and simplify complex business operations.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="text-xl mb-6">
                  Our Hostel Management App is built after deep research with
                  real hostel owners and tenants. With a passion for clean
                  technology and simple interfaces, we're on a mission to
                  digitize the hostel experience for everyone — from managers to
                  students.
                </p>

                <p className="mb-6">
                  Founded in the vibrant tech hub of Bangalore, StaySpace
                  emerged from a simple observation: the hostel industry was
                  still relying on outdated methods of management. Paper
                  registers, manual tracking, and endless phone calls were the
                  norm, leading to inefficiencies and frustrated stakeholders.
                </p>

                <p className="mb-6">
                  We spent months interviewing hostel owners, managers, and
                  tenants across India to understand their pain points. What we
                  discovered was a clear need for a comprehensive, user-friendly
                  platform that could streamline operations while improving the
                  living experience for tenants.
                </p>

                <p>
                  Today, our platform serves hundreds of hostels across the
                  country, helping them save time, reduce costs, and create
                  better experiences for their tenants. We're just getting
                  started on our mission to transform the hostel industry
                  through technology.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do, from product development
              to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  User-Centric Design
                </h3>
                <p className="text-gray-600">
                  Every feature is designed with real users in mind. We
                  prioritize simplicity and usability in everything we build.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Problem-First Approach
                </h3>
                <p className="text-gray-600">
                  We don't build features for the sake of it. Every solution
                  addresses a real problem identified through user research.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10">
                <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Excellence in Execution
                </h3>
                <p className="text-gray-600">
                  Quality is non-negotiable. We maintain high standards in our
                  code, design, and customer support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform hostel management
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-primary-600 rounded-full p-2 mr-6 mt-1">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="bg-primary-50 inline-block px-3 py-1 rounded-full text-primary-700 text-sm font-medium mb-2">
                  2020
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Company Founded
                </h3>
                <p className="text-gray-600">
                  Time Enterprises was established in Bangalore with a vision to
                  digitize traditional business operations through innovative
                  SaaS solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-600 rounded-full p-2 mr-6 mt-1">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="bg-primary-50 inline-block px-3 py-1 rounded-full text-primary-700 text-sm font-medium mb-2">
                  Early 2024
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Market Research
                </h3>
                <p className="text-gray-600">
                  Conducted extensive research with 50+ hostels across India to
                  understand pain points and requirements in hostel management.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-600 rounded-full p-2 mr-6 mt-1">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="bg-primary-50 inline-block px-3 py-1 rounded-full text-primary-700 text-sm font-medium mb-2">
                  Mid 2024
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Platform Development
                </h3>
                <p className="text-gray-600">
                  Began development of our comprehensive Hostel Management
                  Platform, focusing on user experience and scalability.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-600 rounded-full p-2 mr-6 mt-1">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="bg-primary-50 inline-block px-3 py-1 rounded-full text-primary-700 text-sm font-medium mb-2">
                  Present
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Growing Impact
                </h3>
                <p className="text-gray-600">
                  Now serving 100+ hostels across India, helping them streamline
                  operations and improve tenant satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built by Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines deep technical expertise with real-world
              understanding of the hostel industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">TE</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Engineering Team
                </h3>
                <p className="text-gray-600 mb-4">
                  Experienced developers with expertise in modern web
                  technologies and scalable architecture.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-primary-50 text-primary-700"
                >
                  Full-Stack Development
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">UX</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Design Team
                </h3>
                <p className="text-gray-600 mb-4">
                  User experience designers focused on creating intuitive
                  interfaces for all user types.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-primary-50 text-primary-700"
                >
                  UX/UI Design
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">BZ</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Business Team
                </h3>
                <p className="text-gray-600 mb-4">
                  Industry experts with deep understanding of hostel operations
                  and challenges.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-primary-50 text-primary-700"
                >
                  Industry Knowledge
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to explore our platform?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            See how our Hostel Management App can transform your operations and
            improve tenant satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Explore the App
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg transform hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Contact Us
            </Button>
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
