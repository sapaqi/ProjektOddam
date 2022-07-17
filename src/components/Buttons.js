import styled from "styled-components";
import {Colors} from "./General";

export const ButtonHeader = styled.button`
  text-transform: uppercase;
  font-size: 2rem;
  font-family: "EuroSansPro", sans-serif;
  color: ${Colors.colorDarkGrey};
  font-weight: 300;
  padding: 20px;
  margin: 10px;
  border: 1px solid ${Colors.colorGrey};
  background-color: ${Colors.colorLight};
  
  :hover {
    background-color: ${Colors.colorSecondary};
    cursor: pointer;
  }
`;

export const ButtonTopMenu = styled.button `
  display: flex;
  text-decoration: none;
  border: 1px solid ${Colors.colorSecondary};
  background-color: transparent;
  justify-content: flex-end;
  padding: 10px;
  margin: 5px;
  
  :hover {
      border: 1px solid ${Colors.colorDarkGrey};
      cursor: pointer;
  }
`