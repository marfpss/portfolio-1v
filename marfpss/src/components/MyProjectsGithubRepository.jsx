import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/MyProjectsGithubRepository.css";
import { Container, Card } from "react-bootstrap";

const MyProjectsGithubRepository = ({ username }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      setProjects(response.data);
    };

    fetchProjects();
  }, [username]);

  return (
    <Container id="container" className="container">
      <h1>Meus Projetos</h1>
      <Card id="card" className="d-flex flex-column align-items-center justify-content-center text-center">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-name">{project.name}</div>
            <div className="project-description">{project.description}</div>
            <a className="project-link" href={project.html_url} target="_blank" rel="noopener noreferrer">Link para o repositório do projeto</a>
          </div>
        ))}
      </Card>
    </Container>
  );
};

export default MyProjectsGithubRepository;
