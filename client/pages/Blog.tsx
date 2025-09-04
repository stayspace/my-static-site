import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Calendar, User, Phone, Mail } from "lucide-react";

export default function Blog() {
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
                <a
                  href="/features"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
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
                <a href="/blog" className="text-primary-600 font-medium">
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

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Insights, Updates &{" "}
            <span className="text-primary-600">Tips from StaySpace</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest in hostel management, product updates,
            and industry insights.
          </p>
        </div>
      </section>

      {/* Blog Posts Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold">Coming Soon</h3>
                    <p className="mt-2">Feature Article</p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary-50 text-primary-700"
                    >
                      Product Update
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Dec 15, 2024
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      StaySpace Team
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    The Future of Hostel Management: AI-Powered Insights
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Discover how artificial intelligence is revolutionizing
                    hostel operations, from predictive maintenance to automated
                    tenant matching. Learn about upcoming features that will
                    make your hostel management even smarter.
                  </p>
                  <Button
                    variant="outline"
                    className="border-primary-600 text-primary-600 hover:bg-primary-50"
                  >
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar with recent posts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Recent Posts</h3>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Badge
                    variant="secondary"
                    className="bg-primary-50 text-primary-700 mb-3"
                  >
                    Hostel Tips
                  </Badge>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    10 Ways to Improve Tenant Satisfaction
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Simple strategies that can make a big difference in tenant
                    experience.
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    Dec 10, 2024
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Badge
                    variant="secondary"
                    className="bg-primary-50 text-primary-700 mb-3"
                  >
                    Tenant Stories
                  </Badge>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    From Paper to Digital: A Success Story
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    How Green Valley Hostel transformed their operations using
                    our platform.
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    Dec 5, 2024
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Badge
                    variant="secondary"
                    className="bg-primary-50 text-primary-700 mb-3"
                  >
                    Product Update
                  </Badge>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    New Payment Integration Options
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    We've added support for UPI, mobile wallets, and more
                    payment methods.
                  </p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    Nov 28, 2024
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-0 shadow-xl">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  More Content Coming Soon
                </h2>
                <p className="text-gray-600 mb-8">
                  We're working on creating valuable content including:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left text-gray-600 mb-8">
                  <ul className="space-y-2">
                    <li>• Product tutorials and guides</li>
                    <li>�� Industry best practices</li>
                    <li>• Customer success stories</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Market insights and trends</li>
                    <li>• Feature announcements</li>
                    <li>• Tips for hostel management</li>
                  </ul>
                </div>
                <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                  Subscribe for Updates
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
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
