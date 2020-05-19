import React from 'react';

import SkillInfo from '../../Components/SkillInfo/SkillInfo';
import '../../res/bulma.css';

class SkillSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: {
                'HTML': 0.9,
                'CSS' : 0.9,
                'JavaScript': 0.8,
                'React': 0.8,
                'Node.js': 0.8,
                'SQL': 0.9,
                'Java': 0.75,
                'Go': 0.75
            }
        }
    }

    render() {
        return(
            <div>
                {
                    Object.entries(this.state.skills).map(([skillName, skillPercentage]) => {
                        return <SkillInfo name={skillName} percentage={skillPercentage} />
                    })
                }
            </div>
        );
    }
}

export default SkillSet;
