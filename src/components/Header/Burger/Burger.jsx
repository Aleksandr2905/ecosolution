import { useState } from 'react';
import sprite from '../../../assets/icons/sprite.svg';
import * as s from './Burger.styled';
import Modal from '../../Modal/Modal';

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
      {showNavMenu && (
        <Modal
          show={showNavMenu}
          handleClose={() => setShowNavMenu(false)}
        ></Modal>
      )}
    </div>
  );
};

export default Burger;
