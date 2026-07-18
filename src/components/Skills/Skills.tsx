import "./Skills.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import SkillCard from "../SkillCard/SkillCard";

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

        <div className="skills-grid">

          {SKILL_CATEGORIES.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;