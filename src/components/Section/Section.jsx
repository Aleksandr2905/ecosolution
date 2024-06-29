import * as s from './Section.styled';

const Section = ({ id, sectionStyle, title, titleStyle, children }) => {
  const SectionPrimary = s[sectionStyle] || s.Section;
  const TitleSection = s[titleStyle] || s.Title;

  return (
    <SectionPrimary id={id}>
      <TitleSection>{title}</TitleSection>
      {children}
    </SectionPrimary>
  );
};

export default Section;
