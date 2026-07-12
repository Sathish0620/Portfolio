import "./Navbar.css";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../../data/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const SCROLL_THRESHOLD = 50;
    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > SCROLL_THRESHOLD);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

        const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};


  return (
        
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <div
            className="logo"
            onClick={() => scrollToSection("hero")}
            >
            <span className="logo-box">SK</span>
            <span className="logo-text">
                Sathish Kumar
            </span>
        </div>

        <nav className="nav-links">

          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}

        </nav>
        <div className="nav-actions">

            <a
                href="/resume.pdf"
                download
                className="resume-btn"
            >
                Download Resume
            </a>

            <button
                className="menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

        </div>

      </div>
      {isMenuOpen && (

        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>

            {NAV_ITEMS.map((item)=>(

                <button
                    key={item.id}
                    onClick={()=>{
                        scrollToSection(item.id);
                        setIsMenuOpen(false);
                    }}
                >
                    {item.label}
                </button>

            ))}
            <a href="/resume.pdf"

            download

            className="mobile-resume-btn"

            onClick={() => setIsMenuOpen(false)}

            >

            Download Resume

            </a>

        </div>

    )}
    </header>
  );
};

export default Navbar;