import PropTypes from 'prop-types';
import * as s from './Section.styled';

const Section = ({ id, sectionStyle, children }) => {
  const SectionPrimary = s[sectionStyle] || s.Section;

  return <SectionPrimary id={id}>{children}</SectionPrimary>;
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  sectionStyle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
