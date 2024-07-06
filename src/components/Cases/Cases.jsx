import { text } from '../../data/cases';
import Section from '../Section/Section';
import Slider from './Slider/Slider';

const Cases = () => {
  const { id, title } = text;

  return (
    <Section id={id}>
      <Slider title={title} />
    </Section>
  );
};

export default Cases;
