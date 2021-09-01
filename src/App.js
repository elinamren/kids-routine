import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header.js";
import IconButton from "./components/Icon-button";
import Info from "./components/Info";
import { useEffect, useState } from "react";
import Star from "./components/Star";
import Settings from "./components/settings/Settings";
import Winner from "./components/Winner";
import morningCards from "./components/morningCards";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  useEffect(() => {
    handleNewCards();
    getLocalKidsRoutine();
    // eslint-disable-next-line
  }, []);

  // MODALS
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isStarOpen, setIsStarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isWinnerOpen, setIsWinnerOpen] = useState(false);

  function handleWinnerModal() {
    setIsWinnerOpen((prevValue) => {
      return !prevValue;
    });
  }
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
    setCheckedCheckboxes([]);
    setIsSettingsOpen((prevValue) => {
      return !prevValue;
    });
  }

  // THEME --- morning/night
  const hour = new Date().getHours();

  const [isMorning, setIsMorning] = useState(false);

  useEffect(() => {
    if (hour < 15) {
      setIsMorning(true);
    } else {
      setIsMorning(false);
    }
  }, [hour]);

  // NAME
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }
  function handleName() {
    setName(inputValue);
    setInputValue("");
  }

  // FLIP CARDS & COUNT STARS
  const [flippedCards, setFlippedCards] = useState(0);
  const [earnedStars, setEarnedStars] = useState([]);

  useEffect(() => {
    if (flippedCards === 6) {
      console.log("Winner");
      setTimeout(() => {
        setIsWinnerOpen(true);
      }, 1700);
    }
  }, [flippedCards]);
  function countStars(event) {
    if (!event.target.classList.contains("flipped")) {
      setEarnedStars((prevValue) => [...prevValue, prevValue.length + 1]);
      event.target.classList.add("flipped");
      setFlippedCards((prevValue) => prevValue + 1);
      console.log(flippedCards);
    }
  }

  // DELETE ALL STARS
  function deleteStars() {
    setEarnedStars([]);
  }

  function getRandomNumber(number) {
    return Math.floor(Math.random() * number + 1);
  }

  // Pick tasks  settings
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([
    "2",
    "3",
    "4",
    "6",
    "9",
    "10",
  ]);

  function handleCheckbox(event) {
    if (event.target.checked) {
      checkedCheckboxes.push(event.target.id);
    } else if (!event.target.checked) {
      const newCardsArray = checkedCheckboxes.splice(
        checkedCheckboxes.indexOf(event.target.id),
        1
      );
      setCheckedCheckboxes(newCardsArray);
    }
    console.log(checkedCheckboxes);
  }

  const [newMorningCards, setNewMorningCards] = useState([]);

  function handleNewCards() {
    if (checkedCheckboxes.length > 6 || checkedCheckboxes.length < 6) {
      alert("Du får välja 6 olika uppgifter");
    } else if (checkedCheckboxes.length === 6) {
      const newMorningTasks = morningCards.filter((card) =>
        checkedCheckboxes.includes(card.id)
      );
      setNewMorningCards(newMorningTasks);
    }
    console.log(newMorningCards);
  }

  function handleSave() {
    handleNewCards();
    if (checkedCheckboxes.length === 6) {
      setIsSettingsOpen(false);
    }
  }
  // -------------------

  //SAVE TO LOCAL STORAGE

  const nameStorage = "KidsRoutineNameLocalStorage";
  const cardsStorage = "KidsRoutineCardsLocalStorage";
  const starsStorage = "KidsRoutineStarsLocalStorage";

  const saveLocalItems = () => {
    localStorage.setItem(nameStorage, JSON.stringify(name));
    localStorage.setItem(cardsStorage, JSON.stringify(newMorningCards));
    localStorage.setItem(starsStorage, JSON.stringify(earnedStars));
  };

  const getLocalKidsRoutine = () => {
    if (localStorage.getItem(nameStorage) === null) {
      localStorage.setItem(nameStorage, JSON.stringify(""));
    } else {
      let NameFromLocal = JSON.parse(localStorage.getItem(nameStorage));
      setName(NameFromLocal);
    }
    if (localStorage.getItem(starsStorage) === null) {
      localStorage.setItem(starsStorage, JSON.stringify([]));
    } else {
      let StarsFromLocal = JSON.parse(localStorage.getItem(starsStorage));
      setEarnedStars(StarsFromLocal);
    }
    if (localStorage.getItem(cardsStorage) === null) {
      localStorage.setItem(cardsStorage, JSON.stringify(newMorningCards));
    } else {
      let CardsFromLocal = JSON.parse(localStorage.getItem(cardsStorage));
      setNewMorningCards(CardsFromLocal);
    }
  };

  useEffect(() => {
    saveLocalItems();
    // eslint-disable-next-line
  }, [name, earnedStars, newMorningCards]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: isMorning
          ? "linear-gradient(rgb(255, 209, 216) 50%, rgb(255, 204, 110))"
          : "linear-gradient(rgb(13, 12, 79) 50%, rgb(81, 145, 219))",
      }}
    >
      <Header name={name} isMorning={isMorning} />
      <Cards onClick={countStars} newMorningCards={newMorningCards} />
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
      />
      <IconButton
        src="images/star.png"
        alt="star"
        id="star-button"
        onClick={handleStarsModal}
      />
      <Info
        onClick={handleInfoModal}
        className={isInfoOpen ? "fade-in" : "fade-out"}
      />
      <Star
        onClick={handleStarsModal}
        className={isStarOpen ? "fade-in" : "fade-out"}
        name={name}
        star={earnedStars.length}
        starDisplay={earnedStars.map((star) => (
          <img
            className="star-blink"
            src="images/star.png"
            alt="star"
            width="50"
            height="50"
            key={star}
            style={{
              position: "absolute",
              top: isMobile ? getRandomNumber(300) : getRandomNumber(290),
              left: isMobile ? getRandomNumber(230) : getRandomNumber(870),
              animationDelay: getRandomNumber(5) + "s",
            }}
          />
        ))}
      />
      <Settings
        handleSettingsModal={handleSettingsModal}
        className={isSettingsOpen ? "fade-in" : "fade-out"}
        onChange={handleInputValue}
        handleSave={handleSave}
        deleteStars={deleteStars}
        handleCheckbox={handleCheckbox}
        value={name}
        saveName={handleName}
        stars={earnedStars.length}
        checkedCheckboxes={checkedCheckboxes}
      />
      <Winner
        name={name}
        star={earnedStars.length}
        handleWinnerModal={handleWinnerModal}
        className={isWinnerOpen ? "fade-in" : "fade-out"}
        isMorning={isMorning}
      />
    </div>
  );
}

export default App;
