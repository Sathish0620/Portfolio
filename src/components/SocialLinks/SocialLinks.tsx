import "./SocialLinks.css";
import { SOCIAL_LINKS } from "../../constants/socials";

const SocialLinks = () => {
  return (
    <div className="social-links">
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;