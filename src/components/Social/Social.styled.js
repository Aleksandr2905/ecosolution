import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;

  svg {
    transition: var(--transition);
    fill: var(--primary-color);
    stroke: var(--primary-color);

    &:hover {
      fill: var(--light-green);
      stroke: var(--light-green);
    }
  }
`;

export const ContactWrapper = styled(Wrapper)`
  a {
    padding: 12px;
  }
`;

export const NavMenu = styled(Wrapper)`
  svg {
    fill: var(--white);
    stroke: var(--white);
  }
`;
