import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  static defaultProps = {
    state: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };
  state = this.props.state;

  onLeaveFeedback = (event) => {
    const key = event.target.name;
    this.setState((prevState) => {
      return { [key]: (prevState[key] += 1) };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, state) => acc + state, 0);
  };

  countPositiveFeedbackPercentage = (num) => {
    return Math.round((num * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, bad, neutral } = this.state;
    const options = Object.keys(this.state);
    const totalStats = this.countTotalFeedback();
    const positiveStats = this.countPositiveFeedbackPercentage(good);
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
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
  }
}
