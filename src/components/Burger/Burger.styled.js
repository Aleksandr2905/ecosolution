import styled from 'styled-components';

export const BurgerButton = styled.button`
  display: inline-flex;
  width: 39px;
  height: 39px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  background-color: var(--pale-green);
  border: none;
  border-radius: 500px;
  transition: var(--transition);

  svg {
    stroke: var(--primary-color);
  }

  &:hover,
  &:focus {
    background-color: var(--light-green);
  }

  &:focus {
    outline: 1px solid var(--light-green);
    outline-offset: 4px;
  }
`;
