import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 19px;
`;

export const Counter = styled.p`
  display: flex;
  justify-content: space-between;
  width: 72px;
  text-align: justify;
  font-family: Fira Sans Light;
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
  color: var(--primary-color);

  span {
    color: rgba(23, 61, 51, 0.25);
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 7px;
`;

export const BtnNext = styled.button`
  display: inline-flex;
  padding: 15px;
  align-items: flex-start;
  gap: 10px;
  background-color: transparent;
  border-radius: 100px;
  transition: var(--transition);
  border: 1px solid var(--primary-color);

  svg {
    width: 36px;
    height: 36px;
    transition: var(--transition);
    stroke: var(--primary-color);
    fill: none;
  }

  &:hover {
    border: 1px solid var(--light-green);

    svg {
      stroke: var(--light-green);
    }
  }
`;

export const BtnPrev = styled(BtnNext)`
  svg {
    transform: rotate(180deg);
  }
`;
