import { text } from '../../data/contact';
import Section from '../Section/Section';
import ContactBlock from './ContactBlock/ContactBlock';
import ContactForm from './ContactForm/ContactForm';
import * as s from './Contact.styled';

const Contact = () => {
  const { id, title } = text;

  return (
    <Section id={id}>
      <s.Title>{title}</s.Title>
      <s.Wrapper>
        <ContactBlock />
        <ContactForm />
      </s.Wrapper>
    </Section>
  );
};

export default Contact;
