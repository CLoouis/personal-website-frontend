import React from 'react';
import './res/bulma.css';

import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Home />

      <section className="hero is-fullheight has-background-white">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            Achievements
          </h1>
        </div>
      </div>
      </section>

    </div>
  );
}

export default App;
