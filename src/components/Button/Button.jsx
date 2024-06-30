import sprite from '../../assets/icons/sprite.svg';
import * as s from './Button.styled';

const Button = ({ text }) => {
  return (
    <s.Wrapper href="#contact">
      {text}
      <svg width="14" height="14">
        <use href={`${sprite}#arrow-right`} />
      </svg>
    </s.Wrapper>
  );
};

export default Button;
