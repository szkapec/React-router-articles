import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import './Navigation.scss';
import logoImage from '../../assets/images/logo.svg'
import Button from '../Button/Button'


const Header = ({openModalFn}) => (
<>
<header className="header__wrapper">
<img src={logoImage} alt="logoImage"/>
    <HeaderNavigation/>
    <Button click={openModalFn} secondary>New Item</Button>
</header>
</>
)


export default Header;