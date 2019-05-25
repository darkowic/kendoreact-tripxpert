import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../AppContext';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes);


const Link = styled(NavLink)`
  padding: 0 1rem;
`;

const Menu = () => {
  const ctx = useContext(AppContext);
  return (
    <ul>
      <li className="menu">
        <FontAwesomeIcon icon={`${ctx.navOpen ? 'times' : 'bars'}`} className="hoverable" onClick={() => {
          ctx.toggleSidenav(!ctx.navOpen);
        }} />
      </li>
      <li className="link">
        <Link exact activeClassName="active" to="/">Home</Link>
      </li>
      <li className="link">
        <Link activeClassName="active" to="/destinations">Destinations</Link>
      </li>
      <li className="link">
        <Link activeClassName="active" to="/contact">Contact</Link>
      </li>
      <li className="link">
        <a href="https://github.com/darkowic/kendoreact-tripxpert">Source Code</a>
      </li>
    </ul>
  );
};

export default Menu;
