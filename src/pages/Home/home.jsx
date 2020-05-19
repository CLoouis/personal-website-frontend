import React from 'react';
import Fade from 'react-reveal'
import Zoom from 'react-reveal/Zoom';

import '../../res/bulma.css';
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
                                <div className="columns has-text-centered is-centered is-mobile">
                                    {/* <div className="column is-narrow is-size-6 is-size-7-mobile">Achievements</div>
                                    <div className="column is-narrow is-size-6 is-size-7-mobile">Experience</div>
                                    <div className="column is-narrow is-size-6 is-size-7-mobile">Projects</div> */}
                                </div>
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