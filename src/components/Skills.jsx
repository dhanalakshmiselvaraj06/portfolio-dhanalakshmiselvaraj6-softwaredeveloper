export default function Skills() {
  return (
    <section
      id="skills"
      className="space-y-4 py-10 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-semibold border-b-2 border-indigo-500 inline-block text-gray-800 dark:text-white">
        Skills
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Left side */}
        <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm transform transition duration-300 hover:scale-105">
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-100 space-y-1">
            <li>HTML5</li>
            <li>Bootstrap</li>
            <li>JavaScript | ES6+</li>
            <li>Angular</li>
            {/*  <li>NgRx</li> */}
            {/*  <li>React</li> */}
            <li>Node.js</li>
            <li>REST API</li>
            <li>MongoDB</li>
            <li>Linux</li>
            <li>SQL | MySQL</li>
            <li>GIT | CI/CD(Github Actions)</li>
          </ul>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm transform transition duration-300 hover:scale-105">
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-100 space-y-1">
            <li>C | C++</li>
            <li>CSS3/SASS</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>RxJS | NgRx</li>
            <li>Angular Forms and Router</li>
            <li>Angular CLI</li>
            <li>Angular Material / CDK</li>
            {/* <li>React Hooks</li> */}

            {/* <li>MySQL</li> */}

            <li>Jasmine and Karma</li>
            <li>Microsoft Azure</li>

            <li>JIRA</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
