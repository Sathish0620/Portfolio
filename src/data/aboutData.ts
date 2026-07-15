import {
  MdWork,
  MdSchool,
  MdLocationOn,
  MdCloudDone,
} from "react-icons/md";

import { PROFILE } from "../constants/profile";

export const ABOUT_CARDS = [
  {
    title: "Experience",
    value: PROFILE.experience,
    icon: MdWork,
  },
  {
    title: "Education",
    value: PROFILE.education,
    icon: MdSchool,
  },
  {
    title: "Location",
    value: PROFILE.location,
    icon: MdLocationOn,
  },
  {
    title: "Focus",
    value: PROFILE.specialization,
    icon: MdCloudDone,
  },
];