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
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-bottom: 120px;
  }
`;

export const Wrapper = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
