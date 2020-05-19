import React from 'react';

import '../../res/bulma.css';
import './Card.css';

const Card = (props) => {
    return (
        <div>
            <p className="title is-size-5">{props.title}</p>
            <p className="subtitle is-size-7">{props.year}</p>
            {
                props.image &&
                <figure className="image is-3by2">
                    <img src={require(`../../res/${props.image}`)} alt="Gojek Upscale" className="image-in-card"/>
                </figure>
            }
            <p className="is-size-6">{props.description}</p>
            {
                props.mediumLink && 
                <p><br></br>Check out my story on <a href={props.mediumLink} target="_blank" rel="noopener noreferrer">medium</a></p>
            }
        </div>
    )
}

export default Card;