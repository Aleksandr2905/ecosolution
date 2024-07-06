import sprite from '../../../assets/icons/sprite.svg';
import { navigation } from '../../../data/navigation';
import Social from '../../Social/Social';
import * as s from './NavMenu.styled';

const NavMenu = ({ handleClose, activeSection }) => {
  return (
    <s.Wrapper>
      <nav>
        <s.NavList>
          {navigation.map(({ href, name }) => (
            <li key={name}>
              <s.NavItem
                href={`#${href}`}
                onClick={handleClose}
                className={activeSection === href ? 'active' : ''}
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
