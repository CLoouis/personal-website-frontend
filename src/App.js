import React from 'react';
import './res/bulma.css';
// import ReactPageScroller from 'react-page-scroller';

import Home from './pages/Home/home';
import Experience from './pages/Experience/experience';
import AboutMe from './pages/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      {/* <ReactPageScroller animationTimer={800}> */}
        <Home />
        <AboutMe />
      {/* </ReactPageScroller> */}
        <Experience />
    </div>
  );
}

export default App;
