import { useState } from "react";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <Header handleToogleMenu={handleToogleMenu} />
      <Menu showMenu={showMenu} />
    </div>
  );
}

export default App;
