import styled from 'styled-components';

export const Title = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: Fontspring;
  font-size: 33px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.32px;
  transition: var(--transition);
  color: var(--primary-color);

  &:hover,
  &:focus {
    color: var(--light-green);
  }

  &:focus {
    outline: 1px solid var(--light-green);
    border-radius: 500px;
    outline-offset: 4px;
  }

  svg {
    margin-top: 7px;
  }

  p {
    margin-top: 7px;
    width: 60px;
    height: 18px;
    font-family: Saygon;
    font-size: 10px;
    font-weight: 400;
    line-height: 9px;
    letter-spacing: -0.4px;
    color: var(--primary-color);

    span {
      color: var(--light-green);
    }
  }
`;
