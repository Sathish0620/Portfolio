import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { PROFILE } from "./profile";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: PROFILE.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: PROFILE.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: `mailto:${PROFILE.email}`,
    icon: FaEnvelope,
  },
] as const;