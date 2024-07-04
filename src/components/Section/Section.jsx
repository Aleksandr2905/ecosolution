import * as s from './Section.styled';

const Section = ({ id, sectionStyle, children }) => {
  const SectionPrimary = s[sectionStyle] || s.Section;

  return <SectionPrimary id={id}>{children}</SectionPrimary>;
};

export default Section;
