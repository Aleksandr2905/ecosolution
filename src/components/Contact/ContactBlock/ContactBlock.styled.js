import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 244px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
    width: 466px;
  }
`;

export const Label = styled.p`
  margin-bottom: 8px;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--primary-color);

  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: justify;
  width: fit-content;
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  color: var(--primary-color);
  transition: var(--transition);

  & svg {
    fill: transparent;
    transition: var(--transition);
    stroke: var(--primary-color);
  }

  &:hover {
    svg {
      stroke: var(--light-green);
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;

    & svg {
      width: 24px;
      height: 24px;
      fill: transparent;
      transition: var(--transition);
      stroke: var(--primary-color);
    }
  }
`;

export const SecondPhone = styled(Link)`
  margin-top: 12px;
`;
