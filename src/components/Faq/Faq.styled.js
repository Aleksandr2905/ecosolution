import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    /* gap: 24px; */
    position: relative;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: Oswald Regular;
  font-size: 28px;
  font-weight: 400;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-left: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-left: 185px;
    width: 398px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-top: 16px;
  cursor: pointer;
  border-top: 1px solid var(--light-green);

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 596px;
    padding-top: 24px;
    gap: 24px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  max-height: 66px;

  svg {
    stroke: var(--primary-color);
  }

  @media screen and (min-width: 1280px) {
    max-height: 87px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Question = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  color: var(--primary-color);

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Answer = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  color: var(--primary-color);

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const ToContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 44px;
    bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    right: 51px;
  }
`;
