import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Phone, Mail } from "lucide-react";

export default function Privacy() {
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
            <MobileNavigation currentPage="privacy" />
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> December 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-600 mb-6">
            StaySpace ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our hostel management
            platform and related services (the "Service").
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. Information We Collect
          </h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            2.1 Personal Information
          </h3>
          <p className="text-gray-600 mb-4">
            We may collect personal information that you provide directly to us,
            including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Name, email address, and phone number</li>
            <li>Hostel information and business details</li>
            <li>
              Payment information (processed securely through third parties)
            </li>
            <li>Profile information and preferences</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            2.2 Usage Data
          </h3>
          <p className="text-gray-600 mb-4">
            We automatically collect information about how you use our Service:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>
              Device information (IP address, browser type, operating system)
            </li>
            <li>Usage patterns and feature interactions</li>
            <li>Performance and error logs</li>
            <li>Session duration and frequency</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. How We Handle Cookies
          </h2>
          <p className="text-gray-600 mb-4">
            StaySpace uses cookies and similar tracking technologies to enhance
            your experience with our Service. Here's how we handle cookies:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            3.1 Types of Cookies We Use
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              Essential Cookies
            </h4>
            <p className="text-gray-600 mb-4">
              These cookies are necessary for the Service to function properly.
              They enable core functionality such as security, authentication,
              and basic features. These cookies cannot be disabled.
            </p>

            <h4 className="font-semibold text-gray-900 mb-3">
              Performance Cookies
            </h4>
            <p className="text-gray-600 mb-4">
              We use these cookies to collect information about how you use our
              Service, helping us improve performance and user experience. This
              includes tracking page load times, error rates, and feature usage.
            </p>

            <h4 className="font-semibold text-gray-900 mb-3">
              Functional Cookies
            </h4>
            <p className="text-gray-600 mb-4">
              These cookies remember your preferences and settings to provide a
              more personalized experience, such as language preferences,
              dashboard layouts, and notification settings.
            </p>

            <h4 className="font-semibold text-gray-900 mb-3">
              Analytics Cookies
            </h4>
            <p className="text-gray-600">
              We use analytics cookies to understand how users interact with our
              Service, which features are most popular, and how we can improve
              the user experience. This data is anonymized and aggregated.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            3.2 Cookie Management
          </h3>
          <p className="text-gray-600 mb-4">
            You have control over how cookies are used:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>
              <strong>Browser Settings:</strong> You can configure your browser
              to refuse all cookies or alert you when cookies are being sent
            </li>
            <li>
              <strong>Cookie Preferences:</strong> You can manage your cookie
              preferences in your account settings
            </li>
            <li>
              <strong>Opt-out:</strong> You can opt out of analytics cookies
              while still using essential cookies for core functionality
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
            3.3 Third-Party Cookies
          </h3>
          <p className="text-gray-600 mb-6">
            We may use third-party services that set their own cookies, such as
            analytics providers and payment processors. These services have
            their own privacy policies governing their use of cookies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            4. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Provide, maintain, and improve our Service</li>
            <li>Process transactions and send transaction notifications</li>
            <li>Send technical notices, updates, and support messages</li>
            <li>
              Respond to your comments, questions, and customer service requests
            </li>
            <li>
              Monitor and analyze usage patterns to improve user experience
            </li>
            <li>
              Detect, investigate, and prevent fraudulent or illegal activities
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            5. Information Sharing
          </h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or rent your personal information. We may
            share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>
              <strong>Service Providers:</strong> With trusted third-party
              vendors who assist in operating our Service
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights and safety
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets
            </li>
            <li>
              <strong>Consent:</strong> With your explicit consent for specific
              purposes
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            6. Data Security
          </h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational security
            measures to protect your personal information against unauthorized
            access, alteration, disclosure, or destruction. This includes
            encryption of data in transit and at rest, regular security
            assessments, and access controls.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            7. Data Retention
          </h2>
          <p className="text-gray-600 mb-6">
            We retain your personal information only for as long as necessary to
            fulfill the purposes for which it was collected, comply with legal
            obligations, resolve disputes, and enforce our agreements. When we
            no longer need your information, we securely delete or anonymize it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            8. Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate or incomplete information</li>
            <li>Deletion of your personal information</li>
            <li>Portability of your data</li>
            <li>Restriction of processing</li>
            <li>Objection to processing based on legitimate interests</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            9. International Data Transfers
          </h2>
          <p className="text-gray-600 mb-6">
            Your information may be transferred to and processed in countries
            other than your own. We ensure that such transfers comply with
            applicable data protection laws and implement appropriate safeguards
            to protect your information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            10. Children's Privacy
          </h2>
          <p className="text-gray-600 mb-6">
            Our Service is not intended for use by children under the age of 18.
            We do not knowingly collect personal information from children under
            18. If we become aware that we have collected such information, we
            will take steps to delete it promptly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            11. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new Privacy Policy on
            this page and updating the "Last updated" date. We encourage you to
            review this Privacy Policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            12. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy or our handling
            of your information, please contact us:
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
              By using StaySpace, you acknowledge that you have read and
              understood this Privacy Policy and agree to our collection, use,
              and disclosure of your information as described herein.
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
