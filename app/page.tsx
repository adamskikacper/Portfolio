import Navbar from "./components/navbar";

export default function Home() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="min-h-screen bg-white text-white dark:bg-gray-900 dark:text-white">
      <Navbar />

      <div className="pt-24">
        {navItems.map((item) => (
          <div
            key={item.name}
            id={item.href.slice(1)}
            className="flex h-screen items-center justify-center text-4xl font-bold"
          >
            {item.name} Section
          </div>
        ))}
      </div>
    </div>
  );
}
