import "./SocialLinks.css";
import { SOCIAL_LINKS } from "../../constants/socials";
import {motion} from "framer-motion";
const SocialLinks = () => {
  return (
    <motion.div className="social-links" 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
        delay: 0.7,
    }}>
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
    </motion.div>
  );
};

export default SocialLinks;