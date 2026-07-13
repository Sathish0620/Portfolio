import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Sathish0620",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sathish-m-8638503a9",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:sathishkumarm7719@gmail.com",
    icon: FaEnvelope,
  },
] as const;