import "./Footer.css";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

import { fadeInUp } from "../../animations/variants";
import { PROFILE } from "../../constants/profile";

import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="footer-message">
          Thanks for taking the time to explore my portfolio.
          I'm always excited to connect, collaborate, and build impactful software.
        </p>

        <motion.div variants={fadeInUp}>
          <SocialLinks />
        </motion.div>

        <p className="footer-tech">
          Built with React • TypeScript • Vite
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} {PROFILE.firstName}. All rights reserved.
        </p>

        <a
          href="#home"
          className="back-to-top"
          aria-label="Back to top"
        >
          <FaArrowUp aria-hidden="true" />
          <span>Back to Top</span>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;