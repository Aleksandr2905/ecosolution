import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 318px;
`;

export const Image = styled.img`
  max-width: 100%;
  min-height: 168px;
`;

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 34px;
  min-height: 150px;
  padding: 24px 12px 12px;
  background: var(--bg-slider-card);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 38px;
    left: 12px;
    width: calc(100% - 24px);
    height: 1px;
    background-color: var(--light-green);
  }
`;

export const Title = styled.p`
  width: 175px;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  color: var(--primary-color);
`;

export const Button = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100px;
  transition: var(--transition);
  background: var(--light-green);

  svg {
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

export const SubTitle = styled.p`
  display: flex;
  align-items: flex-end;
  width: fit-content;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  color: var(--primary-color);
`;

export const Date = styled(SubTitle)`
  text-align: right;
`;
