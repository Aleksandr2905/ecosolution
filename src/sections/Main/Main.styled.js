import styled from 'styled-components';

export const TitleBlock = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-family: Oswald Regular;
  font-size: 36px;
  font-weight: 400;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    font-size: 48px;
    width: 301px;
    height: 144px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    width: 485px;
    height: auto;
  }
`;

export const SubTitleBlock = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 363px;
    margin-right: 96px;
  }
`;

export const SubTitle = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    text-align: start;
    letter-spacing: -0.64px;
  }
`;

export const Button = styled.a`
  display: flex;
  width: fit-content;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 500px;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 112.5%;
  letter-spacing: -0.64px;
  margin: 24px auto;
  transition: var(--transition);
  border: 1px solid var(--light-green);
  color: var(--primary-color);

  svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: var(--light-green);
    stroke: var(--primary-color);
    fill: none;
  }

  &:hover,
  &:focus {
    color: var(--light-green);
    border: 1px solid var(--primary-color);
    background: var(--primary-color);
  }

  &:focus {
    outline: 1px solid var(--light-green);
    outline-offset: 4px;
  }

  @media screen and (min-width: 768px) {
    margin: 43px 0 0;
  }

  @media screen and (min-width: 1280px) {
    margin: 20px 0 0;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 0 36px;
  border-top: 1px solid var(--light-green);

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 77px;
    padding: 16px 0 40px;
  }

  @media screen and (min-width: 1280px) {
    gap: 0;
    justify-content: space-between;
    padding: 12px 0 36px;
  }
`;

export const Email = styled.a`
  text-align: center;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  transition: var(--transition);
  color: var(--primary-color);

  &:hover,
  &:focus {
    color: var(--light-green);
  }

  &:focus {
    outline: 1px solid var(--light-green);
    outline-offset: 4px;
    border-radius: 500px;
  }
`;

export const Address = styled.address`
  text-align: center;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--primary-color);
`;

export const BlockCopyright = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    width: 460px;
  }
`;

export const Copyright = styled.p`
  margin-left: 50px;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--primary-color);
`;
