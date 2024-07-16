import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
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

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin: 135px auto 0;

    &::before {
      top: -111px;
      height: 87px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin: 120px auto 0;

    &::before {
      top: -104px;
    }
  }
`;

export const Count = styled.h3`
  width: 274px;
  font-family: Oswald Bold;
  font-size: 48px;
  font-weight: 700;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--light-green);
  letter-spacing: -0.4px;

  @media screen and (min-width: 768px) {
    width: 564px;
    font-size: 100px;
  }

  @media screen and (min-width: 1280px) {
    width: 950px;
    font-size: 164px;
  }
`;

export const Units = styled.h4`
  text-align: center;
  font-family: Oswald Regular;
  font-size: 24px;
  font-weight: 400;
  line-height: 171.429%;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;
