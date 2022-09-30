import { useMenu } from "../../context/MainContext";
import { NavMenu } from "./styles";

export const Menu = () => {
  const { showMenu } = useMenu();
  return (
    <NavMenu showMenu={showMenu}>
      <ul>
        <li>Playstation</li>
        <li>Xbox</li>
        <li>Nitendo</li>
        <li>Sega</li>
      </ul>
    </NavMenu>
  );
};
