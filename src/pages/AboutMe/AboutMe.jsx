import React from 'react';
import Zoom from 'react-reveal/Zoom';

import SkillSet from '../../Containers/SkillSet/SkillSet';

class AboutMe extends React.Component {
    render() {
        return(
            <section className="hero is-fullheight has-background-white-ter">
                <div className="hero-body">
                    <div className="container up-page">
                        {/* <div className="page-title">
                            <h1 className="title has-text-black">
                                About Me
                            </h1>
                        </div> */}
                        <div className="columns is-centered">
                            <div className="column has-text-centered">
                                    <p className="title is-size-5">Professional Skills</p>
                                    <SkillSet />
                                </div>
                                <div className="column has-text-centered">
                                    <Zoom>
                                    <p className="title is-size-5">Current Interest</p>
                                    <ul>
                                        <li>Distributed System</li>
                                        <li>Golang</li>
                                    </ul>
                                    </Zoom>
                                </div>    
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;
