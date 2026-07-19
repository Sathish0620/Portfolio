import "./Projects.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";

import { PROJECTS } from "../../data/projects";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
} from "../../animations/variants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="projects-container">
        <SectionTitle
          title="Projects"
          subtitle="Some things I've built"
        />

        <motion.div
          className="projects-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;