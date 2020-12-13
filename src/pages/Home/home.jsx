import React from 'react';

import './home.css';

class Home extends React.Component {
    render() {
        return(
            <div className="container center">
                <div className="columns is-flex is-centered">
                    <figure className="image is-text-centered">
                        <img className="my-picture is-inline-block" src={require('../../res/louis-250.jpg')} alt="myself"/>
                    </figure>
                </div>
                <div className="column has-text-centered">
                    <p className="has-text-black name roboto-mono-light">
                        Louis Cahyadi
                    </p>
                    <p className="subtitle title roboto-mono-light italic typewriter">
                        Software Engineer
                    </p>
                </div>
                <div className="columns social-media is-flex is-centered">
                    <figure className="image is-32x32 is-text-centered my-icon">
                        <a href="http://github.com/CLoouis" target="_blank" rel="noopener noreferrer">
                            <img className="is-inline-block" src={require('../../res/github-icon.png')} alt="github"/>
                        </a>
                    </figure>
                    <figure className="image is-32x32 is-text-centered my-icon">
                        <a href="http://www.linkedin.com/in/louis-cahyadi" target="_blank" rel="noopener noreferrer">
                            <img className="is-inline-block" src={require('../../res/linkedin-icon.png')} alt="linkedin"/>
                        </a>
                    </figure>
                    <figure className="image is-32x32 is-text-centered my-icon">
                        <a href="http://medium.com/@louiscahyadi23" target="_blank" rel="noopener noreferrer">
                            <img className="is-inline-block" src={require('../../res/medium-icon.png')} alt="medium"/>
                        </a>
                    </figure>
                </div>
            </div>
        );
    }
}

export default Home;