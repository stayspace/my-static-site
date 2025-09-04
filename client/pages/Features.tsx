import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Phone, Mail } from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="font-bold text-xl text-primary-600">
                StaySpace
              </a>
              <div className="hidden md:flex space-x-6">
                <a
                  href="/"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Home
                </a>
                <a href="/features" className="text-primary-600 font-medium">
                  Features
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
                  href="/blog"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Blog
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
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
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Detailed <span className="text-primary-600">Features</span> Page
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're working on a comprehensive features page that will showcase
            all the powerful capabilities of our Hostel Management App.
          </p>

          <Card className="max-w-2xl mx-auto border-0 shadow-xl">
            <CardContent className="p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600 mb-8">
                This page will include detailed information about:
              </p>
              <ul className="text-left text-gray-600 space-y-3 mb-8">
                <li>• User Roles & Authentication</li>
                <li>• Hostel & Room Management</li>
                <li>• Tenant Management</li>
                <li>• Rent & Payments</li>
                <li>• Complaint Handling</li>
                <li>• Reports & Dashboard</li>
                <li>• Notifications</li>
                <li>• Data Export (PDF, CSV)</li>
                <li>• Custom Settings</li>
              </ul>
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                View Features on Homepage
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
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
