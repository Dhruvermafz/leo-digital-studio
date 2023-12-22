import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./styles/app.css";
import "./styles/font-awesome.css";
import "./styles/responsive.css";
import "font-awesome/css/font-awesome.css";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Pricing from "./pages/Pricing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
