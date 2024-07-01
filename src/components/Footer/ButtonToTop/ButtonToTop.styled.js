import styled from 'styled-components';

export const ScrollButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;

  svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    transform: rotate(-90deg);
    transition: var(--transition);
    background: var(--light-green);
    stroke: var(--primary-color);
    fill: none;
  }

  &:hover {
    svg {
      background: var(--primary-color);
      stroke: var(--light-green);
    }
  }
`;
