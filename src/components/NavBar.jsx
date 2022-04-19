import React from "react";
import styledComponents from "styled-components";
export default function NavBar() {
  return (
    <>
      <NavWrapper>
        <NavContainer>
          <NavBrand>Text Utils</NavBrand>
        </NavContainer>
      </NavWrapper>
    </>
  );
}

const NavWrapper = styledComponents.div`
  background-color: #39719b;
`;
const NavContainer = styledComponents.div`
  max-width: 60%;
  margin: auto;
  padding: 1rem;
`;
const NavBrand = styledComponents.h1`
  color: white;
  font-size: 1.7rem;
  text-align: center;
`;
