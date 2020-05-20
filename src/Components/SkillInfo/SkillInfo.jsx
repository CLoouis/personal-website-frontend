import React, { useRef, useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring';

import './SkillInfo.css';

const SkillInfo = (props) => {
    const parentRef = useRef(null);
    const [parentWidth, setParentWidth] = useState(0);
    
    useEffect ( () => {
        if(parentRef.current){
            setParentWidth(parentRef.current.offsetWidth);
        }
    }, [parentRef]);
    
    const width = `${props.percentage}` * parentWidth;
    const bar = useSpring({
        backgroundColor: '#808080',
        height: "1.5em",
        padding: 0,
        paddingRight: '0.5em',
        from: {width: 0},
        width
    });

    const convertToPercentage = (value) => {
        return value * 100 + '%';
    }

    return (
        <div className="is-flex skill-info" >
            <div className="skill-name">
                <p>{props.name}</p>
            </div>
            <div className="skill-bar" ref={parentRef}>
                <animated.div className="skills" style={bar}>{convertToPercentage(props.percentage)}</animated.div>
            </div>
        </div>
    )
}

export default SkillInfo;