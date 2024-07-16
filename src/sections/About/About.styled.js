import styled from 'styled-components';

export const TitleBlock = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 124px;
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
    width: 272px;
    font-size: 36px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
    font-size: 48px;
  }
`;

export const SubTitle = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 36px;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    width: 353px;
    margin-bottom: 0;
    padding-left: 11px;
    letter-spacing: -0.64px;
    border-left: 1px solid var(--light-green);
  }

  @media screen and (min-width: 1280px) {
    width: 620px;
    padding-left: 161px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);

    > :nth-child(3),
    > :nth-child(4) {
      grid-column-end: span 2;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;
