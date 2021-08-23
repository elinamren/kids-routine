import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header.js";
import IconButton from "./components/Icon-button";
import Info from "./components/Info";
import { useState } from "react";
import Star from "./components/Star";

function App() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isStarOpen, setIsStarOpen] = useState(false);
  function handleInfo() {
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
    </div>
  );
}

export default App;
