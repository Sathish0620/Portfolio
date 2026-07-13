import "./Hero.css";

import heroImage from "../../assets/images/Photo.jpeg";

import { PROFILE } from "../../constants/profile";
import { scrollToSection } from "../../utils/scrollToSection";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-role">
            {PROFILE.role}
          </p>

          <h1 className="hero-title">
            {PROFILE.firstName} {PROFILE.lastName}
          </h1>

          <p className="hero-description">
            {PROFILE.tagline}
          </p>

          <div className="hero-buttons">

            <Button
              href={PROFILE.resume}
              download
            >
              Download Resume
            </Button>

            <Button
              variant="secondary"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>

          </div>
            <SocialLinks />

        </div>
        
        <div className="hero-image">
            <div className="hero-image-glow"></div>
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