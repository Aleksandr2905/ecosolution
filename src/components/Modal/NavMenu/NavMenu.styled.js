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

  &:hover {
    color: var(--white);

    svg {
      stroke: var(--white);
    }
  }

  .active {
    color: var(--light-green);

    svg {
      stroke: var(--light-green);
    }
  }
`;
