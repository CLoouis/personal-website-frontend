import React from 'react';
import Fade from 'react-reveal/Fade';

import Card from './Card';

const AnimatedCard = (props) => {
    return (
        <article className="tile is-child box">
            {
                props.animation === 'left' && 
                <Fade left>
                    <Card title={props.title} 
                            year={props.year} 
                            description={props.description} 
                            image={props.image}
                            mediumLink={props.mediumLink}/>
                </Fade>
            }
            {
                props.animation === 'right' &&
                <Fade right>
                    <Card title={props.title} 
                            year={props.year} 
                            description={props.description} 
                            image={props.image}
                            mediumLink={props.mediumLink}/>
                </Fade>
            }
            {
                props.animation === 'bottom' &&
                <Fade bottom>
                    <Card title={props.title} 
                            year={props.year} 
                            description={props.description} 
                            image={props.image}
                            mediumLink={props.mediumLink}/>
                </Fade>
            }
            {
                props.animation === 'top' &&
                <Fade top>
                    <Card title={props.title} 
                            year={props.year} 
                            description={props.description} 
                            image={props.image}
                            mediumLink={props.mediumLink}/>
                </Fade>
            }
        </article>
    )
}

export default AnimatedCard;