import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';
import * as s from './Button.styled';

const Button = ({ text }) => {
  return (
    <s.Wrapper href="#contact" aria-label="link to contact">
      {text}
      <svg width="14" height="14">
        <use href={`${sprite}#arrow-right`} />
      </svg>
    </s.Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
