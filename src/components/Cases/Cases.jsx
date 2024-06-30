import { text } from '../../data/cases';
import Section from '../Section/Section';
import Slider from './Slider/Slider';

const Cases = () => {
  const { id, title } = text;

  return (
    <Section id={id} title={title}>
      <Slider />
    </Section>
  );
};

export default Cases;
