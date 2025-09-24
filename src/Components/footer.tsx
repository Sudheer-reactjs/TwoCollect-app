import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import MailChimp from "./MailChimp";
const TwitterX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    {...props}
  >
    <path
      fill="currentColor"
      d="M714.163 519.284 1160.89 0H1061.9L667.137 450.887 364.241 0H0l468.207 681.821L0 1226.37h98.988l414.93-482.605 317.88 482.605H1200L714.137 519.284h.026Zm-147.365 171.53-48.123-69.77L134.37 79.445h165.04l308.73 447.29 48.123 69.77 409.095 592.01H900.318l-333.52-497.7Z"
    />
  </svg>
);


export default function Footer() {
  return (
    <footer className="bg-[rgb(0,0,0)] text-white pt-10 pb-5">
        <div className="max-w-[1466px] mx-auto px-4 sm:px-6 lg:px-8 relative z-5">


       <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          <div className="flex flex-col gap-3 text-sm">
          <a href="/">What We Do</a>
          <a href="authentification">Connect to Domestic and International Carriers</a>
          <a href="shipping-calculator">Multi-Carrier Rate Comparison</a>
          <a href="authentification">Label Generation and Tracking </a>
          <a href="store-integrations">E-Commerce Store Integration </a>
          <a href="payment-wallet-options">Payment & Wallet Options </a>
        </div>
        <div className="flex flex-col  gap-3 text-sm">
          <a href="company">Company</a>
          <a href="/">About TwoCollect</a>
          <a href="shipping-carriers">Shipping Carriers</a>
          <a href="press-and-media">Press and Media</a> 
          <a href="terms">Terms and Conditions </a>
          <a href="privacy">Privacy Policy</a>
        </div>
        <div className="flex flex-col  gap-3 text-sm">
          <a href="become-partner">Partners</a>
          <a href="shipping-carriers">Carrier Partners</a>
          <a href="store-integrations ">Technology Partners</a>
        </div>
        <div className="flex flex-col  gap-3 text-sm ">
          <a href="contact-us">Contact Us</a>
         {/* Newsletters */}
         <div className="w-full flex flex-col gap-2 mt-2 mb-4">
          <p className="text-left"> 
            Subscribe to Newsletters
          </p>
           <MailChimp />
        </div>
        {/*  Social Media */}
<div className="flex gap-4">
  <a
    href="https://www.facebook.com/profile.php?id=61567267283120"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
  >
    <Facebook className="w-5 h-5 text-white" />
  </a>
  <a
    href="https://www.linkedin.com/company/twocollect"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
  >
    <Linkedin className="w-5 h-5 text-white" />
  </a>
  <a
    href="https://www.youtube.com/channel/UCSwW4hhV4jxxAHyJZbf9Kcg"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
  >
    <Youtube className="w-5 h-5 text-white" />
  </a>
  <a
    href="https://www.instagram.com/twocollectonly/?igsh=M2dncDk5eTIyem1x&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
  >
    <Instagram className="w-5 h-5 text-white" />
  </a>
  <a
    href="https://x.com/TwoCollect"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0235a8] p-2 rounded-lg hover:bg-[#156ab0] transition"
  >
    <TwitterX className="w-5 h-5 text-white" />
  </a>
</div>


        </div>
       </div>

      </div>
    </footer>
  );
}
