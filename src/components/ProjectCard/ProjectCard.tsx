import "./ProjectCard.css";
import type { Project } from "../../data/projects.ts";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  highlights,
  github,
  live,
  featured,
}: Project) => {
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={image}
          alt={`${title} project screenshot`}
          loading="lazy"
        />

        {featured && (
          <span className="featured-badge">
            ⭐ Featured
          </span>
        )}
      </div>

      <div className="project-content">
        <h3>{title}</h3>

        <p className="project-description">
          {description}
        </p>

        <ul className="project-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="technology-list">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="technology-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
          >
            <FaGithub />
            GitHub
          </a>

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;