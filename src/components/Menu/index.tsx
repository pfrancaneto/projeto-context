import { NavMenu } from "./styles";

type MenuProps = {
  showMenu: boolean;
}

export const Menu = ({ showMenu }: MenuProps) => {
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
