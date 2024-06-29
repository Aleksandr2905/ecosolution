import { text } from '../../data/main';
import Section from '../Section/Section';

const Main = () => {
  const { id, title } = text;
  return (
    <Section
      id={id}
      title={title}
      sectionStyle="MainSection"
      titleStyle="MainTitle"
    >
      <div>Main</div>
    </Section>
  );
};

export default Main;
