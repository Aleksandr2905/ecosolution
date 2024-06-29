import { text } from '../../data/electricity';
import Section from '../Section/Section';
import Counter from './Counter/Counter';

const Electricity = () => {
  const { id, title } = text;

  return (
    <Section id={id} title={title} titleStyle="TitleCenter">
      <Counter />
    </Section>
  );
};

export default Electricity;
