import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header.js";
import IconButton from "./components/Icon-button";
import Info from "./components/Info";
import { useState } from "react";
import Star from "./components/Star";
import Settings from "./components/Settings";

function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isStarOpen, setIsStarOpen] = useState(false);

  const [isOpen, setIsOpen] = useState({
    info: false,
    star: false,
    settings: false,
  });

  function handleModal(event) {
    const classes = event.target.className;
    const words = classes.split(" ");
    const id = words[1];

    setIsOpen((prevValue) => {
      return {
        ...prevValue,
        [id]: !prevValue[id],
      };
    });
  }

  function handleInfo(event) {
    setIsInfoOpen((prevValue) => {
      return !prevValue;
    });
  }
  function handleStars() {
    setIsStarOpen((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div className="App">
      <Header />
      <Cards />
      <IconButton
        src="images/info.png"
        alt="info"
        id="info-button"
        onClick={handleInfo}
      />
      <IconButton
        src="images/settings.png"
        alt="settings"
        id="settings-button"
        onClick={handleModal}
        className="settings"
      />
      <IconButton
        src="images/star.png"
        alt="star"
        id="star-button"
        onClick={handleStars}
      />
      <Info
        onClick={handleInfo}
        style={{ display: isInfoOpen ? "block" : "none" }}
      />
      <Star
        onClick={handleStars}
        style={{ display: isStarOpen ? "block" : "none" }}
      />
      <Settings
        onClick={handleModal}
        style={{ display: isOpen.settings ? "block" : "none" }}
      />
    </div>
  );
}

export default App;
