import React from "react";
import { FaReact } from "react-icons/fa";
import { SiSeat } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import seatWebappImage from "@/public/seat-webapp-image.jpeg";
import exclusiverseImage from "@/public/exclusiverse-image.png";
import myPortfolioImage from "@/public/my-portfolio-image.png";
import vitaminasparaelpelotopImage from "@/public/vitaminasparaelpelotop-image.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science",
    location: "FIB - UPC, Barcelona",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end webapp developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End WebApp Developer",
    location: "Movetia - Barcelona",
    description:
      "I worked as a front-end webapp developer for 1 year. During this period, I was engaged as a front-end web app developer, contributing to the development and implementation of car-based web applications using Angular for SEAT S.A.",
    icon: React.createElement(SiSeat),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Eunoia Digital - Barcelona",
    description:
      "I'm now a front-end developer currently working in Eunoia Digital, responsible for designing and implementing engaging user interfaces and functionalities using a stack that includes React, Next.js, TypeScript, Tailwind and CSS.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [

  {
    title: "SEAT Cupra WebApp",
    description:
      "I worked developing and implementing a well-known car-based Webapp. You can see and interact with it in every SEAT Cupra.",
    tags: ["Angular", "HTML", "CSS", "Typescript"],
    imageUrl: seatWebappImage,
  },
  {
    title: "My portfolio",
    description:
      "A fresh React portfolio Website.",
    tags: ["React", "Next.js", "Frame Motion", "Tailwind", "Typescript CSS", "Email"],
    imageUrl: myPortfolioImage,
  },
  {
    title: "Vitaminas para el pelo Top",
    description:
      "My personal SEO and WordPress practice project. A specialized Amazon affiliate website dedicated to hair care products",
    tags: ["Wordpress", "SEO", "CSS"],
    url: 'vitaminasparaelpelotop.com',
    imageUrl: vitaminasparaelpelotopImage,
  },
  {
    title: "Exclusiverse",
    description:
      "I worked as a front-end in this landing page for Exclusiverse, the first NFT Travelers Club with unique benefits.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    url: 'exclusiverse.club',
    imageUrl: exclusiverseImage,
  },
];

export const skillsData = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "SCSS",
  "Node.js",
  "Git",
  "Framer Motion",
  "Shopify",
  "Wordpress",
  "SEO"
] as const;