import { createContext, ReactNode, useContext, useState } from "react";

type MainContextProviderProps = {
  children: ReactNode;
};

type MainContextProps = {
  showMenu: boolean;
  handleToogleMenu: () => void;
};

export const MainContext = createContext({} as MainContextProps);

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToogleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <MainContext.Provider
      value={{
        showMenu,
        handleToogleMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMenu = () => useContext(MainContext);
