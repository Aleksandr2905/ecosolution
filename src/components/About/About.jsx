import { text } from '../../data/about';
import Section from '../Section/Section';
import * as s from './About.styled';
import AboutCard from './AboutCard/AboutCard';
import AboutImage from './AboutImage/AboutImage';

const About = () => {
  const { id, title, description, values } = text;

  return (
    <Section id={id}>
      <s.TitleBlock>
        <s.Title>{title}</s.Title>
        <s.SubTitle>{description}</s.SubTitle>
      </s.TitleBlock>
      <s.List>
        <AboutCard
          icon={values[0].icon}
          value={values[0].value}
          text={values[0].text}
        />
        <AboutCard
          icon={values[1].icon}
          value={values[1].value}
          text={values[1].text}
        />
        <AboutImage image="imageOne" alt="wind farms fields" />
        <AboutImage image="imageTwo" alt="man worker field by solar panels" />
        <AboutCard
          icon={values[2].icon}
          value={values[2].value}
          text={values[2].text}
        />
        <AboutCard
          icon={values[3].icon}
          value={values[3].value}
          text={values[3].text}
        />
      </s.List>
    </Section>
  );
};

export default About;
