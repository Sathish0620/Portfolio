import "./SkillCard.css";

interface SkillCardProps {
  title: string;
  skills: readonly string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      <div className="skill-badges">
        {skills.map((skill) => (
          <span
            key={skill}
            className="skill-badge"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;