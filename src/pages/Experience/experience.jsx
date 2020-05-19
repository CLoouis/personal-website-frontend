import React from 'react';

import '../../res/bulma.css';
import './experience.css'

import AnimatedCard from '../../Components/Card/AnimatedCard';

class Experience extends React.Component {
    render() {
        return(
            <section className="hero is-fullheight has-background-white-ter">
                {/* <div className="hero-head has-text-centered">
                    <h1 className="title has-text-black">
                        Experience
                    </h1>
                </div> */}
                <div className="hero-body">
                    <div className="container up-page">
                        <div className="page-title">
                            <h1 className="title has-text-black">
                                Experience
                            </h1>
                        </div>
                        <div className="columns is-centered">
                            <div className="tile is-ancestor is-9">
                                <div className="tile is-vertical is-8">
                                    <div className="tile">
                                        <div className="tile is-parent is-vertical">
                                            <AnimatedCard title="Content Writter" 
                                                    year="2017 - 2018"
                                                    description="Write course material on Geometry and Combinatorics for KTOM Books"
                                                    animation="left"
                                                    />
                                            <AnimatedCard title="Chairman of Invasion Camp" 
                                                    year="2018"
                                                    description="Invasion Camp is Christian spiritual camp held by Sion Ministry."
                                                    animation="left"
                                                    />
                                        </div>
                                    <div className="tile is-parent is-half">
                                        <AnimatedCard title="Software Developer Intern at GDP Labs" 
                                                year="2020"
                                                description="Soon"
                                                animation="top"
                                                />
                                        
                                    </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <AnimatedCard title="Computational Science and Engineering Laboratory Assistant" 
                                                year="2019 - Now"
                                                description="Teaching assistant in Geomertry & Linear Algebra and Algorithm Strategies courses"
                                                animation="bottom"
                                                />
                                    </div>
                                </div>
                                <div className="tile is-parent is-5">
                                    <AnimatedCard title="Gojek UpScale 3.0" 
                                            year="2020"
                                            description="One of 20 selected undergraduate students to
                                            participate in exclusive 2-days hands-on experience
                                            with Gojek Software Development Team"
                                            image="upscale.jpg"
                                            animation="right"
                                            mediumLink="https://medium.com/@louiscahyadi23/gojek-upscale-3-0-38d660b5509a"
                                            />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;
