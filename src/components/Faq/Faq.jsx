import { useState } from 'react';
import { text } from '../../data/faq';
import Section from '../Section/Section';
import sprite from '../../assets/icons/sprite.svg';
import * as s from './Faq.styled';
import Button from '../Button/Button';

const Faq = () => {
  const { id, title, listFaq, notAnswer, button } = text;
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id={id}>
      <s.Title>{title}</s.Title>
      <s.List>
        {listFaq.map((item, index) => (
          <s.Item key={item.id} onClick={() => toggleFaq(index)}>
            <s.Icon>
              <svg width="16" height="16">
                <use
                  href={`${sprite}#${activeIndex === index ? 'minus' : 'plus'}`}
                />
              </svg>
            </s.Icon>
            <s.Text>
              <s.Question>{item.question}</s.Question>
              {activeIndex === index && <s.Answer>{item.answer}</s.Answer>}
            </s.Text>
          </s.Item>
        ))}
      </s.List>
      <s.ToContact>
        <s.Question>{notAnswer}</s.Question>
        <Button text={button} />
      </s.ToContact>
    </Section>
  );
};

export default Faq;
