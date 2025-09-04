import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MobileNavigationProps {
  currentPage?: string;
}

export function MobileNavigation({ currentPage }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home", current: currentPage === "home" },
    { href: "/pricing", label: "Pricing", current: currentPage === "pricing" },
    { href: "/about", label: "About", current: currentPage === "about" },
    { href: "/careers", label: "Careers", current: currentPage === "careers" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden mr-4">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            aria-label="Open navigation menu"
            className="border-0 p-2 hover:bg-gray-100 transition-colors duration-200 rounded-lg
                       h-12 w-12 sm:h-14 sm:w-14
                       flex items-center justify-center"
          >
            <Menu
              className="h-7 w-7 sm:h-8 sm:w-8"
              strokeWidth={3.5}
              style={{
                fontSize: "28px",
              }}
            />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left">
              <span className="font-bold text-xl text-primary-600">
                StaySpace
              </span>
            </SheetTitle>
            <SheetDescription className="text-left">
              Modern hostel management platform
            </SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-3 mt-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`text-xl font-semibold transition-all duration-200 py-4 px-4 rounded-lg border ${
                  item.current
                    ? "text-primary-600 bg-primary-50 border-primary-200"
                    : "text-gray-700 hover:text-primary-600 hover:bg-primary-50 border-transparent hover:border-primary-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 mt-8 pt-8 border-t">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 w-full py-4 text-lg font-semibold"
              onClick={() => {
                alert(
                  "Please contact our sales team at support@stayspace.in or +91 9443285501. We are currently not onboarding new customers directly through the app.",
                );
                setIsOpen(false);
              }}
            >
              Download App
            </Button>
            <ContactModal
              trigger={
                <Button
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 text-white w-full py-4 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Book Demo
                </Button>
              }
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
