import "./Contact.css";
import { PROFILE } from "../../constants/profile";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import SectionTitle from "../SectionTitle/SectionTitle";
import SocialLinks from "../SocialLinks/SocialLinks";

import { fadeInUp, staggerContainer } from "../../animations/variants";

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
              <FaEnvelope className="contact-icon" />
              <a className="contact-link" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a className="contact-link" href={`tel:${PROFILE.phone}`}>
                {PROFILE.phone}
              </a>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <a

                href={PROFILE.mapLink}

                target="_blank"

                rel="noopener noreferrer"

                className="contact-link"

              >

                {PROFILE.location}

              </a>
            </div>

            <SocialLinks />
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

            <button type="submit">
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;