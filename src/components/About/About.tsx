import "./About.css";

import heroImage from "../../assets/images/Photo.jpeg";
import SectionTitle from "../SectionTitle/SectionTitle";
import { PROFILE } from "../../constants/profile";
import { ABOUT_CARDS } from "../../data/aboutData";
import {fadeInUp} from "../../animations/variants";
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

          <div className="about-image">
            <img
              src={heroImage}
              alt={PROFILE.firstName}
            />

            {PROFILE.available && (
              <span className="status-badge">
                🟢 Available for Opportunities
              </span>
            )}
          </div>

          <div className="about-info">

            <h3>
              Full Stack Developer
            </h3>

            <p>
              {PROFILE.about}
            </p>

            <div className="about-highlights">
              {PROFILE.highlights.map((highlight) => (
                <span key={highlight}>
                  ✓ {highlight}
                </span>
              ))}
            </div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once:true }}
              transition={{
              duration:.5
              }}
              className="about-cards">
                {ABOUT_CARDS.map(card => {
                  const Icon = card.icon;

                    return (

                    <div className="about-card">

                      <div className="card-icon">

                        <Icon />

                      </div>

                      <h4>{card.title}</h4>

                      <p>{card.value}</p>

                    </div> 
                    )
                })}
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;