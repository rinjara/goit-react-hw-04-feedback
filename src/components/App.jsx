import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
// import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStatsIncrement = event => {
    this.setState(prevState => {
      const value = event.currentTarget.value;
      console.log(value);
      return {};
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return (good / (good + neutral + bad)) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      handleStatsIncrement,
    } = this;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleStatsIncrement}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
