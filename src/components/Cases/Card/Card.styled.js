import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 318px;

  @media screen and (min-width: 768px) {
    min-height: 342px;
  }

  @media screen and (min-width: 1280px) {
    min-height: 506px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  min-height: 168px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 114px;
  padding: 24px 12px 12px;
  background: var(--bg-slider-card);

  @media screen and (min-width: 768px) {
    min-height: 118px;
  }

  @media screen and (min-width: 1280px) {
    padding: 36px 48px;
    min-height: 138px;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 61px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }

  @media screen and (min-width: 1280px) {
    gap: 83px;
  }
`;

export const Title = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    text-align: start;
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Button = styled.a`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  transition: var(--transition);
  background: var(--light-green);

  svg {
    padding: 16px;
    transform: rotate(-45deg);
    transition: var(--transition);
    stroke: var(--primary-color);
    fill: none;
  }

  &:hover,
  &:focus {
    background: var(--primary-color);

    svg {
      stroke: var(--light-green);
    }
  }

  &:focus {
    outline: 1px solid var(--light-green);
    outline-offset: 4px;
  }
`;

export const SubTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--light-green);
  }

  @media screen and (min-width: 1280px) {
    &::before {
      top: -24px;
    }
  }
`;

export const SubTitle = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Date = styled(SubTitle)`
  text-align: right;
`;
