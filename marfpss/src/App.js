import React from 'react';
import './App.css';
import Home from './components/Home';
import MyProjectsGithubRepository from './components/MyProjectsGithubRepository';

function App() {
  return (
    <>
      <Home />
      <MyProjectsGithubRepository username="marfpss" />
    </>
  );
}

export default App;
