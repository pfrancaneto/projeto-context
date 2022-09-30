import { FaGamepad } from "react-icons/fa";
import { useMenu } from "../../context/MainContext";

import { Button } from "./styles";

export const MenuButton = () => {
  const { handleToogleMenu } = useMenu();

  return (
    <Button onClick={handleToogleMenu}>
      <FaGamepad size={32} color="tomato" />
    </Button>
  );
};
