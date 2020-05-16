import React from 'react';
import '../../res/bulma.css';
import './Card.css';

const Card = (props) => {
    return (
        <article class="tile is-child box">
            <p className="title is-size-5">{props.title}</p>
            <p className="subtitle is-size-7">{props.year}</p>
            {
                props.image &&
                <figure class="image is-3by2">
                    <img src={require(`../../res/${props.image}`)} alt="Gojek Upscale"/>
                </figure>
            }
            <p className="is-size-6 text-after-image">{props.description}</p>
        </article>
    )
}

export default Card;