import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaSun, FaMoon, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./css/Home.css";

const Home = () => {
  const [readme, setReadme] = useState("");
  const [projects, setProjects] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [readmeResponse, projectsResponse] = await Promise.all([
          axios.get(
            "https://raw.githubusercontent.com/marfpss/portfolio/master/bio.md"
          ),
          axios.get("https://api.github.com/users/marfpss/repos")
        ]);

        setReadme(readmeResponse.data);
        setProjects(projectsResponse.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <img
        src="https://avatars.githubusercontent.com/marfpss"
        alt="Perfil"
        className="profile-image"
      />
      <h1 className="name">Marcelo</h1>
      <div className={`social-icons ${darkMode ? "dark" : ""}`}>
        <button
          className={`toggle-button ${darkMode ? "dark" : ""}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun color="white" /> : <FaMoon color="black" />}
        </button>
        <a
          href="https://www.instagram.com/marcelokkk_019"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className={`social-icon ${darkMode ? "dark" : ""}`}
            color={darkMode ? "white" : "black"}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/marcelo-marfpss-181b80256/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className={`social-icon ${darkMode ? "dark" : ""}`}
            color={darkMode ? "white" : "black"}
          />
        </a>
      </div>
      <ReactMarkdown className={`readme ${darkMode ? "dark" : ""}`} children={readme} />
      <h2 className={`projects-title ${darkMode ? "dark" : ""}`}>Meus Projetos</h2>
      <div className="projects">
        {projects.map((project) => (
          <button
            key={project.id}
            className={`project-button ${darkMode ? "dark" : ""}`}
            onClick={() => window.open(project.html_url, "_blank")}
          >
            {project.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
