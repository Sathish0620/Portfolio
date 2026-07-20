import "./Experience.css";
import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "../../animations/variants";
import { EXPERIENCES } from "../../data/experience";

import SectionTitle from "../SectionTitle/SectionTitle";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />

        <motion.div
          className="timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {EXPERIENCES.map((experience) => (
            <motion.div
              key={experience.company}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;