import React from "react";
import styled from "styled-components";
import {Colors, Flex} from "./General";
import {ButtonHeader, ButtonTopMenu} from "./Buttons";
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";
import pic_decoration from "../assets/Decoration.svg";
import pic_hero from "../assets/Home-Hero-Image.jpg";

const Hero = styled.div `
  background-image: url(${pic_hero});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: -450px bottom;
  height: 100vh;
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-end;
`

const TopMenu = styled(Flex) `
  padding: 5px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Nav = styled.nav `
  display: flex;
  justify-content: flex-end; 
`
const MainMenu = styled.ul `
  display: flex;
  justify-content: flex-end;
  list-style: none;
`
const MenuItem = styled.li `
  display: flex;
  border: 1px solid transparent;
  justify-content: flex-end;
  padding: 10px;
  
  :hover {
      border: 1px solid ${Colors.colorLightGrey};
      cursor: pointer;
  }
`

const Slogan = styled(Flex) `
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const H1 = styled.h1 `
    text-align: center;
`

const HomeHeader = () => {
    return (
        <Hero>
            <Flex column left twocolumns>
                <TopMenu right>
                    <StyledLink to="/login"><ButtonTopMenu>Zaloguj</ButtonTopMenu></StyledLink>
                    <StyledLink to="/register"><ButtonTopMenu>Załóż konto</ButtonTopMenu></StyledLink>
                </TopMenu>
                <Nav>
                    <MainMenu>
                        <MenuItem><LinkScroll to="start">Start</LinkScroll></MenuItem>
                        <MenuItem><LinkScroll to="ocochodzi">O co chodzi?</LinkScroll></MenuItem>
                        <MenuItem><LinkScroll to="onas">O nas</LinkScroll></MenuItem>
                        <MenuItem><LinkScroll to="fundacje">Fundacje i organizacje</LinkScroll></MenuItem>
                        <MenuItem><LinkScroll to="kontakt">Kontakt</LinkScroll></MenuItem>
                    </MainMenu>
                </Nav>
                <Slogan>
                    <H1>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</H1>
                    <img src={pic_decoration} width="200px" alt="Decoration"/><br/>
                    <Flex center>
                        <ButtonHeader>Oddaj rzeczy</ButtonHeader>
                        <ButtonHeader>Zorganizuj zbiórkę</ButtonHeader>
                    </Flex>
                </Slogan>
            </Flex>
        </Hero>
    )
}

export default HomeHeader;