import sprite from '../../assets/icons/sprite.svg';
import * as s from './ButtonToTop.styled';

const ButtonToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <s.ScrollButton onClick={scrollToTop} aria-label="button scroll to top">
      <svg width="16" height="16">
        <use href={`${sprite}#arrow-right`} />
      </svg>
    </s.ScrollButton>
  );
};

export default ButtonToTop;
