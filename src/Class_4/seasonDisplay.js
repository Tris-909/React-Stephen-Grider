import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'HOT',
        class: 'sun'
    },
    winter: {
        text: 'COLD',
        class: 'snowflake'
    }
}

const SeasonDisplay = (props) => {

    const getSeason = (lat, month) => {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter';
        } else {
            return lat < 0 ? 'winter' : 'summer';
        }
    }

    const getClassIcon = (season) => {
        if (season === 'summer') {
            return seasonConfig.summer.class;
        } else {
            return seasonConfig.winter.class;
        }
    }

    const getText = (season) => {
        if (season === 'summer') {
            return seasonConfig.summer.text;
        } else {
            return seasonConfig.winter.text;
        }
    }

    const season =  getSeason(props.lat, new Date().getMonth());

    return(
        <div class='container'>
            <i className={getClassIcon(season) + ' icon'}></i>
            <h1>{getText(season)}</h1>
            <i id='move' className={getClassIcon(season) + ' icon'}></i>
        </div>
    );
}

export default SeasonDisplay;