import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactModal } from "@/components/ContactModal";
import { MobileNavigation } from "@/components/MobileNavigation";
import {
  MapPin,
  Clock,
  Users,
  Heart,
  ChevronRight,
  Briefcase,
  Code,
  Palette,
  Headphones,
  Upload,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null as File | null,
  });

  const jobOpenings = [
    {
      id: "backend-dev",
      title: "Backend Developer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-5 years",
      description:
        "Build scalable backend systems and APIs for our hostel management platform using Node.js, Python, or Java.",
      skills: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "AWS"],
      requirements: [
        "2+ years experience in backend development",
        "Strong knowledge of databases and API design",
        "Experience with cloud platforms (AWS/Azure)",
        "Understanding of microservices architecture",
      ],
    },
    {
      id: "frontend-dev",
      title: "Frontend Developer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Create beautiful and responsive user interfaces using React, TypeScript, and modern frontend technologies.",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Next.js"],
      requirements: [
        "2+ years experience with React and TypeScript",
        "Strong CSS and responsive design skills",
        "Experience with modern build tools",
        "Knowledge of performance optimization",
      ],
    },
    {
      id: "uiux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Design intuitive and beautiful user experiences for our hostel management platform.",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      requirements: [
        "1+ years experience in UI/UX design",
        "Proficiency in Figma and design tools",
        "Strong portfolio showcasing web/mobile designs",
        "Understanding of user-centered design principles",
      ],
    },
    {
      id: "app-developer",
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Develop native mobile applications for iOS and Android platforms.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      requirements: [
        "2+ years experience in mobile app development",
        "Experience with React Native or Flutter",
        "Knowledge of mobile UI/UX best practices",
        "Experience publishing apps to app stores",
      ],
    },
    {
      id: "bpo-executive",
      title: "BPO Executive",
      department: "Operations",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Handle customer support, data entry, and business process operations.",
      skills: ["Communication", "Data Entry", "Customer Service", "MS Office"],
      requirements: [
        "1+ years experience in BPO or customer service",
        "Excellent English communication skills",
        "Good typing speed and accuracy",
        "Ability to work in rotational shifts",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Drive digital marketing campaigns, SEO, social media, and content marketing.",
      skills: [
        "SEO",
        "Google Ads",
        "Social Media",
        "Content Marketing",
        "Analytics",
      ],
      requirements: [
        "2+ years experience in digital marketing",
        "Strong knowledge of SEO and SEM",
        "Experience with social media marketing",
        "Proficiency in Google Analytics and marketing tools",
      ],
    },
    {
      id: "sales-executive",
      title: "Sales Executive",
      department: "Sales",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "1-4 years",
      description:
        "Drive sales growth, manage client relationships, and expand our customer base.",
      skills: [
        "Sales",
        "CRM",
        "Lead Generation",
        "Communication",
        "Negotiation",
      ],
      requirements: [
        "1+ years experience in B2B sales",
        "Strong communication and presentation skills",
        "Experience with CRM tools",
        "Target-oriented mindset",
      ],
    },
    {
      id: "customer-support",
      title: "Customer Support Executive",
      department: "Support",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Provide excellent customer support via phone, email, and chat to our hostel clients.",
      skills: ["Customer Service", "Communication", "Problem Solving", "CRM"],
      requirements: [
        "1+ years experience in customer support",
        "Excellent verbal and written communication",
        "Problem-solving skills",
        "Patience and empathy in handling customer issues",
      ],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleApply = (jobId: string) => {
    setSelectedJob(jobId);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the application data to your backend
    console.log("Application submitted:", { selectedJob, ...applicationData });
    alert("Thank you for your application! We'll get back to you soon.");
    setSelectedJob(null);
    setApplicationData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      resume: null,
    });
  };

  if (selectedJob) {
    const job = jobOpenings.find((j) => j.id === selectedJob);
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
                  <a href="/careers" className="text-primary-600 font-medium">
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

        {/* Application Form */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button
            variant="outline"
            onClick={() => setSelectedJob(null)}
            className="mb-6"
          >
            ← Back to Jobs
          </Button>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Apply for {job?.title}
              </h1>
              <p className="text-gray-600 mb-8">{job?.description}</p>

              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={applicationData.name}
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
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 9443285501"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Experience & Skills *</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    placeholder="Tell us about your relevant experience, skills, and why you're interested in this role..."
                    rows={4}
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Upload Resume *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <Label
                      htmlFor="resume"
                      className="cursor-pointer text-primary-600 hover:text-primary-700"
                    >
                      Click to upload resume (PDF, DOC, DOCX)
                    </Label>
                    {applicationData.resume && (
                      <p className="text-sm text-gray-600 mt-2">
                        Selected: {applicationData.resume.name}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
                  className="relative text-gray-700 font-medium py-2 px-1 transition-all duration-300 ease-in-out hover:text-primary-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </a>
                <a
                  href="/careers"
                  className="relative text-primary-600 font-semibold py-2 px-1 transition-all duration-300 ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-600 after:transition-all after:duration-300"
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
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 font-semibold"
              >
                Book Demo
              </Button>
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation currentPage="careers" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Join the <span className="text-primary-600">StaySpace</span> Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Help us revolutionize the hostel industry. Build innovative
            solutions, work with cutting-edge technology, and make a real impact
            on people's lives.
          </p>
          <Badge
            variant="secondary"
            className="bg-primary-600 text-white px-4 py-2"
          >
            <MapPin className="w-4 h-4 mr-2" />
            4th Floor, GR Plaza, HSR Layout, Bangalore
          </Badge>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We're Hiring!
            </h2>
            <p className="text-xl text-gray-600">
              Find your next opportunity and help us build the future of hostel
              management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-primary-50 text-primary-700"
                    >
                      {job.department}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.experience}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Requirements:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 min-h-[48px]">
                      {job.requirements.slice(0, 2).map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6 min-h-[36px]">
                    {job.skills.slice(0, 4).map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    onClick={() => handleApply(job.id)}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white mt-auto"
                  >
                    Apply Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
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
