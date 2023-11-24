import React from "react";
import { FaReact } from "react-icons/fa";
import { SiSeat } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Elecsum",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "SEAT Cupra",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

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