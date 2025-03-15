"use client";

import Navbar from "./components/navbar";
import Header from "./components/header";

import AboutMe from "./components/about-me";
import ExperienceContainer from "./components/experience-container";
import ContactForm from "./components/contact-form";

import type { ProjectTypes } from "./types/projectTypes";
import Projects from "./components/project";
import { motion } from "framer-motion";
import Image from "next/image";
const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["JavaScript", "React", "OpenWeatherMap API", "Chart.js"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Socket.io"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["Python", "TensorFlow", "Flask", "WebSocket", "React"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
];

export default function Home() {
  return (
    <div className="relativeoverflow-hidden bg-background-primary-light text-text-primary-light sm:overflow-visible dark:bg-background-primary-dark dark:text-text-primary-dark">
      <Navbar />

      <div id="home" className="relative lg:dark:bg-background-primary-dark">
        <Header />
      </div>

      <div id="about" className="container pb-10 pt-20 lg:pb-20 lg:pt-40">
        <AboutMe />
      </div>

      <div id="experience" className="container py-10 lg:py-20">
        <ExperienceContainer />
      </div>

      <div className="container relative py-10">
        <Projects projects={projects} />
      </div>

      <div id="contact" className="container relative">
        <ContactForm />
      </div>
    </div>
  );
}
