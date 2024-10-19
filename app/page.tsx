import Navbar from "./components/navbar";

export default function Home() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="bg-background-primary-light dark:bg-background-primary-dark text-text-primary-light dark:text-text-primary-dark min-h-screen">
      <Navbar />

      <div className="pt-24">
        {navItems.map((item) => (
          <div
            key={item.name}
            id={item.href.slice(1)}
            className="text-text-primary-light dark:text-text-primary-dark flex h-screen items-center justify-center text-4xl font-bold"
          >
            {item.name} Section
          </div>
        ))}
      </div>
    </div>
  );
}
