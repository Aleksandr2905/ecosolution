import styled from 'styled-components';

export const Section = styled.section`
  min-width: 360px;
  max-width: 480px;
  margin: -84px auto 0;
  padding: 120px 20px 0;
`;

export const MainSection = styled(Section)`
  margin: 222px auto 0;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: Oswald Regular;
  font-size: 28px;
  font-weight: 400;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--primary-color);

  /* padding-top: 120px;
  margin-top: -120px; */
`;

export const MainTitle = styled(Title)`
  font-size: 36px;
`;

export const TitleCenter = styled(Title)`
  text-align: center;
`;
