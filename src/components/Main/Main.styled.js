import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 24px;
  font-family: Oswald Regular;
  font-size: 36px;
  font-weight: 400;
  line-height: 100%;
  text-transform: uppercase;
  color: var(--primary-color);
`;

export const SubTitle = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: var(--primary-color);
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

  &:hover {
    color: var(--light-green);
    border: 1px solid var(--primary-color);
    background: var(--primary-color);
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 0 36px;
  border-top: 1px solid var(--light-green);
`;

export const Email = styled.a`
  text-align: center;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--primary-color);
`;

export const Address = styled.address`
  text-align: center;
  font-family: 'Fira Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--primary-color);
`;
