import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 36px 20px;
  transition: var(--transition);
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'var(--bg-header-hover)' : 'var(--bg-color-main)'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
