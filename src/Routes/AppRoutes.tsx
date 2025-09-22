import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Company from "../Pages/Company";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import WebApp from "../Pages/WebApp";
import Platform from "../Pages/Platform";
import ShippingCalculator from "../Pages/ShippingCalculator";
import Pricing from "../Pages/Pricing";
import Solutions from "../Pages/Solutions";
import HowItWorks from "../Pages/HowItWorks";
import Carriers from "../Pages/Carriers";
import StoreIntegrations from "../Pages/StoreIntegrations";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";
import StartFree from "../Pages/StartFree";
import ContactUs from "../Pages/ContactUs";
import Authentification from "../Pages/Authentification";
import BecomePartner from "../Pages/BecomePartner";

export default function   AppRoutes() { 
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="web-app" element={<WebApp />} />
        <Route path="platform" element={<Platform />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="company" element={<Company />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="shipping-calculator" element={<ShippingCalculator />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="carriers" element={<Carriers />} />
        <Route path="store-integrations" element={<StoreIntegrations />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="start-free" element={<StartFree />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="authentification" element={<Authentification />} />
        <Route path="become-partner" element={<BecomePartner />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}
