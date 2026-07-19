import "./ExperienceCard.css";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  location: string;
  technologies: readonly string[];
  achievements: readonly string[];
}

const ExperienceCard = ({
  role,
  company,
  period,
  location,
  technologies,
  achievements,
}: ExperienceCardProps) => {
  return (
    <div className="experience-card">
      <span className="timeline-dot"></span>

      <div className="experience-content">
        <p className="period">{period}</p>

        <h3>{role}</h3>

        <h4>{company}</h4>

        <p className="location">{location}</p>

        <div className="technology-list">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <ul>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;