import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 480px;
  margin: 36px auto 0;
  padding: 24px 20px;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 16px;
    max-width: 768px;
    margin: 100px auto 0;
    padding: 40px 30px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--light-green);
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    flex-direction: row;
    gap: 97px;

    &::before {
      top: -40px;
    }
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const Address = styled.address`
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    margin-right: 27px;
  }
`;

export const Email = styled.a`
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  transition: var(--transition);
  color: var(--primary-color);

  &:hover {
    color: var(--light-green);
  }
`;

export const Copyright = styled.p`
  font-family: Fira Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--primary-color);
`;
