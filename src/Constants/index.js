import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  threejs,
  figma,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Threejs",
    type: "3D",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Frontend",
  },

  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const softSkills = [
  {
    name: "Teamwork",
    type: "Soft",
  },
  {
    name: "Attention to details",
    type: "Soft",
  },
  {
    name: "Creativity",
    type: "Soft",
  },
  {
    name: "Time management and task prioritization",
    type: "Soft",
  },
  {
    name: "Skills Self-learning ability",
    type: "Soft",
  },
  {
    name: "Responsible",
    type: "Soft",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/parchello",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "WebStudio",
    description: "Just simple HTML ans css",
    link: "https://parchello.github.io/WebStudio/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Simply Chocolate",
    description:
      "Team project Simply Chocolate. Adaptive design, transform effects, modal windows.",
    link: "https://sergii-drozdiuk.github.io/Simply-Chocolate/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Phone Book",
    description: "Simple app where You can save phone contacts.",
    link: "https://parchello.github.io/goit-react-hw-08-phonebook-2/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Trending movies",
    description:
      " A pet project.  Site with your favorite films. Which allows us to completely immerse ourselves in the atmosphere of our favorite movie. The site has a home page and a search page. Also, when choosing a film, you can look at the actors, comments and description.",
    link: "https://parchello.github.io/Trending-Movies/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Tasty-Treats",
    description:
      "Welcome to TastyTreats, your go-to online culinary haven! Discover a world of delicious recipes from around the globe, where you can explore, create, and connect with fellow food enthusiasts.",
    link: "https://sergii-drozdiuk.github.io/Tasty-Treats/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Portpholio island",
    description: "This app we You can fin some info about me=)",
    link: "https://parchello.github.io/Portpholio/",
  },
];
