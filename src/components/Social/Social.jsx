import { social } from '../../data/social';
import sprite from '../../assets/icons/sprite.svg';
import * as s from './Social.styled';

const Social = ({ contactStyle }) => {
  const Wrapper = s[contactStyle] || s.Wrapper;
  return (
    <Wrapper>
      {social.map(({ icon, link, label }) => (
        <a
          key={icon}
          href={link}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="24" height="24">
            <use href={`${sprite}#${icon}`} />
          </svg>
        </a>
      ))}
    </Wrapper>
  );
};

export default Social;
