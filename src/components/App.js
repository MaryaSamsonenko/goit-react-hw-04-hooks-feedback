import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, bad, neutral } = state;
  const options = Object.keys(state);

  const onLeaveFeedback = (event) => {
    const key = event.target.name;
    setState((prevState) => {
      return { ...prevState, [key]: prevState[key] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = (num) => {
    return Math.round((num * 100) / countTotalFeedback());
  };
  const totalStats = countTotalFeedback();
  const positiveStats = countPositiveFeedbackPercentage(good);

  return (
    <>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={"Statistics"}>
        {totalStats === 0 ? (
          <Notification message={"There is no feedback"} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalStats}
            positivePercentage={positiveStats}
          />
        )}
      </Section>
    </>
  );
};
