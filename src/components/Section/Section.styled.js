import styled from 'styled-components';

export const Section = styled.section`
  min-width: 360px;
  max-width: 480px;
  margin: 36px auto 0;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 708px;
    margin: 100px auto 0;
    padding: 0 30px;
  }
`;

export const MainSection = styled(Section)`
  margin: 222px auto 0;
`;
