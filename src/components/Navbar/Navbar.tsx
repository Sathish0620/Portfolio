import "./Navbar.css";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { NAV_ITEMS } from "../../data/navigation";
import { scrollToSection } from "../../utils/scrollToSection";

const SCROLL_THRESHOLD = 50;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
    const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
    };
    
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div
          className="logo"
          onClick={() => 
            handleNavigation("home")
        }
        >
          <span className="logo-box">SK</span>
          <span className="logo-text">Sathish Kumar</span>
        </div>

        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="/Sathish_Kumar_Resume.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>

          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className="mobile-nav-link"
            onClick={() =>handleNavigation(item.id)
            }
          >
            {item.label}
          </button>
        ))}

        <a
          href="/Sathish_Kumar_Resume.pdf"
          download
          className="mobile-resume-btn"
          onClick={() => setIsMenuOpen(false)}
        >
          Download Resume
        </a>
      </div>
      </div>

      
    </header>
  );
};

export default Navbar;