import { Container } from "./styles";

import { MenuButton } from "../MenuButton";

import { GlobalStyles } from "../../globalStyles";

export const Header = () => {
  return (
    <Container>
      <div className="wrapper">
        <strong>Play the game</strong>
        <MenuButton />
      </div>

      <GlobalStyles />
    </Container>
  );
};
