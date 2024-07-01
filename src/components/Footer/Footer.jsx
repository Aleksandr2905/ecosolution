import { text } from '../../data/contact';
import Logo from '../Logo/Logo';
import Social from '../Social/Social';
import ButtonToTop from './ButtonToTop/ButtonToTop';
import * as s from './Footer.styled';

const Footer = () => {
  const { email, address } = text.info;
  return (
    <s.Wrapper>
      <s.Title>
        <Logo />
        <ButtonToTop />
      </s.Title>
      <Social />
      <s.ContactBlock>
        <s.Address>{address}</s.Address>
        <s.Email href={`mailto:${email}`}>{email}</s.Email>
        <s.Copyright>ecosolution © 2023</s.Copyright>
      </s.ContactBlock>
    </s.Wrapper>
  );
};

export default Footer;
