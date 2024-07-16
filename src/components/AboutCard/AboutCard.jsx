import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';
import * as s from './AboutCard.styled';

const AboutCard = ({ icon, value, text }) => {
  return (
    <s.Wrapper>
      <s.Title>
        <svg width="16" height="16">
          <use href={`${sprite}#${icon}`} />
        </svg>
        {value}
      </s.Title>
      <s.Text>{text}</s.Text>
    </s.Wrapper>
  );
};

AboutCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AboutCard;
