import React from 'react';
import '../res/bulma.css';
import './home.css';

class Home extends React.Component {
    render() {
        return(
            <section className="hero is-fullheight has-background-black is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered reverse-columns is-centered">
                            <div className="column has-text-centered">
                                <h1 className="title has-text-grey-light">
                                    I am Louis Cahyadi
                                </h1>
                                <p className="subtitle">
                                    Informatics Engineering Student <br></br> @ Institut Teknologi Bandung
                                </p>
                            </div>
                            <div className="column is-flex">
                                <img className="my-picture center-horizontally" src={require('../res/13517126-square.JPG')} alt="myself"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;