import styled from 'styled-components';

export const SubTitle = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 36px;
  color: var(--primary-color);
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 24px;
`;
