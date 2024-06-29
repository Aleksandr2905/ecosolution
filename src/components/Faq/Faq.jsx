import { text } from '../../data/faq';
import Section from '../Section/Section';

const Faq = () => {
  const { id, title } = text;

  return (
    <Section id={id} title={title}>
      <div>Faq</div>
    </Section>
  );
};

export default Faq;
