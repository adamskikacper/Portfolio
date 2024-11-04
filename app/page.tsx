"use client";

import Navbar from "./components/navbar";
import Header from "./components/header";

import AboutMe from "./components/about-me";

import type { ProjectTypes } from "./types/projectTypes";
import Projects from "./components/project";

const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack online store built with React and Node.js. This project showcases a modern, responsive design with features like user authentication, product catalog, shopping cart, and secure checkout process. A full-stack online store built with React and Node.js. This project showcases a modern, responsive design with features like user authentication, product catalog, shopping cart, and secure checkout process.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "A full-stack online store built with React and Node.js. This project showcases a modern, responsive design with features like user authentication, product catalog, shopping cart, and secure checkout process. An interactive weather application that provides real-time forecasts using the OpenWeatherMap API. Users can search for locations worldwide and view detailed weather information including temperature, humidity, wind speed, and 5-day forecast.",
    technologies: ["JavaScript", "React", "OpenWeatherMap API", "Chart.js"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A full-stack online store built with React and Node.js. This project showcases a modern, responsive design with features like user authentication, product catalog, shopping cart, and secure checkout process. A Kanban-style project management tool inspired by Trello. This application allows users to create boards, lists, and cards to organize their tasks efficiently. It includes features like drag-and-drop functionality, due dates, and team collaboration.",
    technologies: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Socket.io"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    description:
      "A full-stack online store built with React and Node.js. This project showcases a modern, responsive design with features like user authentication, product catalog, shopping cart, and secure checkout process. An intelligent chatbot leveraging natural language processing to provide customer support and answer queries. This project demonstrates integration with machine learning models and real-time communication.",
    technologies: ["Python", "TensorFlow", "Flask", "WebSocket", "React"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description:
      "A full-stack online store built with React and Node.js. This project showcases a modern, responsive design with features like user authentication, product catalog, shopping cart, and secure checkout process. A secure and transparent voting system built on blockchain technology. This project explores the use of smart contracts for election integrity and includes features like voter authentication and real-time result tabulation.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    videoUrl: "/assets/videos/blockchain-fundraising.mp4",
  },
];

export default function Home() {
  return (
    <div className="bg-background-primary-light text-text-primary-light dark:bg-background-primary-dark dark:text-text-primary-dark">
      <Navbar />

      <div className="relative lg:dark:bg-background-primary-dark">
        <Header />
      </div>

      <div className="container pb-20 pt-40">
        <AboutMe />
      </div>

      <div className="container py-20">
        <h2 className="mb-5 text-4xl font-extrabold uppercase text-gray-600 sm:text-5xl md:text-5xl xl:text-8xl dark:text-gray-300">
          Projects
        </h2>
      </div>

      <div className="container py-10">
        <Projects projects={projects} />
      </div>
    </div>
  );
}
