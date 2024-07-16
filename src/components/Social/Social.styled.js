import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;

  a {
    display: flex;
    align-items: center;

    &:focus {
      outline: 1px solid var(--light-green);
      border-radius: 4px;
      outline-offset: 4px;

      svg {
        fill: var(--light-green);
        stroke: var(--light-green);
      }
    }
  }

  svg {
    transition: var(--transition);
    fill: var(--primary-color);
    stroke: var(--primary-color);

    &:hover,
    &:focus {
      fill: var(--light-green);
      stroke: var(--light-green);
    }

    &:focus {
      outline: 1px solid var(--light-green);
      outline-offset: 4px;
    }
  }
`;

export const ContactWrapper = styled(Wrapper)`
  a {
    padding: 12px;

    @media screen and (min-width: 1280px) {
      padding: 0;
    }
  }
`;

export const NavMenu = styled(Wrapper)`
  svg {
    fill: var(--white);
    stroke: var(--white);
  }
`;

export const ForFooter = styled(Wrapper)`
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
