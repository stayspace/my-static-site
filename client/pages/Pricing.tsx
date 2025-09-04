import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactModal } from "@/components/ContactModal";
import { MobileNavigation } from "@/components/MobileNavigation";
import {
  Check,
  ChevronRight,
  Star,
  Users,
  Building2,
  Crown,
  Shield,
  Headphones,
  Zap,
  Sparkles,
  Phone,
  Mail,
} from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "1 Month",
      price: "₹299",
      period: "per month",
      description: "Perfect for trying out",
      badge: "",
      badgeColor: "",
      savings: "",
      effectiveMonthly: "₹299",
    },
    {
      name: "3 Months",
      price: "₹699",
      period: "billed quarterly",
      description: "Save ₹198 (~22%)",
      badge: "",
      badgeColor: "",
      savings: "Save ₹198 (~22%)",
      effectiveMonthly: "₹233/month",
    },
    {
      name: "6 Months",
      price: "₹1,299",
      period: "billed half-yearly",
      description: "Save ₹495 (~27%)",
      badge: "Most Popular",
      badgeColor: "bg-primary-600 text-white",
      savings: "Save ₹495 (~27%)",
      effectiveMonthly: "₹216/month",
    },
    {
      name: "1 Year",
      price: "₹2,499",
      period: "billed annually",
      description: "Save ₹1,089 (~30%)",
      badge: "Best Value",
      badgeColor: "bg-green-600 text-white",
      savings: "Save ₹1,089 (~30%)",
      effectiveMonthly: "₹208/month",
    },
  ];

  const allFeatures = [
    "Unlimited rooms and tenants",
    "Complete tenant management",
    "Automated billing & payment tracking",
    "Smart complaint system",
    "Advanced reporting & analytics",
    "Mobile app for all users",
    "Email & phone support",
    "Custom dashboard",
    "Bulk operations",
    "Data export (PDF/CSV)",
    "Real-time notifications",
    "Multi-property management",
    "Secure data backup",
    "User role management",
    "Custom workflows",
  ];

  const faqs = [
    {
      question: "What happens during the 30-day free trial?",
      answer:
        "You get full access to all features for 30 days. No credit card required to start. You can cancel anytime during the trial period.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "No hidden charges! The price you see includes GST and all features. No setup fees, no per-user charges.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes! You can change your subscription plan at any time. We'll adjust your billing accordingly.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, UPI, net banking, and bank transfers. All payments are processed securely.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 7-day money-back guarantee if you're not satisfied with our service.",
    },
  ];

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
                  className="relative text-primary-600 font-semibold py-2 px-1 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300"
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
            <MobileNavigation currentPage="pricing" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-primary-600 text-white px-4 py-2"
          >
            <Star className="w-4 h-4 mr-2" />
            30 Days Free Trial
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Simple, Affordable <span className="text-primary-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            One plan, all features included. Choose the duration that works best
            for your hostel. Start with a 30-day free trial, no credit card
            required.
          </p>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything Included in Every Plan
            </h2>
            <p className="text-lg text-gray-600">
              No feature restrictions, no hidden charges. Get full access to all
              features regardless of your plan duration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allFeatures.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-700">
                <Check className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Plan Duration
            </h2>
            <p className="text-lg text-gray-600">
              Same features, different durations. Longer plans offer better
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                  plan.badge === "Most Popular"
                    ? "ring-2 ring-primary-600 scale-105"
                    : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge
                      className={`${plan.badgeColor} px-4 py-1 text-sm font-semibold`}
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary-600">
                        {plan.price}
                      </span>
                      <br />
                      <span className="text-gray-500 text-sm">
                        {plan.period}
                      </span>
                    </div>
                    {plan.savings && (
                      <div className="mb-3">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                          {plan.savings}
                        </span>
                      </div>
                    )}
                    {plan.effectiveMonthly &&
                      plan.effectiveMonthly !== plan.price && (
                        <p className="text-gray-600 text-sm mb-4 font-medium">
                          Effective: {plan.effectiveMonthly}
                        </p>
                      )}
                    <p className="text-gray-600 text-sm mb-6">
                      {plan.description}
                    </p>
                  </div>
                  <ContactModal
                    trigger={
                      <Button
                        className={`w-full py-3 text-sm font-semibold transition-all duration-300 ${
                          plan.badge === "Most Popular"
                            ? "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl"
                            : "bg-gray-900 hover:bg-gray-800 text-white hover:shadow-lg"
                        }`}
                      >
                        Buy Now
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Coming Soon Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Future of Hostel Management
            </h2>
            <p className="text-lg text-gray-600">
              AI-powered features coming soon to revolutionize your hostel
              operations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-dashed border-purple-300 bg-white shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  AI-Powered Features
                </h3>
                <Badge className="mb-6 bg-purple-100 text-purple-700 px-4 py-2">
                  Coming Soon
                </Badge>
                <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium">
                      🤖 Predictive Analytics
                    </p>
                    <p className="text-gray-700 font-medium">
                      🎯 Automated Tenant Matching
                    </p>
                    <p className="text-gray-700 font-medium">
                      🔧 Smart Maintenance Scheduling
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium">
                      📊 Intelligent Reporting
                    </p>
                    <p className="text-gray-700 font-medium">
                      💡 AI-Powered Insights
                    </p>
                    <p className="text-gray-700 font-medium">
                      🚀 Automated Workflows
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Be the first to know when AI features launch! Get notified
                  about beta access.
                </p>
                <ContactModal
                  trigger={
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3">
                      Get Early Access
                    </Button>
                  }
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <ContactModal
              trigger={
                <Button
                  variant="outline"
                  className="border-primary-600 text-primary-600 hover:bg-primary-50"
                >
                  Contact Sales Team
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Hostel Management?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of hostels already using StaySpace. Start your 30-day
            free trial today - no credit card required.
          </p>
          <div className="flex justify-center items-center">
            <ContactModal
              trigger={
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  Start Free Trial
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
          </div>
          <p className="text-primary-200 text-sm mt-6">
            30-day free trial • No setup fees • Cancel anytime
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
