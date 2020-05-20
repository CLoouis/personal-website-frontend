import React from 'react';
import Fade from 'react-reveal'
import Zoom from 'react-reveal/Zoom';

import './home.css';    

class Home extends React.Component {
    render() {
        return(
            <section className="hero is-fullheight has-background-white-ter is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered reverse-columns is-centered">
                            <div className="column has-text-centered">
                                <Zoom>
                                <p className="title is-size-3 is-size-4-mobile has-text-black">
                                    I am Louis Cahyadi
                                </p>
                                <p className="subtitle is-size-5 is-size-6-mobile">
                                    Computer Science Student<br></br>@ Institut Teknologi Bandung
                                </p>
                                </Zoom>
                            </div>
                            <div className="column">
                                <Fade top>
                                    <img className="my-picture center-horizontally" src={require('../../res/13517126-square.JPG')} alt="myself"/>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;