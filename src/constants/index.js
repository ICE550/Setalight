import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  youtube,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  yourlogo,
  erdokertes,
  chipcad,
  bpg_logo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "#About-us",
  },
  {
    id: "1",
    title: "Gallery",
    url: "#Gallery",
  },
  {
    id: "2",
    title: "Feature",
    url: "#Feature",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [bpg_logo, erdokertes, chipcad, yourlogo, yourlogo];

export const brainwaveServices = [
  "High-Resolution Camera",
  "Modular Design",
  "Seamless Transmission",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Preliminary Design Review - PDR",
    text: "The PDR phase is complete. During this stage, we finalized our mission objectives, initial design, and system requirements. This provided a strong foundation for the next steps and set us on the path towards the Critical Design Review (CDR).",
    date: "Nov 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Critical Design Review - CDR",
    text: "We are currently in the CDR phase, where we are refining our design and finalizing the technical details. This crucial phase ensures that our systems meet all mission requirements before we move on to extensive testing and the pre-launch phase.",
    date: "Feb 2025",
    status: "done",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Pre-Launch Report - PLR",
    text: "Before the launch, we will prepare the Pre-Launch Report (PLR). This document will detail our final preparations, mission goals, and testing results. It ensures that all systems are ready and that we are fully prepared for the launch phase.",
    date: "Mar 2025",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "The Hungarian national final",
    text: "Once the CDR is approved, we will be eligible to participate in the Hungarian National Final of the CanSat competition. This is a major milestone, where we will present our fully developed CanSat and showcase our work. We are eager to compete and represent our team at the national level.",
    date: "Apr 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "High-Resolution Camera",
    description: "Capture stunning visuals with superior clarity.",
    features: [
      "Built-in camera for detailed images.",
      "Reliable performance in varying altitudes.",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Durable and Modular Design",
    description: "Built for flexibility and resilience.",
    features: [
      "Easy disassembly for quick component access.",
      "Strong materials to withstand tough conditions.",
      "Customizable components for future upgrades.",
    ],
  },
  {
    id: "2",
    title: "Advanced Signal Antenna",
    description: "Reliable communication for mission success.",
    price: null,
    features: [
      "High-performance antenna for seamless signals.",
      "Consistent communication at high distances.",
      "Minimal interference in remote areas.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title:
      "Olivér \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b  Team Mentor",
    text: "Nagy Olivér brings experience and wisdom to guide the team. With his expertise, he helps us navigate challenges and ensure that our mission stays on track.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title:
      "Kristóf \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b\u200b \u200b \u200b \u200b System Designer",
    text: "Designs and develops the hardware system along with the software, holds together/manages the team, keeps contact with the school, companies, and more.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title:
      "Áron \u200b \u200b \u200b \u200b \u200b \u200b\u200b \u200b \u200b\u200b \u200b \u200b\u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b  \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b Team Commander",
    text: "Leads the team, overseeing strategy and programming the website and the cansat camera. ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title:
      "Bence \u200b \u200b \u200b \u200b \u200b \u200b\u200b \u200b \u200b\u200b \u200b \u200b\u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b Ground Station Specialist",
    text: "Builds and maintains the ground station, including the Yagi antenna and communication systems, ensuring seamless data transmission.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title:
      "Dávid \u200b \u200b \u200b \u200b \u200b \u200b\u200b \u200b \u200b\u200b \u200b \u200b\u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b Build Strategist",
    text: "Ensures the CanSat's structure is strong and all systems operate reliably.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title:
      "Beni \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b \u200b Design Virtuoso",
    text: "Creates the visuals for the CanSat and team, making sure both are functional and visually appealing.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Youtube",
    iconUrl: youtube,
    url: "https://www.youtube.com/channel/UCWDxUzRQhHcQwMf0KQNhxCg",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/setalight_can_program/",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/+kzxHFv7cOH8yNjhk",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=61572961392669",
  },
];
