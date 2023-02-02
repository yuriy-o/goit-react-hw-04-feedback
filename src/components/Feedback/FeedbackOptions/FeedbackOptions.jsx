import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
import { TitleCase } from '../TitleCase/TitleCase';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // const GGood = TitleCase({ good });

  return (
    <>
      {Object.keys(options).map(key => {
        return (
          <Button key={key} type="button" onClick={() => onLeaveFeedback(key)}>
            {TitleCase(key)}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
