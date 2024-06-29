import { text } from '../../data/about';
import Section from '../Section/Section';
import * as s from './About.styled';

const About = () => {
  const { id, title, description } = text;

  return (
    <Section id={id} title={title}>
      <s.SubTitle>{description}</s.SubTitle>
      <div>About</div>
    </Section>
  );
};

export default About;
