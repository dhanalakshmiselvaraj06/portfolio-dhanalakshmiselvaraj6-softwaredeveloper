import { useState } from "react";

// === DATA ===
const companyProjects = [
  {
    title: "Statuslead",
    date: "02/2021 – 06/2021",
    tools:
      "React, Redux, React Hook Form, Firebase, Jest, React Router, Context API, Git, VS Code, Azure Pipelines",
    points: [
      "Built and maintained frontend features using React with Redux and Context API.",
      "Implemented role-based authentication using Firebase Auth and React Router.",
      "Developed forms using React Hook Form for better performance.",
      "Integrated file upload/download with Firebase Storage.",
      "Created a change history tracking system for records.",
      "Automated emails and secure tasks using Firebase Admin SDK.",
      "Wrote unit tests with Jest.",
      "Maintained CI/CD pipeline with Azure Pipelines.",
    ],
  },
  {
    title: "Event Manager",
    date: "02/2021 – 06/2021",
    tools:
      "React, TypeScript, .NET (ASP.NET Core), SQL, RxJS, Git, VS Code, Visual Studio 2019, SSMS, Firebase, PayPal SDK",
    points: [
      "Built dynamic forms and data tables using React Hook Form.",
      "Implemented JWT-based authentication with ASP.NET Identity.",
      "Integrated PayPal SDK for secure payments.",
      "Deployed app via Firebase Hosting.",
      "Followed best practices in state management and responsive design.",
    ],
  },
  {
    title: "Sandhills Center Management System",
    date: "08/2021 – 04/2022",
    tools:
      "HTML5, SCSS, JavaScript, AngularJS, Angular 11+, TypeScript, Angular Material, RxJS",
    points: [
      "Assessed migration compatibility and framework evaluation.",
      "Tested migrated components for responsiveness and design.",
      "Contributed to large-scale AngularJS to Angular migration.",
      "Analyzed and refactored AngularJS codebase to component architecture.",
      "Created reusable UI components with state management.",
    ],
  },
];

const personalProjects = [
  {
    title: "Shopping Cart in React",
    date: "05/2025 – 06/2025",
    url: "https://leafy-faun-44d8a3.netlify.app/",
    tools: "React, Tailwind CSS, Framer Motion, Vite, Netlify",
    image: "/assets/react_project.jpg",
    points: [
      "Built a fully responsive personal portfolio website using React and Tailwind.",
      "Added smooth page transitions using Framer Motion.",
      "Deployed the site using Netlify with custom domain.",
      "Implemented dark/light theme toggle with persistent state.",
    ],
  },
  {
    title: "Shopping Cart in Angular",
    date: "06/2023 – 08/2023",
    url: "https://ngecommerce-app6.web.app/auth",
    tools: "React, Firebase Auth, Firestore, Chart.js, Tailwind CSS",
    image: "/assets/angular_project.jpg",
    points: [
      "Created a personal finance tracker with budget insights and dynamic charts.",
      "Used Firebase Auth for secure login and Firestore for data storage.",
      "Added real-time budget updates and pie chart visualizations.",
    ],
  },
];

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (section, index) => {
    const id = `${section}-${index}`;
    setFlippedIndex(flippedIndex === id ? null : id);
  };

  const openProjectUrl = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const renderProjectCards = (data, sectionKey) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data.map((project, index) => {
        const id = `${sectionKey}-${index}`;
        return (
          <div
            key={id}
            className="perspective cursor-pointer"
            onClick={() => toggleFlip(sectionKey, index)}
          >
            <div
              className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                flippedIndex === id ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div
                className="absolute w-full h-full rounded-xl shadow-lg backface-hidden overflow-hidden"
                // Only for personal projects, front is clickable to open URL
                onClick={(e) => {
                  if (sectionKey === "personal") {
                    e.stopPropagation();
                    openProjectUrl(project.url);
                  }
                }}
                role={sectionKey === "personal" ? "button" : undefined}
                tabIndex={sectionKey === "personal" ? 0 : undefined}
                onKeyDown={(e) => {
                  if (
                    sectionKey === "personal" &&
                    (e.key === "Enter" || e.key === " ")
                  ) {
                    e.preventDefault();
                    openProjectUrl(project.url);
                  }
                }}
              >
                {sectionKey === "personal" && project.image ? (
                  <div className="w-full h-full relative rounded-xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.date}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-indigo-600 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.date}</p>
                    <p className="mt-4 text-sm text-white opacity-70">Click to flip</p>
                  </div>
                )}
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-gray-800 rounded-xl shadow-lg p-4 text-sm text-white transform rotate-y-180 backface-hidden overflow-y-auto">
                <p className="mb-2">
                  <strong>Tools & Technologies:</strong> {project.tools}
                </p>
                <ul className="list-disc list-inside space-y-1">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gray-900 text-white transition-colors duration-300 relative z-10"
    >
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block mb-10">
        Projects
      </h2>

      {/* Company Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-indigo-400 mb-6">
          Company Projects
        </h3>
        {renderProjectCards(companyProjects, "company")}
      </div>

      {/* Personal Projects */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-400 mb-6">
          Personal Projects
        </h3>
        {renderProjectCards(personalProjects, "personal")}
      </div>
    </section>
  );
}
