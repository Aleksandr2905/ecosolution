import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: absolute;
  top: 28px;
  right: 20px;
  padding: 0;
  border: none;
  background: transparent;
  z-index: 10;

  @media screen and (min-width: 768px) {
    top: 40px;
    right: 30px;
  }

  @media screen and (min-width: 1280px) {
    right: 20px;
  }

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
