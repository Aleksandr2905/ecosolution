import { useEffect, useState } from 'react';
import sprite from '../../../assets/icons/sprite.svg';
import Modal from '../../Modal/Modal';
import NavMenu from '../../Modal/NavMenu/NavMenu';
import * as s from './Burger.styled';

const Burger = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['main', 'about', 'cases', 'faq', 'contact'];
      const currentSection = sections.find((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return sectionElement;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      } else setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Modal show={showNavMenu} handleClose={() => setShowNavMenu(false)}>
          <NavMenu
            handleClose={() => setShowNavMenu(false)}
            activeSection={activeSection}
          />
        </Modal>
      )}
    </div>
  );
};

export default Burger;
