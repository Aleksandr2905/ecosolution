import styled from 'styled-components';

export const Section = styled.section`
  margin: 36px auto 0;

  @media screen and (min-width: 768px) {
    margin: 100px auto 0;
  }

  @media screen and (min-width: 1280px) {
    margin: 120px auto 0;
  }
`;

export const Container = styled.div`
  min-width: 360px;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 20px;
  }
`;

export const MainSection = styled(Section)`
  margin: 222px auto 0;

  @media screen and (min-width: 768px) {
    margin: 240px auto 0;
  }

  @media screen and (min-width: 1280px) {
    margin: 264px auto 0;
  }
`;
