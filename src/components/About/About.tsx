import "./About.css";

import { motion } from "framer-motion";

import heroImage from "../../assets/images/Photo.jpeg";

import { PROFILE } from "../../constants/profile";
import { ABOUT_CARDS } from "../../data/aboutData";
import { fadeInUp, staggerContainer } from "../../animations/variants";

import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />

        <div className="about-content">
          <motion.div
            className="about-image"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={heroImage}
              alt={`${PROFILE.firstName} ${PROFILE.lastName} portrait`}
            />

            {PROFILE.available && (
              <span className="status-badge">
                🟢 Available for Opportunities
              </span>
            )}
          </motion.div>

          <motion.div
            className="about-info"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Full Stack Developer</h3>

            <p>{PROFILE.about}</p>

            <ul className="about-highlights">
              {PROFILE.highlights.map((highlight) => (
                <li key={highlight}>
                  ✓ {highlight}
                </li>
              ))}
            </ul>

            <motion.div
              className="about-cards"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {ABOUT_CARDS.map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    className="about-card"
                    variants={fadeInUp}
                  >
                    <div className="card-icon">
                      <Icon />
                    </div>

                    <h4>{card.title}</h4>

                    <p>{card.value}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;