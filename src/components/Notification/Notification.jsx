import { Wrapper, Text } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <Wrapper>
      <Text>{message}</Text>
    </Wrapper>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
