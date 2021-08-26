import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header.js";
import IconButton from "./components/Icon-button";
import Info from "./components/Info";
import { useEffect, useState } from "react";
import Star from "./components/Star";
import Settings from "./components/Settings";
import Winner from "./components/Winner";

function App() {
  function getRandom(number) {
    return Math.floor(Math.random() * number + 1);
  }

  const [earnedStars, setEarnedStars] = useState([]);

  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isStarOpen, setIsStarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isWinnerOpen, setIsWinnerOpen] = useState(false);

  function handleWinnerModal() {
    setIsWinnerOpen((prevValue) => {
      return !prevValue;
    });
  }

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
  // const [isOpen, setIsOpen] = useState({
  //   info: false,
  //   star: false,
  //   settings: false,
  // });

  // function handleModal(event) {
  //   const classes = event.target.className;
  //   const words = classes.split(" ");
  //   const id = words[1];

  //   setIsOpen((prevValue) => {
  //     return {
  //       ...prevValue,
  //       [id]: !prevValue[id],
  //     };
  //   });
  // }

  //--------------------------------------

  function handleInfoModal() {
    setIsInfoOpen((prevValue) => {
      return !prevValue;
    });
  }
  function handleStarsModal() {
    setIsStarOpen((prevValue) => {
      return !prevValue;
    });
  }
  function handleSettingsModal() {
    setIsSettingsOpen((prevValue) => {
      return !prevValue;
    });
  }

  const [flippedCards, setFlippedCards] = useState(0);
  useEffect(() => {
    if (flippedCards === 6) {
      console.log("Winner");
      setIsWinnerOpen(true);
    }
  }, [flippedCards]);
  function countStars(event) {
    if (event.target.classList.contains("flipped")) {
      console.log("flippad, do nothing");
    } else {
      setEarnedStars((prevValue) => [...prevValue, prevValue.length + 1]);
      event.target.classList.add("flipped");
      setFlippedCards((prevValue) => prevValue + 1);
      console.log(flippedCards);
    }
  }

  function deleteStars() {
    setEarnedStars([]);
  }

  return (
    <div className="App">
      <Header name={name} />
      <Cards onClick={countStars} />
      <IconButton
        src="images/info.png"
        alt="info"
        id="info-button"
        onClick={handleInfoModal}
      />
      <IconButton
        src="images/settings.png"
        alt="settings"
        id="settings-button"
        onClick={handleSettingsModal}
        className="settings"
      />
      <IconButton
        src="images/star.png"
        alt="star"
        id="star-button"
        onClick={handleStarsModal}
      />
      <Info
        onClick={handleInfoModal}
        style={{ display: isInfoOpen ? "block" : "none" }}
      />
      <Star
        onClick={handleStarsModal}
        style={{ display: isStarOpen ? "block" : "none" }}
        name={name}
        star={earnedStars.length}
        starDisplay={earnedStars.map((star) => (
          <img
            className="star-blink"
            src="/images/star.png"
            alt="star"
            width="50"
            height="50"
            key={star}
            style={{
              position: "absolute",
              top: getRandom(290),
              left: getRandom(870),
            }}
          />
        ))}
      />
      <Settings
        onClick={handleSettingsModal}
        style={{ display: isSettingsOpen ? "block" : "none" }}
        onChange={handleInputValue}
        handleName={handleName}
        deleteStars={deleteStars}
      />
      <Winner
        name={name}
        star={earnedStars.length}
        style={{ display: isWinnerOpen ? "block" : "none" }}
        onClick={handleWinnerModal}
      />
    </div>
  );
}

export default App;
