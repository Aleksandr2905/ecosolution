import { text } from '../../data/contact';
import Section from '../Section/Section';
import ContactBlock from './ContactBlock/ContactBlock';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  const { id, title } = text;

  return (
    <Section id={id} title={title} titleStyle="TitleCenter">
      <ContactBlock />
      <ContactForm />
    </Section>
  );
};

export default Contact;
