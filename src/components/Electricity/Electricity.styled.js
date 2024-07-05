import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-family: Oswald Regular;
  font-size: 28px;
  font-weight: 400;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    margin: 0 auto 24px;
    width: 368px;
    font-size: 36px;
  }
`;
