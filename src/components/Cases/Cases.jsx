import { text } from '../../data/cases';
import Section from '../Section/Section';

const Cases = () => {
  const { id, title } = text;

  return (
    <Section id={id} title={title}>
      <div>Cases</div>
    </Section>
  );
};

export default Cases;
