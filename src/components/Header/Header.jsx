import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Burger from './Burger/Burger';
import * as s from './Header.styled';
// import Button from '../Button/Button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <s.Wrapper $scrolled={scrolled}>
      <s.Container>
        <Logo />
        <Burger />
        {/* <Button text="Get in touch" /> */}
      </s.Container>
    </s.Wrapper>
  );
};

export default Header;
