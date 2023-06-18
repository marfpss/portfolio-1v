import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaSun, FaMoon, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./css/Home.css";

const Home = () => {
  const [bio, setBio] = useState("");
  const [readme, setReadme] = useState("");
  const [projects, setProjects] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/marfpss"
        );
        const { bio } = response.data;
        setBio(bio);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchReadme = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/marfpss/portfolio/master/bio.md"
        );
        setReadme(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/marfpss/repos"
        );
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBio();
    fetchReadme();
    fetchProjects();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    
    <div className={`container ${darkMode ? "dark" : ""}`}>
      
      <img
        src="https://avatars.githubusercontent.com/marfpss"
        alt="Perfil"
        className="profile-image"
      />
      <h1 className="name">
        Marcelo{" "}
        
      </h1>
      {/* <p className={`description ${darkMode ? "dark" : ""}`}>{bio}</p> */}
      
      <div className={`social-icons ${darkMode ? "dark" : ""}`}>
      <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <a
          href="https://www.instagram.com/marcelokkk_019"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
        </a>
        {/* <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a> */}
      </div>
      <ReactMarkdown
        className={`readme ${darkMode ? "dark" : ""}`}
        children={readme}
      />
      <h2 className={`projects-title ${darkMode ? "dark" : ""}`}>
        Meus Projetos
      </h2>
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
