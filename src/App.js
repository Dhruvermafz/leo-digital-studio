import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Preloader from "./components/Extras/Preloader";
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
import BlogA from "./pages/BlogA";
import BlogB from "./pages/BlogB";
import AdminLogin from "./admin/Auth/AdminLogin";
import AdminWrapper from "./admin/AdminWrapper";
import TeamPage from "./admin/Team/TeamPage";
import Landing from "./admin/LandingPages/Landing";
import PortfolioPage from "./admin/Portfolio/PortfolioPage";
import BlogWrapper from "./admin/Blogs/BlogWrapper";
import AddOrEdit from "./admin/Blogs/AddOrEdit";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Preloader />
      ) : (
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
          <Route path="/blog/1/" element={<BlogA />} />
          <Route path="/blog/2/" element={<BlogB />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminWrapper />} />
          <Route path="/admin/team-access" element={<TeamPage />} />
          <Route path="/admin/landing-pages" element={<Landing />} />
          <Route path="/admin/portfolio" element={<PortfolioPage />} />
          <Route path="/admin/blogs" element={<BlogWrapper />} />
          <Route path="/admin/blogs/add-or-edit" element={<AddOrEdit />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
