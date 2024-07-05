import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    /* gap: 24px; */
    position: relative;
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
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  max-height: 66px;

  svg {
    stroke: var(--primary-color);
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Question = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  color: var(--primary-color);
`;

export const Answer = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  color: var(--primary-color);
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
`;
