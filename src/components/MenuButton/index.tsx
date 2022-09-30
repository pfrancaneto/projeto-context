import { FaGamepad } from "react-icons/fa";

import { Button } from "./styles";

import { MainContext } from "../../App";

export const MenuButton = () => {
  return (
    <MainContext.Consumer>
      {({ handleToogleMenu }) => (
        <Button onClick={handleToogleMenu}>
          <FaGamepad size={32} color="tomato" />
        </Button>
      )}
    </MainContext.Consumer>
  );
};
