import { useState, createContext } from "react";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

type MainContextProps = {
  showMenu: boolean;
  handleToogleMenu: () => void;
}

export const MainContext = createContext({} as MainContextProps);

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const handleToogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <MainContext.Provider value={{
      showMenu,
      handleToogleMenu,
    }}>
      <Header />
      <Menu  />
    </MainContext.Provider>
  );
}

export default App;
