import React, {useState} from 'react';
import {NavbarContainer, NavbarWrapper, LogoContainer, LogoImg, BarsMenu, NavbarUl, Navbarli, SectionLink} from './Navbar.elements';
import Logo from '../../img/logo/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  let [click, setClick] = useState(false);

  const showMenu = () => {

    setClick(!click);

  };

  return (
    <>  
      <NavbarContainer>
        <NavbarWrapper>
          <LogoContainer>
            <LogoImg src={Logo} alt="logo"/>
          </LogoContainer>
          <BarsMenu onClick={() => showMenu()}>
            {
              click ? <FaTimes />:<FaBars />
            }
          </BarsMenu>
          <NavbarUl click = {click}>
            <Navbarli><SectionLink href="#main" onClick={() => showMenu()}>inicio</SectionLink></Navbarli>
            <Navbarli><SectionLink href="#aboutme" onClick={() => showMenu()}>acerca de mi</SectionLink></Navbarli>
            <Navbarli><SectionLink href="#solist" onClick={() => showMenu()}>solista</SectionLink></Navbarli>
            <Navbarli><SectionLink href="#duet" onClick={() => showMenu()}>duo</SectionLink></Navbarli>
            <Navbarli><SectionLink href="#group" onClick={() => showMenu()}>grupo musical</SectionLink></Navbarli>
            <Navbarli><SectionLink href="#hiring" onClick={() => showMenu()}>contrataciones</SectionLink></Navbarli>
          </NavbarUl>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
