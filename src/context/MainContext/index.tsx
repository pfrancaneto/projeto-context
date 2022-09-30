import { createContext, ReactNode, useContext, useState } from "react";

type MainContextProviderProps = {
  children: ReactNode;
};

type MainContextProps = {
  showMenu: boolean;
  handleToggleMenu: () => void;
};

export const MainContext = createContext({} as MainContextProps);

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <MainContext.Provider
      value={{
        showMenu,
        handleToggleMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMenu = () => useContext(MainContext);
