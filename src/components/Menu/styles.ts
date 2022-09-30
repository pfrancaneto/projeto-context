import styled from "styled-components";

type NavMenu = {
  showMenu: boolean;
};

export const NavMenu = styled.nav<NavMenu>`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: calc(100% - 50px);
  max-width: 280px;
  position: absolute;
  margin-top: 50px; 
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.7s ease-in-out;
  transform: ${({ showMenu }) =>
    showMenu ? "translate(0%, 0%)" : "translate(-100%, 0%)"};

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
      transition: all 0.3s ease-in-out;
      border-right: 2px solid black;

      &:hover {
        border-right: 5px solid tomato;
        background-color: #f1f1f1f1;
        color: #069;
      }
    }
  }
`;
