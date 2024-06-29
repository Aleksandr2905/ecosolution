import { text } from '../../data/contact';
import Section from '../Section/Section';

const Contact = () => {
  const { id, title } = text;

  return (
    <Section id={id} title={title} titleStyle="TitleCenter">
      <div>Contact</div>
    </Section>
  );
};

export default Contact;
