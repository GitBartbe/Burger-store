import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../links';

import './nav-links.scss';

const NavLinks = ({ closeMobile }) => {
  const { pathname } = useLocation();
  const active = navLinks.findIndex((e) => e.path === pathname);

  return (
    <ul className='nav-ul'>
      {navLinks.map((e, index) => (
        <li
          onClick={() => closeMobile()}
          key={index}
          className={`${index === active ? 'active' : ''}`}
        >
          <Link to={e.path}>{e.display}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
