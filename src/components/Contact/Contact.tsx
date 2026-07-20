import "./Contact.css";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { PROFILE } from "../../constants/profile";
import { fadeInUp, staggerContainer } from "../../animations/variants";

import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import SocialLinks from "../SocialLinks/SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <SectionTitle
          title="Contact"
          subtitle="Let's build something together"
        />

        <motion.div
          className="contact-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="contact-info"
            variants={fadeInUp}
          >
            <h3>Get In Touch</h3>

            <p>
              I'm always interested in new opportunities, collaborations,
              and challenging projects. Whether you have a question or
              just want to say hello, feel free to reach out.
            </p>

            <div className="contact-item">
              <FaEnvelope
                className="contact-icon"
                aria-hidden="true"
              />

              <a
                className="contact-link"
                href={`mailto:${PROFILE.email}`}
              >
                {PROFILE.email}
              </a>
            </div>

            <div className="contact-item">
              <FaPhoneAlt
                className="contact-icon"
                aria-hidden="true"
              />

              <a
                className="contact-link"
                href={`tel:${PROFILE.phone}`}
              >
                {PROFILE.phone}
              </a>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt
                className="contact-icon"
                aria-hidden="true"
              />

              <a
                href={PROFILE.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {PROFILE.location}
              </a>
            </div>

            <motion.div variants={fadeInUp}>
              <SocialLinks />
            </motion.div>
          </motion.div>

          <motion.form
            className="contact-form"
            variants={fadeInUp}
          >
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
            />

            <Button type="submit">
              Send Message
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;