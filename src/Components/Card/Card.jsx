import React from 'react';
import Fade from 'react-reveal/Fade';


import '../../res/bulma.css';
import './Card.css';

const Card = (props) => {
    return (
        <article class="tile is-child box">
            <Fade left>
                <div>
            <p className="title is-size-5">{props.title}</p>
            <p className="subtitle is-size-7">{props.year}</p>
            {
                props.image &&
                <figure class="image is-3by2">
                    <img src={require(`../../res/${props.image}`)} alt="Gojek Upscale" className="image-in-card"/>
                </figure>
            }
            <p className="is-size-6">{props.description}</p>
                </div>
            </Fade>
        </article>
    )
}

export default Card;