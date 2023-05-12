import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import { Container, Card } from "react-bootstrap";
import { FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <Container id="container" className="container">
      <Card
        id="card"
        className="d-flex flex-column align-items-center justify-content-center text-center"
      >
        <div className="avatar">
          {" "}
          <img
            src="https://cdn.discordapp.com/attachments/901945232529162250/1106412807609667674/6db2e35013a4252696a9bb7c7804a701.jpg"
            alt="Avatar"
          />
        </div>
        <h1 id="name">Marcelo</h1>
        <h2 id="surname">Mais conhecido como MarFpss</h2>
        <h3 id="about">Sobre mim</h3>
        <p id="description">
          👋 Olá, meu nome é Marcelo e tenho 17 anos. Sou apaixonado por
          tecnologia e atualmente estou estudando 🌐 Front-End e 💻 programação.
          Meu objetivo é me tornar um desenvolvedor 🌟 Full Stack, capaz de
          criar projetos completos e eficientes em todas as camadas do
          desenvolvimento web. Desde criança sempre tive uma grande curiosidade
          sobre como as coisas funcionam, especialmente em relação a 💻
          computadores e tecnologia. Essa paixão me levou a buscar conhecimento
          por conta própria, estudando e aprendendo sobre programação, web
          design e desenvolvimento de software. Hoje em dia, estou focado em
          aprimorar minhas habilidades em Front-End e aprender outras linguagens
          de programação para me tornar um desenvolvedor Full Stack completo. 🎯
          Estou sempre buscando novos desafios e projetos que possam me ajudar a
          crescer profissionalmente e aprimorar minhas habilidades. Se você
          estiver procurando por um desenvolvedor dedicado, comprometido e
          apaixonado por tecnologia, então eu sou a pessoa certa para você.
          Estou sempre disposto a aprender e me adaptar a novas tecnologias e
          tendências do mercado. 🚀 Vamos trabalhar juntos para criar projetos
          incríveis e fazer a diferença no mundo da tecnologia!
        </p>
        <div id="icon" className="d-flex justify-content-center">
          <a
            id="icon"
            target="_blank"
            href="https://www.instagram.com/marcelokkk_019/"
            className="icon-link"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            id="icon"
            target="_blank"
            href="https://github.com/marfpss"
            className="icon-link"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </Card>
    </Container>
  );
};

export default Home;
