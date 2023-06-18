import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './css/Home.css';

const Home = () => {
  const [bio, setBio] = useState('');
  const [readme, setReadme] = useState('');

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/marfpss');
        const { bio } = response.data;
        setBio(bio);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchReadme = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/marfpss/portfolio/master/bio.md');
        setReadme(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBio();
    fetchReadme();
  }, []);

  return (
    <div className="container">
      <img src="https://avatars.githubusercontent.com/marfpss" alt="Perfil" className="profile-image" />
      <h1 className="name">Marcelo</h1>
      <p className="description">{bio}</p>
      <ReactMarkdown className="readme" children={readme} />
    </div>
  );
};

export default Home;
