import { text } from '../../data/about';
import Section from '../Section/Section';
import * as s from './About.styled';

const About = () => {
  const { id, title, description } = text;

  return (
    <Section id={id} title={title}>
      <s.SubTitle>{description}</s.SubTitle>
    </Section>
  );
};

export default About;
