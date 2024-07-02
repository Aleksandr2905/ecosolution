import { navigation } from '../../../data/navigation';
import sprite from '../../../assets/icons/sprite.svg';
import Social from '../../Social/Social';
import * as s from './NavMenu.styled';
import { useState } from 'react';

const NavMenu = ({ handleClose }) => {
  const [activeLink, setActiveLink] = useState('href');

  const handleLinkClick = (href) => {
    setActiveLink(href);
    if (handleClose) handleClose();
  };

  return (
    <s.Wrapper>
      <nav>
        <s.NavList>
          {navigation.map(({ href, name }) => (
            <li key={name}>
              <s.NavItem
                href={href}
                onClick={() => handleLinkClick(href)}
                className={activeLink === href ? 'active' : ''}
              >
                {name}
                <svg width="16" height="16">
                  <use href={`${sprite}#arrow-right`} />
                </svg>
              </s.NavItem>
            </li>
          ))}
        </s.NavList>
      </nav>
      <Social style="NavMenu" />
    </s.Wrapper>
  );
};

export default NavMenu;
