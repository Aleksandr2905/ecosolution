import styled from 'styled-components';

export const Backdrop = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 36px 20px;
  gap: 16px;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  margin: 0 auto;
  overflow: hidden;
  z-index: 100;
  backdrop-filter: blur(2px);
  background-color: rgba(23, 61, 51, 0.25);
`;

export const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  height: 100%;
  padding: 24px;
  /* position: fixed;
  top: 0;
  right: 0; */
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  border: none;
  padding: 0 0 8px;
  border-bottom: 1px solid var(--bg-header-hover);
  background-color: transparent;
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  color: var(--bg-header-hover);

  & svg {
    fill: green;
    transition: var(--transition);

    &:hover {
      transform: rotate(90deg);
    }
  }
`;
