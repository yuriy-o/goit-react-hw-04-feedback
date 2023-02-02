import PropTypes from 'prop-types';
import { Bad, Good, GoodSpan, Neutral, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Good>Good: {good}</Good>
      <Neutral>Neutral: {neutral}</Neutral>
      <Bad>Bad: {bad}</Bad>
      <Text>Total: {total}</Text>
      <Text>
        Positive feedback: <GoodSpan>{positivePercentage}%</GoodSpan>
      </Text>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
