import "./Footer.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/variants";
import { FaArrowUp } from "react-icons/fa";

import SocialLinks from "../SocialLinks/SocialLinks";
import { PROFILE } from "../../constants/profile";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}

      >
        <h2>Thanks for visiting!</h2>

        <p className="footer-message">
          Let's build something amazing together.
        </p>

        <SocialLinks />

        <p className="footer-tech">
          Built with React • TypeScript • Vite
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} {PROFILE.firstName}. All rights reserved.
        </p>

        <a href="#hero"
          className="back-to-top"
          aria-label="Back to top"
        >
          <FaArrowUp />
          <span>Back to Top</span>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;