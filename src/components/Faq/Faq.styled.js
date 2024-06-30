import styled from 'styled-components';

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

export const NotAnswer = styled(Question)`
  margin: 36px 0 12px;
  text-align: center;
`;
