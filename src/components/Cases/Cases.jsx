import { text } from '../../data/cases';
import Section from '../Section/Section';
import Slider from './Slider/Slider';
import * as s from './Cases.styled';

const Cases = () => {
  const { id, title } = text;

  return (
    <Section id={id}>
      <s.Title>{title}</s.Title>
      <Slider />
    </Section>
  );
};

export default Cases;
