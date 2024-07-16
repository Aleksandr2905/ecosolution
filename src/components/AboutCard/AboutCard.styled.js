import styled from 'styled-components';

export const Wrapper = styled.li`
  padding: 12px;
  height: 197px;
  background-color: var(--bg-slider-card);

  @media screen and (min-width: 1280px) {
    padding: 48px 24px;
    height: 339px;
  }
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  font-family: Oswald Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  text-transform: uppercase;
  color: var(--primary-color);

  svg {
    stroke: var(--primary-color);
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    margin-bottom: 94px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Text = styled.p`
  border-top: 1px solid var(--light-green);
  padding-top: 12px;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  color: var(--primary-color);

  @media screen and (min-width: 1280px) {
    padding-top: 24px;
    font-size: 16px;
  }
`;
