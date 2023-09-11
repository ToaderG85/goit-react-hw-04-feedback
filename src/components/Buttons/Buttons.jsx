import React from 'react';
import style from './Buttons.module.css';
import PropTypes from 'prop-types';


export default function Buttons({feedbackOptions, onFeedback}) { 

  return (
    <div className={style.button_container}>
        <h2>Please leave feedback</h2>
        <div className={style.buttons}>
            {feedbackOptions.map(feedbackOption => (
                <button
                key={feedbackOption}
                type="button"                
                onClick={() => onFeedback(feedbackOption)}
                >
                {feedbackOption}
                </button>
            ))}
        </div>        
    </div>    
  )
}

Buttons.propTypes = {
    feedbackOptions: PropTypes.arrayOf(PropTypes.string.isRequired),
    onFeedback: PropTypes.func.isRequired,
  };