import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Company from "../Pages/Company";
import Header from "../Components/Header";
import Footer from "../Components/footer";
import WebApp from "../Pages/WebApp";

export default function   AppRoutes() { 
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="web-app" element={<WebApp />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}
