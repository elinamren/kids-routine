import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header.js";
import IconButton from "./components/Icon-button";
import Info from "./components/Info";
import { useState } from "react";
import Star from "./components/Star";
import Settings from "./components/Settings";

function App() {
  const positionY = Math.floor(Math.random() * 970 + 1);
  const positionX = Math.floor(Math.random() * 336 + 1);

  const [earnedStars, setEarnedStars] = useState([1]);

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isStarOpen, setIsStarOpen] = useState(false);

  // NAME
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  function handleName() {
    setName(inputValue);
  }

  // --------------------

  // Function that can work for all classes, need to figure out the id thing though
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

  //--------------------------------------

  function handleInfo(event) {
    setIsInfoOpen((prevValue) => {
      return !prevValue;
    });
  }
  function handleStarsModal() {
    setIsStarOpen((prevValue) => {
      return !prevValue;
    });
  }

  function handleStars() {
    console.log("pling");
    setEarnedStars((prevValue) => [...prevValue, prevValue.length + 1]);
    console.log(earnedStars);
  }

  return (
    <div className="App">
      <Header name={name} />
      <Cards onClick={handleStars} />
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
        onClick={handleStarsModal}
      />
      <Info
        onClick={handleInfo}
        style={{ display: isInfoOpen ? "block" : "none" }}
      />
      <Star
        onClick={handleStarsModal}
        style={{ display: isStarOpen ? "block" : "none" }}
        name={name}
        star={earnedStars.length}
        starDisplay={earnedStars.map((star) => (
          <img
            src="/images/star.png"
            alt=""
            width="50"
            height="50"
            key={star}
          />
        ))}
      />
      <Settings
        onClick={handleModal}
        style={{ display: isOpen.settings ? "block" : "none" }}
        onChange={handleInputValue}
        handleName={handleName}
      />
    </div>
  );
}

export default App;
