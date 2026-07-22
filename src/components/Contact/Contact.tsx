import "./Contact.css";
import { useState } from "react";
import { sendEmail } from "../../services/emailService";
import type{
  ContactFormData,
} from "../../services/emailService";
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
  const initialFormData: ContactFormData = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
  };

  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !formData.from_name.trim() ||
      !formData.from_email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });

      return;
    }

    try {
      setIsSending(true);

      await sendEmail(formData);

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setTimeout(() => {
        setStatus({
          type: null,
          message: "",
        });
      }, 3000);

      setFormData(initialFormData);
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };
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
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <Button type="submit" disabled={isSending}> 
              {isSending ? "Sending..." : "Send Message"}
            </Button>
            {status.type && (
            <p className={`form-status ${status.type}`}>
              {status.message}
            </p>
          )}
                
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;