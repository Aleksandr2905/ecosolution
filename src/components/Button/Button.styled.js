import styled from 'styled-components';

export const Wrapper = styled.a`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: fit-content;
  border-radius: 500px;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  background: var(--light-green);
  color: var(--primary-color);
  transition: var(--transition);

  svg {
    width: 14px;
    height: 14px;
    padding: 0;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    transform: rotate(90deg);
    background: var(--primary-color);
    stroke: var(--primary-color);
    fill: none;
  }

  &:hover,
  &:focus {
    background: var(--primary-color);
    color: var(--light-green);

    svg {
      background: var(--light-green);
    }
  }

  &:focus {
    outline: 1px solid var(--light-green);
    outline-offset: 4px;
  }
`;
