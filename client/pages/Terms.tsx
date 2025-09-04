import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Phone, Mail } from "lucide-react";

export default function Terms() {
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
            <MobileNavigation currentPage="terms" />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> December 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1. Agreement to Terms
          </h2>
          <p className="text-gray-600 mb-6">
            By accessing and using StaySpace ("Service"), you accept and agree
            to be bound by the terms and provision of this agreement. If you do
            not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. Description of Service
          </h2>
          <p className="text-gray-600 mb-6">
            StaySpace provides a hostel management platform that enables hostel
            owners, staff, and tenants to manage various aspects of hostel
            operations including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Room and tenant management</li>
            <li>Payment tracking and billing</li>
            <li>Complaint management</li>
            <li>Reporting and analytics</li>
            <li>Communication tools</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. User Accounts
          </h2>
          <p className="text-gray-600 mb-4">
            To access certain features of the Service, you must register for an
            account. You agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>
              Provide accurate, current, and complete information during
              registration
            </li>
            <li>
              Maintain and promptly update your account information to keep it
              accurate
            </li>
            <li>
              Maintain the security of your password and accept all risks of
              unauthorized access
            </li>
            <li>
              Notify us immediately if you discover any unauthorized use of your
              account
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            4. Acceptable Use
          </h2>
          <p className="text-gray-600 mb-4">
            You agree not to use the Service:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>
              For any unlawful purpose or to solicit others to perform unlawful
              acts
            </li>
            <li>
              To violate any international, federal, provincial, or state
              regulations, rules, laws, or local ordinances
            </li>
            <li>
              To infringe upon or violate our intellectual property rights or
              the intellectual property rights of others
            </li>
            <li>
              To harass, abuse, insult, harm, defame, slander, disparage,
              intimidate, or discriminate
            </li>
            <li>
              To submit false or misleading information or interfere with
              another user's use of the Service
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            5. Payment Terms
          </h2>
          <p className="text-gray-600 mb-4">
            If you choose to purchase a paid subscription:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>
              You agree to pay all fees associated with your subscription plan
            </li>
            <li>
              Subscription fees are billed in advance on a monthly or annual
              basis
            </li>
            <li>
              All payments are non-refundable except as required by law or as
              specifically provided in our refund policy
            </li>
            <li>
              We reserve the right to change our pricing with 30 days' notice
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            6. Data and Privacy
          </h2>
          <p className="text-gray-600 mb-6">
            Your privacy is important to us. Our Privacy Policy explains how we
            collect, use, and protect your information when you use our Service.
            By using our Service, you agree to the collection and use of
            information in accordance with our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            7. Intellectual Property
          </h2>
          <p className="text-gray-600 mb-6">
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of StaySpace and its
            licensors. The Service is protected by copyright, trademark, and
            other laws. Our trademarks and trade dress may not be used in
            connection with any product or service without our prior written
            consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            8. Service Availability
          </h2>
          <p className="text-gray-600 mb-6">
            We strive to maintain high service availability but cannot guarantee
            uninterrupted access. The Service may be temporarily unavailable due
            to maintenance, updates, or circumstances beyond our control. We
            reserve the right to modify or discontinue the Service at any time
            with reasonable notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            9. Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-6">
            In no event shall StaySpace, nor its directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential, or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your use of the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            10. Termination
          </h2>
          <p className="text-gray-600 mb-6">
            We may terminate or suspend your account and bar access to the
            Service immediately, without prior notice or liability, under our
            sole discretion, for any reason whatsoever and without limitation,
            including but not limited to a breach of the Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            11. Governing Law
          </h2>
          <p className="text-gray-600 mb-6">
            These Terms shall be interpreted and governed by the laws of India,
            without regard to its conflict of law provisions. Our failure to
            enforce any right or provision of these Terms will not be deemed a
            waiver of such rights.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            12. Changes to Terms
          </h2>
          <p className="text-gray-600 mb-6">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will provide
            at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            13. Contact Information
          </h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms and Conditions, please
            contact us:
          </p>
          <ul className="list-none text-gray-600 mb-8">
            <li>
              <strong>Email:</strong> support@stayspace.in
            </li>
            <li>
              <strong>Phone:</strong> +91 9443285501
            </li>
            <li>
              <strong>Address:</strong> Bangalore, Karnataka, India
            </li>
          </ul>

          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-gray-500">
              By using StaySpace, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>

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
