import { Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[rgb(0,0,0)] text-white pt-10 pb-5">
        <div className="max-w-[1466px] mx-auto px-4 sm:px-6 lg:px-8 relative z-5">
      {/* Newsletter Bar */}
      <div className="bg-[#e0e3e7] py-7 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
          <p className="text-xl text-[#0c0c0c] font-medium text-center md:text-left">
            Subscribe to newsletters
          </p>
          <div className="flex w-full md:w-auto rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="px-4 py-3 text-sm w-full md:w-64 bg-[#0c0c0c] text-white outline-none"
            />
            <button className="bg-[#0235a8] px-6 py-3 text-white font-medium text-sm hover:bg-[#156ab0] transition">
              Abonnez-vous maintenant
            </button>
          </div>
        </div>
      </div>

      {/* Links & Social */}
      <div className="max-w-[1400px] mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Menu links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
          <a href="/products" className="md:text-base">Products</a>
          <a href="/company" className="md:text-base">Company</a>
          <a href="/pricing" className="md:text-base">Pricing</a>
          <a href="/partners" className="md:text-base">Partners</a>
        </div>

        {/* Social + Policies */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto justify-between">
          {/* Social Icons */}
          <div className="flex gap-4 md:gap-10">
            <a
              href="#"
              className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
            >
              <Facebook className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </a>
            <a
              href="#"
              className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
            >
              <Linkedin className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </a>
            <a
              href="#"
              className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
            >
              <Youtube className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </a>
          </div>
          
        </div>
      </div>

      {/* Bottom Line */}
       <div className="max-w-[1400px] mx-auto px-4 pt-3 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
      <div className="text-center text-sm">
        © 2025 Twocollect. All rights reserved
      </div>
      <div className="flex gap-4 text-sm md:text-base">
            <a href="/terms" className="hover:text-blue-500">
              Terms and Conditions
            </a>
            <a href="/privacy" className="hover:text-blue-500">
              Privacy Policy
            </a>
          </div>
      </div>
      </div>
    </footer>
  );
}
