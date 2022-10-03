import { Accent, StatList, Stats } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList>
      <Stats>
        <Accent>Good:</Accent> {good}
      </Stats>
      <Stats>
        <Accent>Neutral:</Accent> {neutral}
      </Stats>
      <Stats>
        <Accent>Bad:</Accent> {bad}
      </Stats>
      <Stats>
        <Accent>Total:</Accent> {total}
      </Stats>
      <Stats>
        <Accent>Positive feedback:</Accent> {positivePercentage.toFixed(0)}%
      </Stats>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
