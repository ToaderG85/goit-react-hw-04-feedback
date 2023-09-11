import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, totalFeedback, positiveFeedback}) {
  return (
    <div className={style.statistics_container}>
        <h2>Statistics</h2>
        <div>
            <p className={style.good}>Good: {good}</p>
            <p className={style.neutral}>Neutral: {neutral}</p>
            <p className={style.bad}>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Percentage: {positiveFeedback}%</p>
        </div>
    </div>    
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};