import styled from "styled-components";

export const NavMenu = styled.nav`
  background-color: #000;
  width: 100%;
  height: 100%;
  max-width: 380px;
  position: absolute;
  padding-top: 60px;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translate(-100%, 0%);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      color: #fff;
      font-size: 20px;
      padding: 10px 25px;
      cursor: pointer;
      margin: 5px 0;
      transition: all .30s ease-in-out;
      border-right: 2px solid black;

      &:hover {
        border-right: 5px solid tomato;
        background-color: #171717;
      }
    }
  }
`;