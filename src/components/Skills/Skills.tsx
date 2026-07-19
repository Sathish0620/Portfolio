import "./Skills.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import SkillCard from "../SkillCard/SkillCard";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../animations/variants";
import { SKILL_CATEGORIES } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills"
    >
      <div className="skills-container">

        <SectionTitle
          title="Skills"
          subtitle="Technologies I work with"
        />

        <motion.div className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <SkillCard
                title={category.title}
                skills={category.skills}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;