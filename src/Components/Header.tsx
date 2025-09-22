import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import towcollect from "../assets/logo.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  useEffect(() => {
    if (isMobileMenuOpen || openDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen, openDropdown]);


  return (
    <header className="sticky top-0 w-full bg-[#f0f4f8] z-10">
      <nav>
        <div className="max-w-[1466px] mx-auto py-4 px-4 sm:px-6 lg:px-8 relative z-5">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center ">
              <a href="/">
                <img className="max-w-[150px]" src={towcollect} alt="Towcollect" />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center relative">
              {/* Products with submenu */}
              <div className="relative z-30">
                <button
                  onClick={() => toggleDropdown("products")}
                  className="flex items-center justify-center text-base font-medium transition-colors duration-200 py-3 px-4 rounded-full lg:min-w-[124px] hover:text-white hover:bg-bluecustom "
                >
                  Products <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {openDropdown === "products" && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg rounded-3xl py-6 w-64 z-50 text-center left-[-50%]">
                    <a
                      href="/web-app"
                      className="block px-4 py-4 text-[18px]  font-medium  hover:text-white hover:bg-bluecustom"
                    >
                      Web App
                    </a>
                    <a
                      href="/platform"
                      className="block px-4 py-4 text-[18px]  font-medium  hover:text-white hover:bg-bluecustom"
                    >
                      Platform
                    </a>
                     <a
                      href="/solutions"
                       className="block px-4 py-4 text-[18px]  font-medium  hover:text-white hover:bg-bluecustom"
                    >
                      Solutions
                    </a>
                    <a href="/company"  className="block px-4 py-4 text-[18px]  font-medium  hover:text-white hover:bg-bluecustom">
                      Company
                    </a>
                  </div>
                )}
              </div>
                 <a href="/how-it-works" className="flex items-center justify-center text-base font-medium transition-colors duration-200 py-3 px-4 rounded-full lg:min-w-[124px] hover:text-white hover:bg-bluecustom">
                How it works
              </a>
              <a href="/shipping-calculator" className="flex items-center justify-center text-base font-medium transition-colors duration-200 py-3 px-4 rounded-full lg:min-w-[124px] hover:text-white hover:bg-bluecustom">
                Shipping calculator
              </a>
              <a href="/pricing" className="flex items-center justify-center text-base font-medium transition-colors duration-200 py-3 px-4 rounded-full lg:min-w-[124px] hover:text-white hover:bg-bluecustom">
                Pricing
              </a>

              {/* Partners with submenu */}
              <div className="relative z-30">
                <button
                  onClick={() => toggleDropdown("partners")}
                  className="flex items-center justify-center text-base font-medium transition-colors duration-200 py-3 px-4 rounded-full lg:min-w-[124px] hover:text-white hover:bg-bluecustom"
                >
                  Partners <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {openDropdown === "partners" && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg rounded-3xl py-6 w-64 z-50 text-center right-[-50%]">
                    <a
                      href="carriers"
                      className="block px-4 py-4 text-[18px]  font-medium  hover:text-white hover:bg-bluecustom"
                    >
                      Carriers
                    </a>
                    <a
                      href="store-integrations"
                      className="block px-4 py-4 text-[18px]  font-medium  hover:text-white hover:bg-bluecustom"
                    >
                      Store Integrations
                    </a>
                    <a
                      href="become-partner"
                      className="block px-4 py-4 text-[18px]  font-medium  hover:text-white hover:bg-bluecustom"
                    >
                      Become a Partner
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-5 z-5">
              <a href="start-free" className="bg-bluecustom text-white px-4 py-2 rounded-full hover:bg-bluecustomhover transition-colors duration-200 font-medium">
                START FOR FREE
              </a>
              <p className="text-xs">or</p>
              <a href="authentification" className="flex items-center justify-center text-base font-medium transition-colors duration-200 py-3 px-4 rounded-full lg:min-w-[124px] text-bluecustom hover:text-white hover:bg-bluecustom">
                Login
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className=""
              >
                {isMobileMenuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 relative z-30">
            <div className="px-4 py-8 ">
              {/* Mobile Products */}
              <div>
                <button
                  onClick={() => toggleDropdown("products")}
                  className="flex w-full justify-between py-2 text-[14px]  font-medium items-center"
                >
                  Products <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === "products" && (
                  <div className="pl-2 space-y-1">
                    <a
                      href="/web-app"
                      className="block px-1 py-1 text-[14px]  font-medium "
                    >
                      Web App
                    </a>
                    <a
                      href="/platform"
                      className="block px-1 py-1 text-[14px]  font-medium "
                    >
                      Platform
                    </a>
                    <a
                      href="/solutions"
                      className="block px-1 py-1 text-[14px]  font-medium "
                    >
                      Solutions
                    </a>
                    <a href="/company" className="block px-1 py-1 text-[14px]  font-medium ">
                      Company
                    </a>
                  </div>
                )}
              </div>

                 <a href="/how-it-works" className="block py-2 text-[14px]  font-medium ">
                How it works
              </a>
              <a href="/shipping-calculator" className="block py-2 text-[14px]  font-medium ">
                Shipping calculator
              </a>
              <a href="/pricing" className="block py-2 text-[14px]  font-medium ">
                Pricing
              </a>

              {/* Mobile Partners */}
              <div>
                <button
                  onClick={() => toggleDropdown("partners")}
                  className="flex w-full justify-between py-2 text-[14px]  font-medium  items-center"
                >
                  Partners <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === "partners" && (
                  <div className="pl-2 space-y-1">
                    <a
                      href="carriers"
                      className="block px-1 py-1 text-[14px]  font-medium "
                    >
                      Carriers
                    </a>
                    <a
                      href="store-integrations"
                      className="block px-1 py-1 text-[14px]  font-medium "
                    >
                      Store Integrations
                    </a>
                    <a
                      href="become-partner"
                      className="block px-1 py-1 text-[14px]  font-medium "
                    >
                      Become a Partner
                    </a>
                  </div>
                )}
              </div>

              <hr className="mt-4 mb-6" />
              <div className="flex flex-col justify-center items-center space-y-2">
                <a href="start-free" className="bg-bluecustom  text-[14px] text-white px-4 py-3 rounded-full text-center w-full hover:bg-bluecustomhover transition-colors duration-200 font-medium">
                  START FOR FREE
                </a>
                <p className="text-xs">or</p>
                <a href="authentification" className="flex items-center justify-center text-base font-medium transition-colors duration-200 py-3 px-4 rounded-full lg:min-w-[124px] text-bluecustom">
                  Login
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Overlay */}
        {openDropdown && (
          <div
            onClick={() => setOpenDropdown(null)}
            className="hidden md:block fixed inset-0 bg-[#0c0c0c] bg-opacity-50 z-10"
          />
        )}
      </nav>
    </header>
  );
}
