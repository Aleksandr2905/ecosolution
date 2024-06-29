import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin: 96px auto 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -72px;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 48px;
    background-color: var(--light-green);
  }
`;

export const Count = styled.h3`
  text-align: center;
  font-family: Oswald Bold;
  font-size: 48px;
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--light-green);
  letter-spacing: -0.4px;
`;

export const Units = styled.h4`
  text-align: center;
  font-family: Oswald Regular;
  font-size: 24px;
  font-weight: 400;
  line-height: 171.429%;
  color: var(--primary-color);
`;
