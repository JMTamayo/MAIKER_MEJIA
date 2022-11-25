import React, {useState} from 'react';
import {NavbarContainer, NavbarWrapper, LogoContainer, LogoImg, LogoH1, BarsMenu, NavbarUl, Navbarli, SectionLink} from './Navbar.elements';
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
            <LogoImg />
            <LogoH1>Maiker Mejía</LogoH1>
          </LogoContainer>
          <BarsMenu onClick={() => showMenu()}>
            {
              click ? <FaTimes />:<FaBars />
            }
          </BarsMenu>
          <NavbarUl click = {click}>
            <Navbarli><SectionLink onClick={() => showMenu()}>solista</SectionLink></Navbarli>
            <Navbarli><SectionLink onClick={() => showMenu()}>duo</SectionLink></Navbarli>
            <Navbarli><SectionLink onClick={() => showMenu()}>agrupación</SectionLink></Navbarli>
          </NavbarUl>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
