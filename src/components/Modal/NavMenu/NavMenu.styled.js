import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;

  @media screen and (min-width: 1280px) {
    margin-top: 16px;
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: Fira Sans;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: var(--transition);
  color: var(--white-25-opacity);

  svg {
    transform: rotate(-45deg);
    transition: var(--transition);
    stroke: var(--white-25-opacity);
    fill: none;
  }

  &:hover,
  &:focus {
    color: var(--white);

    svg {
      stroke: var(--white);
    }
  }

  &:focus {
    outline: 1px solid var(--light-green);
    outline-offset: 4px;
    border-radius: 500px;
  }

  &.active {
    color: var(--light-green);

    svg {
      stroke: var(--light-green);
    }
  }
`;
