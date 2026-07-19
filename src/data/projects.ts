export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

import heartSenseImage from "../assets/images/projects/heartSenseImage.png";

export const PROJECTS: Project[] = [
  {
    title: "HeartSense AI",

    description:
      "An AI-powered full-stack web application that predicts the likelihood of heart disease using a Support Vector Machine (SVM) model. Built with React and FastAPI, it provides real-time predictions, confidence scores, and personalized health recommendations.",

    image: heartSenseImage,

    technologies: [
      "React",
      "Python",
      "FastAPI",
      "Tailwind CSS",
      "Scikit-learn",
      "Vercel",
      "Render",
    ],

    highlights: [
      "Support Vector Machine (SVM)",
      "FastAPI REST API",
      "Confidence Score",
      "Cloud Deployment",
    ],

    github: "https://github.com/Sathish0620/HeartSense-AI",

    live: "https://heartsenseai.vercel.app",

    featured: true,
  },
];