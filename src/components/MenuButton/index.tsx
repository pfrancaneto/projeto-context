import { FaGamepad } from "react-icons/fa";

import { Button } from "./styles";


export const MenuButton = () => {
  return (
    <Button>
      <FaGamepad size={32} color="tomato" />
    </Button>
  );
};
