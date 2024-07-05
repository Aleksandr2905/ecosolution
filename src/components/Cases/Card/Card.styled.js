import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 318px;

  @media screen and (min-width: 768px) {
    min-height: 342px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  min-height: 168px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  /* gap: 34px; */
  min-height: 114px;
  padding: 24px 12px 12px;
  background: var(--bg-slider-card);
  /* position: relative; */

  /* &::before {
    content: '';
    position: absolute;
    bottom: 38px;
    left: 12px;
    width: calc(100% - 24px);
    height: 1px;
    background-color: var(--light-green);
  } */

  @media screen and (min-width: 768px) {
    min-height: 118px;
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
`;

export const Title = styled.p`
  /* width: 175px; */
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
`;

export const Button = styled.a`
  /* display: inline-flex;
  justify-content: center;
  align-items: center; */
  width: 60px;
  height: 60px;
  /* padding: 16px; */
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

  &:hover {
    background: var(--primary-color);

    svg {
      stroke: var(--light-green);
    }
  }
`;

export const SubTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  /* padding-top: 12px;
  border-top: 1px solid var(--light-green); */

  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--light-green);
  }
`;

export const SubTitle = styled.p`
  /* display: flex;
  align-items: flex-end;
  width: fit-content; */
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
`;

export const Date = styled(SubTitle)`
  text-align: right;
`;
