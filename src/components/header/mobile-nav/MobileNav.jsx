import NavLinks from '../nav-links/NavLinks';
import './mobile-nav.scss';
const MobileNav = ({ isMobileOpen, closeMobile }) => {
  return (
    <div
      className={
        isMobileOpen ? 'mobile-menu-container' : 'mobile-menu-container hidden'
      }
    >
      <NavLinks closeMobile={closeMobile} />
    </div>
  );
};

export default MobileNav;
