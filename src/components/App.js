import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (event) => {
    const { name } = event.target;
    switch (name) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return Number(good) + Number(neutral) + Number(bad);
  };
  const countPositiveFeedbackPercentage = (num) => {
    return Math.round((num * 100) / countTotalFeedback());
  };
  const totalStats = countTotalFeedback();
  const positiveStats = countPositiveFeedbackPercentage(good);
  const options = Object.keys({ good, neutral, bad });

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
