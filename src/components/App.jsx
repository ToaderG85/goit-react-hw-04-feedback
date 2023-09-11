import React, { useState } from "react";
import Buttons from "./Buttons/Buttons";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export const App = () => {

  const [data, setData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const feedbackOptions = Object.keys(data);

  const handleFeedback = (currentFeedback) => {
    setData((prev) => ({
      ...prev, [currentFeedback]: prev[currentFeedback] + 1, 
    }));
  };

  const totalFeedbackHitsCount = () => {
    return Object.values(data).reduce((total, element) => total + element, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = data;
    return Math.round((good / totalFeedbackHitsCount()) *100);
  };

  const totalFeedbackHits = totalFeedbackHitsCount();
  const positiveFeedback = countPositiveFeedbackPercentage();

   return (
    <div>      
      <Buttons
        feedbackOptions={feedbackOptions}
        onFeedback={handleFeedback}
      />
      {totalFeedbackHits ? (<Statistics
          good={data.good}
          neutral={data.neutral}
          bad={data.bad}
          totalFeedback={totalFeedbackHits}
          positiveFeedback={positiveFeedback}
      />) : ( <Notification message={'There is no feedback'} />)}
    </div>
  );
};
