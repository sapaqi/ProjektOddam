import React from "react";
import styled from "styled-components";
import {Colors, Flex} from "./General";
import {Link as LinkScroll} from "react-scroll";

const Stats = styled(Flex) `
  background-color: ${Colors.colorSecondary};
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  justify-content: flex-end;
`
const StatBox = styled(Flex) `
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 60px 50px;
`
const P = styled.p `
  text-align: center;
`

const StatValue = styled.h2 `
  font-size: 5rem;
  padding: 0;
  margin: 0;
`

const HomeThreeColumns = () => {

    return (
        <Stats>
            <StatBox column center threecolumns>
                <StatValue>10</StatValue>
                <h3>Oddanych Worków</h3>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod teunt ut labore et dolore magna aliqua.</P>
            </StatBox>

            <StatBox column threecolumns>
                <StatValue>5</StatValue>
                <h3>Wspartych organizacji</h3>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore non.</P>
            </StatBox>

            <StatBox column threecolumns>
                <StatValue>7</StatValue>
                <h3>Zorganizowanych zbiórek</h3>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dget nullam non.</P>
            </StatBox>
        </Stats>
    )
}

export default HomeThreeColumns;