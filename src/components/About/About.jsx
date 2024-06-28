import { text } from '../../data/about';
import Section from '../Section/Section';

const About = () => {
  const { id, title } = text;

  return (
    <Section id={id} title={title}>
      <div>About</div>
    </Section>
  );
};

export default About;
