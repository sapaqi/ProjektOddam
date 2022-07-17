import styled, { createGlobalStyle } from "styled-components";
//import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database";

export const Colors = {
    colorLight: "#FFFFFF",
    colorPrimary: "#C0AE69",
    colorSecondary: "#D8CB9F",
    colorSecondaryHighlighted: "#E2D5A9",
    colorDarkGrey: "#2A324C",
    colorGrey: "#7C7E82",
    colorLightGrey: "#B8B8B8",
    colorDark: "#000000"
}


export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: "EuroSansPro-Reg";
      src: url("//db.onlinewebfonts.com/t/1b190c26ad7d33b0b76cd2dca37ad732.eot");
      src: url("//db.onlinewebfonts.com/t/1b190c26ad7d33b0b76cd2dca37ad732.eot?#iefix") format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/1b190c26ad7d33b0b76cd2dca37ad732.woff2") format("woff2"),
      url("//db.onlinewebfonts.com/t/1b190c26ad7d33b0b76cd2dca37ad732.woff") format("woff"),
      url("//db.onlinewebfonts.com/t/1b190c26ad7d33b0b76cd2dca37ad732.ttf") format("truetype"),
      url("//db.onlinewebfonts.com/t/1b190c26ad7d33b0b76cd2dca37ad732.svg#EuroSansPro-Reg") format("svg");
    }
    @font-face {
      font-family: "Rift-Demi"; 
      src: url("//db.onlinewebfonts.com/t/de626fa05339c4b71433352a856e5b30.eot"); 
      src: url("//db.onlinewebfonts.com/t/de626fa05339c4b71433352a856e5b30.eot?#iefix") format("embedded-opentype"), 
      url("//db.onlinewebfonts.com/t/de626fa05339c4b71433352a856e5b30.woff2") format("woff2"), 
      url("//db.onlinewebfonts.com/t/de626fa05339c4b71433352a856e5b30.woff") format("woff"), 
      url("//db.onlinewebfonts.com/t/de626fa05339c4b71433352a856e5b30.ttf") format("truetype"), 
      url("//db.onlinewebfonts.com/t/de626fa05339c4b71433352a856e5b30.svg#Rift-Demi") format("svg"); }

    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
    }


    h1 {
      font-size: 3rem;
      font-family: "EuroSansPro", sans-serif;
      color: ${Colors.colorDarkGrey};
      font-weight: 300;
    }

    h2 {
      font-size: 2rem;
      font-family: "EuroSansPro", sans-serif;
      color: ${Colors.colorDarkGrey};
      font-weight: 300;
    }

    h3 {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-family: "EuroSansPro", sans-serif;
      color: ${Colors.colorDarkGrey};
      font-weight: 300;
    }

    p {
      font-size: 1rem;
      font-family: "EuroSansPro", sans-serif;
      color: ${Colors.colorDarkGrey};
      font-weight: 300;
    }
`;

// const firebaseConfig = {
//     databaseURL: "https://bialykamien-ef109-default-rtdb.europe-west1.firebasedatabase.app",
// };
//
// const app = initializeApp(firebaseConfig);
// export const bialykamienDatabase = getDatabase(app);


export const Flex = styled.div `
  display: flex;
  justify-content: ${props => {
    if (props.left) {return 'flex-start'}
    if (props.center) {return 'center'}
    if (props.right) {return 'flex-end'}
  }};
  flex-direction: ${props => {
    if (props.column) {return 'column'}
    if (props.row) {return 'row'}
  }};
  width: ${props => {
    if (props.onecolumn) {return '100%'}
    if (props.twocolumns) {return '50%'}
    if (props.threecolumns) {return '33%'}
    if (props.fourcolumns) {return '25%'}
  }};
  background-color: transparent;
`