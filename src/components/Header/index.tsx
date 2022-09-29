import { Container } from "./styles";

import { MenuButton } from "../MenuButton";

import { GlobalStyles } from "../../globalStyles";

type HeaderProps = {
  handleToogleMenu: () => void;
};

export const Header = ({ handleToogleMenu }: HeaderProps) => {
  return (
    <Container>
      <div className="wrapper">
        <strong>Play the game</strong>
        <MenuButton handleToogleMenu={handleToogleMenu} />
      </div>

      <GlobalStyles />
    </Container>
  );
};
