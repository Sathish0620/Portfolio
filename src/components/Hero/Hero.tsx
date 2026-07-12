import "./Hero.css";

import { PROFILE } from "../../constants/profile";
import Button from "../Button/Button";
import { scrollToSection } from "../../utils/scrollToSection";
import heroImage from "../../assets/images/Photo.jpeg";

const Hero = () => {
  return (
    <section id="hero" className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-role">
            {PROFILE.role}
          </p>

          <h1 className="hero-title">
            {PROFILE.firstName}
            <span>{PROFILE.lastName}</span>
          </h1>

          <p className="hero-description">
            {PROFILE.tagline}
          </p>

          <div className="hero-buttons">    
            <Button href={PROFILE.resume} download>
                Download Resume
            </Button> 
            <Button variant="secondary" onClick={()=>scrollToSection("Projects")}>
              View Projects
            </Button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src={heroImage}
            alt={PROFILE.firstName}
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;