import React from 'react';

import { Route } from 'react-router-dom';

import About from './components/About.js';
import Contact from './components/Contact.js';
import Landing from './components/Landing.js';
import Projects from './components/Projects.js';

import ArtxBLM from './components/ArtxBLM.js';
import HighQ from './components/HighQ.js';
import Wasatch from './components/Wasatch.js';
import Raheem from './components/Raheem.js';

import './App.css';

function App() {
  return (
    <div>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />

    <Route path="/projects" component={Projects} />
    <Route path="/artxblm" component={ArtxBLM} />
    <Route path="/wrdstore" component={Wasatch} />
    <Route path="/high-q" component={HighQ} />
    <Route path="/raheem" component={Raheem} />

    </div>
  );
}

export default App;
