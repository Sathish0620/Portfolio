import "./Hero.css";
import heroImage from "../../assets/images/Photo.jpeg";
import { motion } from "framer-motion";
import { PROFILE } from "../../constants/profile";
import { scrollToSection } from "../../utils/scrollToSection";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../Button/Button";
import {slideInLeft, scaleIn, fadeInUp} from "../../animations/variants";
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        <motion.div className="hero-content"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.8,
            }}>    

          <p className="hero-role">
            {PROFILE.role}
          </p>

          <h1 className="hero-title">
            {PROFILE.firstName} {PROFILE.lastName}
          </h1>

          <p className="hero-description">
            {PROFILE.tagline}
          </p>

          <motion.div className="hero-buttons"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{
                delay: 0.4,
                duration: 0.6,
            }}>

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

          </motion.div>
            <SocialLinks />

        </motion.div>
        
        <motion.div className="hero-image"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.9,
                delay: 0.2,
            }}>
            <div className="hero-image-glow"></div>
          <img
            src={heroImage}
            alt={PROFILE.firstName}
          />

        </motion.div>
        
      </div>
    
    </section>
  );
};

export default Hero;