import styled from 'styled-components';

export const Wrapper = styled.li`
  padding: 12px;
  height: 197px;
  background-color: var(--bg-slider-card);
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
`;
