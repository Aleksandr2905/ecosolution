import { useState } from 'react';
import { text } from '../../data/faq';
import Section from '../Section/Section';
import sprite from '../../assets/icons/sprite.svg';
import * as s from './Faq.styled';

const Faq = () => {
  const { id, title, listFaq } = text;
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id={id} title={title}>
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
    </Section>
  );
};

export default Faq;
