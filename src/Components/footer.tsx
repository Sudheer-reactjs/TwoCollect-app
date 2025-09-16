import { Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[rgb(0,0,0)] text-white pt-10 pb-5">
        <div className="max-w-[1466px] mx-auto px-4 sm:px-6 lg:px-8 relative z-5">


       <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-7">
          <div className="flex flex-col gap-3 text-sm">
          <a href="#">What We Do</a>
          <a href="#">Connect to Domestic and International Carriers</a>
          <a href="#">Multi-Carrier Rate Comparison</a>
          <a href="#">Label Generation and Tracking </a>
          <a href="#">E-Commerce Store Integration </a>
          <a href="#">Return Management Solutions</a>
          <a href="#">Payment & Wallet Options </a>
        </div>
        <div className="flex flex-col  gap-3 text-sm">
          <a href="#">Company</a>
          <a href="#">About TwoCollect</a>
          <a href="#">Careers</a>
          <a href="#">Press and Media</a>
          <a href="#">Terms and Conditions </a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col  gap-3 text-sm">
          <a href="#">Partners</a>
          <a href="#">Carrier Partners</a>
          <a href="#">Technology Partners</a>
        </div>
        <div className="flex flex-col  gap-3 text-sm ">
          <a href="#">Contact Us</a>
         {/* Newsletters */}
         <div className="w-full flex flex-col gap-2 mt-2 mb-4">
          <p className="text-center md:text-left">
            Subscribe to Newsletters
          </p>
          <div className="flex flex-col w-full gap-2  ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 text-sm w-full rounded-full bg-[#f0f4f8] text-[#0c0c0c]  outline-none"
            />
            <button className="bg-[#0235a8] rounded-full px-6 py-3 text-white  text-sm hover:bg-[#156ab0] transition">
             Subscribe now
            </button>
          </div>
        </div>
        {/*  Social Media */}
       <div className="flex gap-4 ">
            <a
              href="#"
              className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
            >
              <Facebook className="w-5 h-5  text-white" />
            </a>
            <a
              href="#"
              className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
            >
              <Linkedin className="w-5 h-5  text-white" />
            </a>
            <a
              href="#"
              className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
            >
              <Youtube className="w-5 h-5  text-white" />
            </a>
          </div>

        </div>
       </div>

      </div>
    </footer>
  );
}
