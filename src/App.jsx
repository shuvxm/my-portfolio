import React from "react";
import { ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
// import resume from '../src/assets/resume.pdf';
function App() {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col items-center">
      <header className="w-full max-w-3xl mt-8 mb-12">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">
          Shubham Sharma
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Java Developer | Full Stack dev
        </p>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/shuvxm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shubhamsharma0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.16.781-1.16 1.601v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:kumarshubham5559@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Resume
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-300 hover:text-white text-sm"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-300 hover:text-white text-sm"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-gray-300 hover:text-white text-sm"
          >
            Experience
          </button>
        </div>
      </header>

      <section id="projects" className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold mb-6 text-orange-500 flex items-center gap-2">
          <span>Projects</span>
        </h2>

        <div className="space-y-4">
          <div className="bg-slate-900 p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">
                College Directory Application (CDA)
              </h3>
              <a
                href="https://github.com/shuvxm/cda-backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink
                  size={16}
                  className="text-gray-400 hover:text-orange-500"
                />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              A comprehensive backend system for managing college-related data
              with RESTful APIs and Swagger documentation.
            </p>
            <ul className="text-sm text-gray-400 mt-2 list-disc list-inside">
              <li>Programmed the backend using Spring Boot and PostgreSQL</li>
              <li>
                Architected and integrated a RESTful API with detailed Swagger
                documentation
              </li>
              <li>
                Constructed well-structured endpoints to manage college-related
                data efficiently
              </li>
            </ul>
            <div className="mt-2 flex gap-2">
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">
                Spring Boot
              </span>
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">
                PostgreSQL
              </span>
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">
                RESTful API
              </span>
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">
                Swagger
              </span>
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">
                Detection of Exploit Websites Using ML
              </h3>
              <a
                href="https://github.com/shuvxm/Detection-of-Exploit-Website-using-Machine-Learning-and-Data-Analysis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink
                  size={16}
                  className="text-gray-400 hover:text-orange-500"
                />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              A machine learning-based platform for detecting fraudulent
              websites and improving online safety.
            </p>
            <ul className="text-sm text-gray-400 mt-2 list-disc list-inside">
              <li>
                Implemented a machine learning model to detect fraudulent
                websites, reducing false positives
              </li>
              <li>
                Established a scalable fraud detection platform with Python,
                SQL, and Flask
              </li>
              <li>Optimized detection algorithms to improve website safety</li>
            </ul>
            <div className="mt-2 flex gap-2">
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">
                Python
              </span>
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">
                Machine Learning
              </span>
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">
                Flask
              </span>
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">
                SQL
              </span>
            </div>
          </div>

          <div className="bg-slate-900 p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">CodeGenie</h3>
              <a href="" target="_blank" rel="noopener noreferrer">
                <ExternalLink
                  size={16}
                  className="text-gray-400 hover:text-orange-500"
                />
              </a>
            </div>
            <p className="text-sm text-gray-400">Working on it...</p>
            {/* <div className="mt-2 flex gap-2">
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">Spring Boot</span>
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">MySQL</span>
              <span className="text-xs bg-blue-900/40 px-2 py-1 rounded">JPA</span>
            </div> */}
          </div>
        </div>
      </section>

      <section id="skills" className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Skills</h2>

        <div className="flex flex-wrap gap-2">
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            Java
          </span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            Spring Boot
          </span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            Spring Security
          </span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            JPA/Hibernate
          </span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            RESTful APIs
          </span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            MySQL
          </span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            PostgreSQL
          </span>
          {/* <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">MongoDB</span> */}
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">Git</span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            Maven
          </span>
          {/* <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">JUnit</span> */}
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            Postman
          </span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            Html/Css/JS
          </span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            Docker
          </span>
          <span className="bg-amber-900/40 px-3 py-1 rounded text-sm">
            Microservices (exploring)
          </span>
        </div>
      </section>

      <section id="experience" className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold mb-6 text-orange-500">Experience</h2>

        <div className="space-y-4">
          <div className="bg-slate-900 p-4 rounded">
            <h3 className="text-lg font-semibold">Java Full Stack Developer</h3>
            <div className="flex items-center text-sm text-gray-400 mt-1">
              <span>JSPIDER Training Institute</span>
              <span className="mx-2">•</span>
              <span>Feb 2024 - Dec 2024</span>
            </div>
            <ul className="text-sm text-gray-400 mt-2 list-disc list-inside">
              <li>Proficient in SQL for database design and querying</li>
              <li>
                Skilled in using HTML5, CSS3, and JavaScript for web development
              </li>
              <li>
                Experienced in Java, Spring Boot, Spring MVC, Hibernate,
                Servlets and JDBC for back-end development
              </li>
            </ul>
          </div>

          <div className="bg-slate-900 p-4 rounded">
            <h3 className="text-lg font-semibold">
              Dot Net Full Stack Developer
            </h3>
            <div className="flex items-center text-sm text-gray-400 mt-1">
              <span>Karunadu Technologies Pvt. Ltd.</span>
              <span className="mx-2">•</span>
              <span>Aug 2023 - Sep 2023</span>
            </div>
            <ul className="text-sm text-gray-400 mt-2 list-disc list-inside">
              <li>
                Built a full-stack inventory app with C# and .NET using static
                data
              </li>
              <li>
                Created a responsive UI with HTML, CSS, and JavaScript for easy
                inventory management
              </li>
              <li>
                Developed the backend using C# and MySQL for CRUD operations
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="absolute top-4 right-4">
        <button className="text-white opacity-70 hover:opacity-100">
          {/* Sun/Moon icon would go here */}
        </button>
      </div>
    </div>
  );
}

export default App;
