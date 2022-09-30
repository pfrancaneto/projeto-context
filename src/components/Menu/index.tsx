import { NavMenu } from "./styles";

import { MainContext } from "../../App";

export const Menu = () => {
  return (
    <MainContext.Consumer>
      {({ showMenu }) => (
        <NavMenu showMenu={showMenu}>
          <ul>
            <li>Playstation</li>
            <li>Xbox</li>
            <li>Nitendo</li>
            <li>Sega</li>
          </ul>
        </NavMenu>
      )}
    </MainContext.Consumer>
  );
};
