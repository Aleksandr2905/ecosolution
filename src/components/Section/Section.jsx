import * as s from './Section.styled';

const Section = ({ id, title, children }) => {
  return (
    <s.Section id={id}>
      <s.Title>{title}</s.Title>
      {children}
    </s.Section>
  );
};

export default Section;
