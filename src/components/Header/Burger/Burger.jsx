import { useState } from 'react';
// import MobileMenu from '../MobileMenu/MobileMenu';
import sprite from '../../../assets/icons/sprite.svg';
import * as s from './Burger.styled';

const Burger = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <div>
      <s.BurgerButton
        type="button"
        onClick={toggleNavMenu}
        aria-label="burger button"
      >
        <svg width="16" height="16">
          <use href={`${sprite}#menu`} />
        </svg>
      </s.BurgerButton>
      {/* {showMobileMenu ? <MobileMenu onClose={toggleMobileMenu} /> : null} */}
    </div>
  );
};

export default Burger;
