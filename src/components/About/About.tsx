import "./About.css";

import heroImage from "../../assets/images/Photo.jpeg";
import SectionTitle from "../SectionTitle/SectionTitle";
import { PROFILE } from "../../constants/profile";
import { ABOUT_CARDS } from "../../data/aboutData";
import { fadeInUp, staggerContainer } from "../../animations/variants";
import { motion } from "framer-motion";

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
              alt={PROFILE.firstName}
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

            <div className="about-highlights">
              {PROFILE.highlights.map((highlight) => (
                <span key={highlight}>
                  ✓ {highlight}
                </span>
              ))}
            </div>

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