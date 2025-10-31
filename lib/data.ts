import React from "react";
import { FaReact } from "react-icons/fa";
import { SiSeat } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import { TbSquareLetterM } from "react-icons/tb";
import seatWebappImage from "@/public/seat-webapp-image.jpeg";
import exclusiverseImage from "@/public/exclusiverse-image.png";
import myPortfolioImage from "@/public/my-portfolio-image.png";
import vitaminasparaelpelotopImage from "@/public/vitaminasparaelpelotop-image.png";
import wordAnalitycsImage from "@/public/wordAnalitycsImage.png";
import trekbagImage from "@/public/trekbagImage.png";
import corpComment from "@/public/corp-comment-image.png";
import rmtdevImage from "@/public/rmtdevImage.png";
import petsoftImage from "@/public/petsoftImage.png";
import mrvoltImage from "@/public/mrvolt-image.png";

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
      "For two years, I served as a front-end developer at Eunoia Digital, where I specialized in creating and deploying interactive user interfaces and features with a tech stack comprising React, Next.js, TypeScript, Tailwind, and CSS.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Mecalux - Barcelona",
    description:
      "Currently, I hold the position of front-end developer at Mecalux. My role involves designing and implementing dynamic user interfaces and functionalities, utilizing technologies such as React, Next.js, TypeScript, Tailwind, and CSS.",
    icon: React.createElement(TbSquareLetterM),
    date: "2024 - present",
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
    title: "Mr Volt",
    description:
      "A personal project built to collect and display the most important electric car industry news in Spain, fully automated using N8N workflows.",
    tags: ["Vite", "React", "Tailwind", "N8N"],
    url: "https://mr-volt.vercel.app/",
    imageUrl: mrvoltImage,
  },
  {
    title: "Vitaminas para el pelo Top",
    description:
      "My personal SEO and WordPress practice project. A specialized Amazon affiliate website dedicated to hair care products",
    tags: ["Wordpress", "SEO", "CSS"],
    url: "https://vitaminasparaelpelotop.com",
    imageUrl: vitaminasparaelpelotopImage,
  },
  {
    title: "Petsoft",
    description:
      "A full-stack Next.js app + modern ecosystem (state-of-the-art SaaS app).",
    tags: [
      "React",
      "NextJS",
      "Tailwind",
      "API Context",
      "Zod",
      "Next Auth",
      "Stripe",
    ],
    url: "https://petsoft-omega.vercel.app/",
    imageUrl: petsoftImage,
  },
  {
    title: "RmtDEV",
    description: "A stylish job board for remote developer jobs.",
    tags: ["React", "Vite", "CSS", "API Context", "React Query"],
    url: "https://rmtdev-blond.vercel.app/",
    imageUrl: rmtdevImage,
  },
  {
    title: "Corp Comment",
    description: "A sleek public feedback tool.",
    tags: ["React", "Vite", "CSS", "Zustand"],
    url: "https://corp-comment-puce.vercel.app/",
    imageUrl: corpComment,
  },
  {
    title: "Trekbag",
    description:
      "A modern checklist app for trip-planning, with state management Zustand",
    tags: ["React", "Vite", "CSS", "Zustand"],
    url: "https://trekbag-wine.vercel.app/",
    imageUrl: trekbagImage,
  },
  {
    title: "Exclusiverse",
    description:
      "I worked as a front-end in this landing page for Exclusiverse, the first NFT Travelers Club with unique benefits.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    url: "https://exclusiverse.club",
    imageUrl: exclusiverseImage,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Vite", "CSS"],
    url: "https://word-analytics-zeta.vercel.app/",
    imageUrl: wordAnalitycsImage,
  },
  {
    title: "My portfolio",
    description: "A fresh React portfolio Website.",
    tags: [
      "React",
      "Next.js",
      "Frame Motion",
      "Tailwind",
      "Typescript CSS",
      "Email",
    ],
    imageUrl: myPortfolioImage,
  },
];

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "N8N",
  "Zod",
  "Next Auth",
  "Git",
  "SEO",
  "Node.js",
  "Framer Motion",
  "Jest",
  "React-testing-library",
  "Shopify",
  "Wordpress",
] as const;
