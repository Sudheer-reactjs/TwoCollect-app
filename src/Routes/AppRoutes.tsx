import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Company from "../Pages/Company";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import WebApp from "../Pages/WebApp";
import Platform from "../Pages/Platform";
import ShippingCalculator from "../Pages/ShippingCalculator";

export default function   AppRoutes() { 
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="web-app" element={<WebApp />} />
        <Route path="platform" element={<Platform />} />
        <Route path="company" element={<Company />} />
        <Route path="shipping-calculator" element={<ShippingCalculator />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}
