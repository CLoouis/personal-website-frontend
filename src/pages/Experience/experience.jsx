import React from 'react';
import '../../res/bulma.css';
import './experience.css'
import Card from '../../Components/Card/Card';

class Experience extends React.Component {
    render() {
        return(
            <section className="hero is-fullheight has-background-white-ter">
                <div className="hero-head has-text-centered">
                    <h1 className="title has-text-black">
                        Experience
                    </h1>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div class="tile is-ancestor is-9">
                                <div class="tile is-vertical is-8">
                                    <div class="tile">
                                        <div class="tile is-parent is-vertical">
                                            <Card title="Content Writter" 
                                                    year="2017 - 2018"
                                                    description="Write course material on Geometry and Combinatorics for KTOM Books"
                                                    />
                                            <Card title="Chairman of Invasion Camp" 
                                                    year="2018"
                                                    description="Invasion Camp is Christian spiritual camp held by Sion Ministry."
                                                    />
                                        </div>
                                    <div class="tile is-parent is-half">
                                        <Card title="Software Developer Intern @ GDP Labs" 
                                                year="2020"
                                                description=""
                                                />
                                        
                                    </div>
                                    </div>
                                    <div class="tile is-parent">
                                        <Card title="Computational Science and Engineering Laboratory Assistant" 
                                                year="2019 - Now"
                                                description="Being assistant in Geomertry & Linear Algebra and Algorithm Strategies courses"
                                                />
                                    </div>
                                </div>
                                <div class="tile is-parent is-5">
                                    <Card title="Gojek UpScale 3.0" 
                                            year="2020"
                                            description="One of 20 selected undergraduate students to
                                            participate in exclusive 2-days hands-on experience
                                            with Gojek Software Development Team"
                                            image="upscale.jpg"
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
