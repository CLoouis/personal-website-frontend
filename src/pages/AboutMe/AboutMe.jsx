import React from 'react';

import '../../res/bulma.css';
import SkillSet from '../../Containers/SkillSet/SkillSet';

class AboutMe extends React.Component {
    render() {
        return(
            <section className="hero is-fullheight has-background-white-ter">
                <div className="hero-body">
                    <div className="container up-page">
                        <div className="page-title">
                            <h1 className="title has-text-black">
                                About Me
                            </h1>
                        </div>
                        <div className="columns is-centered">
                            <div className="column has-text-centered">
                                    <p className="title is-size-5">Professional Skills</p>
                                    <SkillSet />
                                </div>
                                <div className="column">
                                    <p className="title is-size-5">Achievement</p>
                                    <ul>
                                        <li className="is-size-5">Gojek Upscale 3.0</li>
                                        <p className="subtitle is-size-6">2020</p>
                                        <li className="is-size-5">Silver Medalist in Asian Pacific Mathematics Olympiad</li>
                                        <p className="subtitle is-size-6">2016</p>
                                        <li className="is-size-5">Silver Medalist in Olimpiade Sains Nasional (Mathematics)</li>
                                        <p className="subtitle is-size-6">2016</p>
                                    </ul>
                                </div>    
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;
