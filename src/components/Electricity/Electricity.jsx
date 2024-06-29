import { text } from '../../data/electricity';
import Section from '../Section/Section';

const Electricity = () => {
  const { id, title } = text;

  return (
    <Section id={id} title={title} titleStyle="TitleCenter">
      <div>Electricity</div>
    </Section>
  );
};

export default Electricity;
