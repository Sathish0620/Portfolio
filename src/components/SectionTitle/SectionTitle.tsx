import "./SectionTitle.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <header className="section-title">
      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}
    </header>
  );
};

export default SectionTitle;