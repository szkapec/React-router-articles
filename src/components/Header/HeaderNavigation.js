import React from 'react';
import {NavLink } from 'react-router-dom';

//  <li><a href="notes">Notes</a></li> // zapytanie do serwera itddd oraz przeladowanie strony
// <li><Link to="notes">Notes</Link></li> // wstrzykiwanie , bez przeladowania strony dzieki <Link to...
// <NavLink className="navigationItemLink" to="/">Twitters</NavLink> // navlink przyjmuje dodatkowego propsa ktory sie przydaje actioveClassNeme="active" pokazuje ktory jest aktywny
const HeaderNavigation = () => (
<nav>
    <ul className="nawigationWrapper">
        <li className="navigationItem">
        <NavLink exact
        activeClassName="navigationItemLinkActive"
        className="navigationItemLink" to="/">Twitters</NavLink>
        </li>
        <li className="navigationItem">
        <NavLink
        activeClassName="navigationItemLinkActive"
        className="navigationItemLink" to="articles">Articles</NavLink>
        </li>
        <li className="navigationItem">
        <NavLink
        activeClassName="navigationItemLinkActive"
        className="navigationItemLink" to="notes">Notes</NavLink>
        </li>
    </ul>
</nav>
)

export default HeaderNavigation;