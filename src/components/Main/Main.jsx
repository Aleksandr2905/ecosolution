import { useEffect, useState } from 'react';
import { heroImageAdaptive, text } from '../../data/main';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import sprite from '../../assets/icons/sprite.svg';
import Section from '../Section/Section';
import * as s from './Main.styled';

const Main = () => {
  const screenWidth = useScreenWidth();
  const [imageAdaptive, setImageAdaptive] = useState(
    heroImageAdaptive[screenWidth]
  );
  const { id, title, description, address, email } = text;

  useEffect(() => {
    setImageAdaptive(heroImageAdaptive[screenWidth]);
  }, [screenWidth]);

  return (
    <Section
      id={id}
      title={title}
      sectionStyle="MainSection"
      titleStyle="MainTitle"
    >
      <s.SubTitle>{description}</s.SubTitle>
      <s.Button href="#cases">
        Learn more
        <svg width="16" height="16">
          <use href={`${sprite}#arrow-right`} />
        </svg>
      </s.Button>
      <s.ContactBlock>
        <s.Text>{address}</s.Text>
        <s.Text>{email}</s.Text>
      </s.ContactBlock>
      <picture>
        <source
          srcSet={`${imageAdaptive.oneX} 1x, ${imageAdaptive.twoX} 2x`}
          type="image/webp"
        />
        <source
          srcSet={`${imageAdaptive.oneX} 1x, ${imageAdaptive.twoX} 2x`}
          type="image/jpeg"
        />
        <img src={imageAdaptive.oneX} alt="wind turbine" loading="lazy" />
      </picture>
    </Section>
  );
};

export default Main;
