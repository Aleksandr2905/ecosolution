import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  transition: var(--transition);
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'var(--white)' : 'var(--bg-color-main)'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 480px;
  padding: 36px 20px;
`;
