import PropTypes from 'prop-types';
import sprite from '../../../assets/icons/sprite.svg';
import * as s from './Card.styled';

const Card = ({ slide }) => {
  const { id, webp, jpg, title, subTitle, date } = slide;
  return (
    <s.Wrapper>
      <picture>
        <source srcSet={`${webp.oneX} 1x, ${webp.twoX} 2x`} type="image/webp" />
        <source srcSet={`${jpg.oneX} 1x, ${jpg.twoX} 2x`} type="image/jpeg" />
        <s.Image
          src={jpg.oneX}
          alt={`Slide ${id}`}
          width="100%"
          height="100%"
          loading="lazy"
        />
      </picture>
      <s.Info>
        <s.TitleBlock>
          <s.Title>{title}</s.Title>
          <s.Button href="/" aria-label="button">
            <svg width="28" height="28">
              <use href={`${sprite}#arrow-right`} />
            </svg>
          </s.Button>
        </s.TitleBlock>
        <s.SubTitleBlock>
          <s.SubTitle>{subTitle}</s.SubTitle>
          <s.Date>{date}</s.Date>
        </s.SubTitleBlock>
      </s.Info>
    </s.Wrapper>
  );
};

Card.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webp: PropTypes.shape({
      oneX: PropTypes.string.isRequired,
      twoX: PropTypes.string.isRequired,
    }).isRequired,
    jpg: PropTypes.shape({
      oneX: PropTypes.string.isRequired,
      twoX: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
