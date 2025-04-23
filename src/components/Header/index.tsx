import React, { useState } from "react";

import { 
  CloseIcon,
  ContainerHeader, 
  ContainerMenu, 
  Header2, 
  LeftImage, 
  Logo, 
  Logo2,
  MenuIcon, 
  MenuList,
  MenuOptions,
  MenuList2,
  Links,
  ImgLink,
  MenuPage
} from "./styles";

import nbranco from '../../assets/nbranco.png';
import nej from '../../assets/nej.png';
import foto1 from '../../assets/foto1.png';

const Header: React.FC = () => {
  const [menuPage, setMenuPage] = useState(true);

  const handleClick = () => {
    setMenuPage(!menuPage);
    if (menuPage) {
      document.body.style.overflow = "hidden"
    } 
    else {
      document.body.style.overflow = "scroll"
    }
  }

	return (
    <>
    <ContainerHeader className={menuPage ? "" : "menuPage"}>
      <ImgLink to={"/"}><Logo src={nbranco} /></ImgLink>
        <MenuList 
          onClick={handleClick}>
          <MenuIcon />
      </MenuList>
    </ContainerHeader>

    <ContainerMenu className={menuPage ? "" : "menuPage"}>
      <Header2>
        <ImgLink to={"/"}><Logo2 src={nej} /></ImgLink>
        <MenuList2
          onClick={handleClick}>
          <CloseIcon />
        </MenuList2>
      </Header2>
      <MenuPage>
        <LeftImage src={foto1} className={menuPage ? "" : "menuPage"}/>
        <MenuOptions className={menuPage ? "" : "menuPage"}>
          <Links to={"/"}>Início</Links>
          <Links to={"/eventos"}>Eventos</Links>
          <Links to={"/rede-nej-poa"}>Rede NEJ POA</Links>
          <Links to={"/nossos-parceiros"}>Nossos parceiros</Links>
          <Links to={"/sobre-nos"}>Sobre nós</Links>
        </MenuOptions>
      </MenuPage>
    </ContainerMenu>
    </>
  );
};

export default Header;  
