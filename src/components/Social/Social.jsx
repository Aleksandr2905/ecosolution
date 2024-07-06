import sprite from '../../assets/icons/sprite.svg';
import { social } from '../../data/social';
import * as s from './Social.styled';

const Social = ({ style }) => {
  const Wrapper = s[style] || s.Wrapper;
  return (
    <Wrapper>
      {social.map(({ icon, link, label }) => (
        <a
          key={icon}
          href={link}
          aria-label={`link ${label}`}
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
