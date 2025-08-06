import { Link as ScrollLink } from "react-scroll";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-300 dark:border-gray-700">
      {/* Left side: Title */}
      <div>
        <h1 className="text-xl font-bold">DHANA LAKSHMI SELVARAJ</h1>
        <h2 className="text-lg text-gray-600 dark:text-gray-400">Software Developer</h2>
      </div>

      {/* Middle: Navigation links */}
      <nav className="hidden md:flex space-x-6 text-gray dark:text-black-300">
        {[
          { to: "about", label: "About" },
          { to: "skills", label: "Skills" },
          { to: "experience", label: "Experience" },
          { to: "academic", label: "Academic" },
          { to: "certifications", label: "Certifications" },
          { to: "projects", label: "Projects" },
          { to: "contact", label: "Contact" },
        ].map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-70} // adjust for fixed header
            className="cursor-pointer text-gray-800 hover:text-green-600 hover:shadow-green-400 hover:shadow-lg transition duration-300"
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>

      {/* Right side: Buttons + Image */}
      <div className="flex items-center space-x-4">
        <a
          href="CV/DhanalakshmiSelvaraj_CV.pdf"
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
    </header>
  );
}
