import { useState } from 'react';
import PropTypes from 'prop-types';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const onLeaveFeedback = e => {
    if (e === 'good') {
      setGood(good + 1);
    }
    if (e === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (e === 'bad') {
      setBad(bad + 1);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100) || 0;
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Section>
    </>
  );
}

//   onLeaveFeedback = response => {
//     this.setState(prevState => {
//       return {
//         [response]: prevState[response] + 1,
//       };
//     });
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return Math.round((good / this.countTotalFeedback()) * 100) || 0;
//   };

//   render() {
//     // const { good, neutral, bad } = this.state;
//     const countTF = this.countTotalFeedback();
//     const countTFP = this.countPositiveFeedbackPercentage();

// return (
//   <>
//     <Section>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />
//       </Section>

//       <Section title="Statistics">
//         {countTF === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTF}
//             positivePercentage={countTFP}
//           />
//         )}
//       </Section>
//     </Section>
//   </>
// );
//   }
// }

Feedback.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
};
