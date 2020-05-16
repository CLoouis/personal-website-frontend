import React from 'react';
import './res/bulma.css';

import Home from './pages/Home/home';
import Experience from './pages/Experience/experience';
import Achievement from './pages/Achievement/achievement';
import Project from './pages/Project/project';

function App() {
  return (
    <div className="App">
      <Home />
      <Experience />
      <Achievement />
      <Project />
    </div>
  );
}

export default App;
