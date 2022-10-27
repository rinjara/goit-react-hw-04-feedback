import PropTypes from 'prop-types';
import { Wrapper, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map((option, idx) => (
        <OptionButton
          type="button"
          key={idx}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionButton>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.func.isRequired,
};
