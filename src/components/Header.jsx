import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "academic", label: "Academic" },
    { to: "certifications", label: "Certifications" },
    { to: "projects", label: "Projects" },
    { to: "award", label: "Award" },
    { to: "contact", label: "Contact" },

  ];

  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-300 dark:border-gray-700 relative">
      {/* Left side: Title */}
      <div>
        <h1 className="text-xl font-bold">DHANA LAKSHMI SELVARAJ</h1>
        <h2 className="text-lg text-gray-600 dark:text-gray-400">
          Software Developer
        </h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray dark:text-black-300">
        {navLinks.map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer text-gray-800 hover:text-green-600 hover:shadow-green-400 hover:shadow-lg transition duration-300"
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>

      {/* Right side buttons (desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="CV/CV_FRONTEND_DEVELOPER_DHANALAKSHMISELVARAJ.pdf"
          download
          className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Download CV
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl transition duration-300 hover:scale-110"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>

        <img
          src="/assets/profile.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:hidden z-50">
          <nav className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-gray-800 dark:text-white hover:text-green-600 transition duration-300"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {link.label}
              </ScrollLink>
            ))}

            <a
              href="CV/DhanalakshmiSelvaraj_CV.pdf"
              download
              className="px-4 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>

            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setMenuOpen(false);
              }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl transition duration-300 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
