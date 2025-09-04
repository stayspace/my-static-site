import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactModal } from "@/components/ContactModal";
import { MobileNavigation } from "@/components/MobileNavigation";
import {
  Building2,
  Users,
  CreditCard,
  MessageSquare,
  BarChart3,
  Bell,
  Download,
  Settings,
  Shield,
  Clock,
  ChevronRight,
  Star,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="font-bold text-xl text-primary-600">StaySpace</div>

            {/* Desktop Navigation */}
            <div className="flex-1 flex justify-center">
              <div className="hidden md:flex space-x-10">
                <a
                  href="/"
                  className="relative text-primary-600 font-semibold py-2 px-1 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300"
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
                  className="relative text-gray-700 font-medium py-2 px-1 transition-all duration-300 ease-in-out hover:text-primary-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
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

            {/* Desktop Actions */}
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
            <MobileNavigation currentPage="home" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-primary-50 text-primary-700 border-primary-200"
            >
              Trusted by 100+ Hostels
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Simplify Hostel Life with{" "}
              <span className="text-primary-600">StaySpace</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              For hostel owners, staff, and tenants — manage everything in one
              place. Streamline operations, improve communication, and create
              better living experiences.
            </p>
            <div className="flex justify-center items-center mb-16">
              <ContactModal
                trigger={
                  <Button
                    size="lg"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg"
                  >
                    Book a Demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                }
              />
            </div>

            {/* App Mockup */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Building2 className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                      <p className="text-gray-600 text-lg">
                        Hostel Dashboard Preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Run a Modern Hostel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for efficiency, designed for simplicity. Our platform brings
              together all essential hostel management tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Manage Rooms & Rent Easily
                </h3>
                <p className="text-gray-600">
                  Track occupancy, set rates, and manage bookings with our
                  intuitive room management system.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Onboard Tenants in Seconds
                </h3>
                <p className="text-gray-600">
                  Digital check-ins, document verification, and instant account
                  creation for seamless onboarding.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Raise & Track Complaints Fast
                </h3>
                <p className="text-gray-600">
                  Streamlined complaint management with real-time tracking and
                  automated notifications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  One Dashboard. Zero Confusion.
                </h3>
                <p className="text-gray-600">
                  Get insights at a glance with comprehensive analytics and
                  reporting tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Hostel Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed with real hostel operations in mind,
              built from extensive research with hostel owners and tenants.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  User Roles & Authentication
                </h3>
                <p className="text-gray-600 mb-6">
                  Secure role-based access for owners, staff, and tenants with
                  granular permissions and multi-factor authentication.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Admin, Staff, and Tenant roles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Secure authentication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Permission management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Room & Hostel Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete property management with floor plans, room
                  allocation, and real-time occupancy tracking.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Visual floor plans
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Occupancy tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Room type management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Tenant Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Digital onboarding, profile management, and tenant lifecycle
                  tracking from check-in to check-out.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Digital check-in/out
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Document management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Tenant profiles
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <CreditCard className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Rent & Payment Tracking
                </h3>
                <p className="text-gray-600 mb-6">
                  Automated billing, payment reminders, and comprehensive
                  financial reporting with multiple payment methods.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Automated billing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Payment tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Due date reminders
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <MessageSquare className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Complaints & Maintenance
                </h3>
                <p className="text-gray-600 mb-6">
                  Efficient complaint handling with photo attachments, priority
                  levels, and maintenance request tracking.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Photo attachments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Priority levels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Status tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <BarChart3 className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Reports & Dashboards
                </h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive analytics and customizable reports for
                  occupancy, revenue, and operational insights.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Revenue analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Occupancy reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary-600 mr-2" />
                    Custom dashboards
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-Life Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Everyone in the Hostel Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're an owner, manager, or tenant, our platform is
              designed to make your life easier.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-600 rounded-full p-3 mr-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    For Hostel Owners
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Save Time
                      </h4>
                      <p className="text-gray-600">
                        Automate routine tasks and reduce manual paperwork by up
                        to 80%.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Monitor Payments
                      </h4>
                      <p className="text-gray-600">
                        Track all payments in real-time with automated reminders
                        and reporting.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Track Occupancy
                      </h4>
                      <p className="text-gray-600">
                        Get insights into occupancy rates, revenue trends, and
                        operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-600 rounded-full p-3 mr-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    For Tenants
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Easy Check-ins
                      </h4>
                      <p className="text-gray-600">
                        Digital onboarding process that takes minutes, not
                        hours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Raise Complaints
                      </h4>
                      <p className="text-gray-600">
                        Report issues instantly with photo attachments and track
                        resolution progress.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CreditCard className="h-6 w-6 text-primary-600 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Transparent Payments
                      </h4>
                      <p className="text-gray-600">
                        View payment history, due dates, and receive automatic
                        reminders.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Hostels Across India
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers are saying about their experience with our
              platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "This app has completely transformed how we manage our hostel.
                  The automated billing alone saves us 10 hours every week."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                  <p className="text-gray-600 text-sm">
                    Owner, Green Valley Hostel
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Our tenants love how easy it is to report issues and track
                  payments. It's made communication so much better."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Priya Sharma</p>
                  <p className="text-gray-600 text-sm">
                    Manager, City Life Hostel
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The dashboard gives us insights we never had before. We can
                  now make data-driven decisions about our operations."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Amit Patel</p>
                  <p className="text-gray-600 text-sm">
                    Operations Head, Student Hub
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your hostel deserves better. Make the switch today.
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of hostels already using our platform to streamline
            operations and improve tenant satisfaction.
          </p>
          <div className="flex justify-center items-center">
            <ContactModal
              trigger={
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  Book a Demo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
          </div>
          <p className="text-primary-200 text-sm mt-6">
            Free consultation • No commitment required
          </p>
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
