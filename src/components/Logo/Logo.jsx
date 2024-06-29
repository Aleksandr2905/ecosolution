import sprite from '../../assets/icons/sprite.svg';
import * as s from './Logo.styled';

const Logo = () => {
  return (
    <div>
      <s.Title href="/" aria-label="logo">
        <svg width={31} height={18}>
          <use href={`${sprite}#logo`} />
        </svg>
        ecosolution
        <p>
          <span>GREEN</span>ERGY FOR LIFE
        </p>
      </s.Title>
    </div>
  );
};

export default Logo;
