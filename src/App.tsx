import { useState, createContext } from "react";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { MainContextProvider } from "./context/MainContext";

function App() {
  return (
    <MainContextProvider>
      <Header />
      <Menu />
    </MainContextProvider>
  );
}

export default App;
