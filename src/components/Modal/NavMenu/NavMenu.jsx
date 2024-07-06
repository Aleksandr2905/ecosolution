import PropTypes from 'prop-types';
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
                aria-label={`link to ${href}`}
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

NavMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default NavMenu;
