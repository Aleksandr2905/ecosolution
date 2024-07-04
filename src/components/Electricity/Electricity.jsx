import { text } from '../../data/electricity';
import Section from '../Section/Section';
import Counter from './Counter/Counter';
import * as s from './Electricity.styled';

const Electricity = () => {
  const { id, title } = text;

  return (
    <Section id={id}>
      <s.Title>{title}</s.Title>
      <Counter />
    </Section>
  );
};

export default Electricity;
