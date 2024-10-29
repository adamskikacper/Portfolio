"use client";

import Navbar from "./components/navbar";
import Header from "./components/header";
import ProjectSection from "./components/project-section";
import { Project } from "./types/projectTypes";

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack online store built with React and Node.js. This project showcases a modern, responsive design with features like user authentication, product catalog, shopping cart, and secure checkout process.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    gifUrl: "/assets/images/blockchain-fundraising.jpg",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "An interactive weather application that provides real-time forecasts using the OpenWeatherMap API. Users can search for locations worldwide and view detailed weather information including temperature, humidity, wind speed, and 5-day forecast.",
    technologies: ["JavaScript", "React", "OpenWeatherMap API", "Chart.js"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    gifUrl: "/assets/images/blockchain-fundraising.jpg",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A Kanban-style project management tool inspired by Trello. This application allows users to create boards, lists, and cards to organize their tasks efficiently. It includes features like drag-and-drop functionality, due dates, and team collaboration.",
    technologies: ["Vue.js", "Vuex", "Node.js", "PostgreSQL", "Socket.io"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    gifUrl: "/assets/images/blockchain-fundraising.jpg",
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    description:
      "An intelligent chatbot leveraging natural language processing to provide customer support and answer queries. This project demonstrates integration with machine learning models and real-time communication.",
    technologies: ["Python", "TensorFlow", "Flask", "WebSocket", "React"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    gifUrl: "/assets/images/blockchain-fundraising.jpg",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description:
      "A secure and transparent voting system built on blockchain technology. This project explores the use of smart contracts for election integrity and includes features like voter authentication and real-time result tabulation.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    link: "#",
    imageUrl: "/assets/images/blockchain-fundraising.jpg",
    gifUrl: "/assets/images/blockchain-fundraising.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-background-primary-light text-text-primary-light dark:bg-background-primary-dark dark:text-text-primary-dark">
      <Navbar />

      <Header />

      <div className="container my-[97px] flex items-center justify-center">
        <h2 className="mb-4 inline-block bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text pb-2 text-5xl font-extrabold uppercase text-transparent dark:from-zinc-300 dark:to-zinc-500">
          Projects
        </h2>
      </div>

      {projects.map((item, index) => (
        <section key={item.id}>
          <div className="container mb-[200px]">
            <ProjectSection project={item} isReversed={index % 2 === 1} />
          </div>
        </section>
      ))}
    </div>
  );
}
