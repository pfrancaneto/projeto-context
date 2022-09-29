import { FaGamepad } from "react-icons/fa";

import { Button } from "./styles";

type MenuButtonProps = {
  handleToogleMenu: () => void;
};

export const MenuButton = ({ handleToogleMenu }: MenuButtonProps) => {
  return (
    <Button onClick={handleToogleMenu}>
      <FaGamepad size={32} color="tomato" />
    </Button>
  );
};
