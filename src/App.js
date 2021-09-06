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
import nightCards from "./components/nightCards";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  // Get the saved cards when site render
  useEffect(() => {
    handleNewMorningCards();
    handleNewNightCards();
    getLocalKidsRoutine();
    // eslint-disable-next-line
  }, []);

  // SOUND
  const winnerAudio = new Audio("sound/winner.mp3");
  const starAudio = new Audio("sound/star.mp3");

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
    setCheckedCheckboxesMorning([]);
    setCheckedCheckboxesNight([]);
    setIsSettingsOpen((prevValue) => {
      return !prevValue;
    });
  }

  // THEME --- morning/night
  const [isMorning, setIsMorning] = useState(false);

  const hour = new Date().getHours();
  useEffect(() => {
    if (hour < 15) {
      setIsMorning(true);
    } else {
      setIsMorning(false);
    }
  }, [hour]);

  useEffect(() => {
    setIsWinnerOpen(false);
  }, [isMorning]);

  // NAME
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }
  function handleName() {
    const nameLower = inputValue.toLowerCase();
    const nameFirstUpper =
      nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
    setName(nameFirstUpper);
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
        winnerAudio.play();
      }, 1700);
    }
    // eslint-disable-next-line
  }, [flippedCards]);

  function countStars(event) {
    if (!event.target.classList.contains("flipped")) {
      setEarnedStars((prevValue) => [...prevValue, prevValue.length + 1]);
      event.target.classList.add("flipped");
      setFlippedCards((prevValue) => prevValue + 1);
      console.log(flippedCards);
      starAudio.play();
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
  const [checkedCheckboxesMorning, setCheckedCheckboxesMorning] = useState([
    "2",
    "3",
    "4",
    "6",
    "9",
    "10",
  ]);
  const [checkedCheckboxesNight, setCheckedCheckboxesNight] = useState([
    "11",
    "13",
    "14",
    "18",
    "19",
    "20",
  ]);

  const [newMorningCards, setNewMorningCards] = useState([]);
  const [newNightCards, setNewNightCards] = useState([]);

  function handleCheckboxMorning(event) {
    if (event.target.checked) {
      checkedCheckboxesMorning.push(event.target.id);
    } else if (!event.target.checked) {
      const newCardsArray = checkedCheckboxesMorning.splice(
        checkedCheckboxesMorning.indexOf(event.target.id),
        1
      );
      setCheckedCheckboxesMorning(newCardsArray);
    }
    console.log(checkedCheckboxesMorning);
  }
  function handleCheckboxNight(event) {
    if (event.target.checked) {
      checkedCheckboxesNight.push(event.target.id);
    } else if (!event.target.checked) {
      const newCardsArray = checkedCheckboxesNight.splice(
        checkedCheckboxesNight.indexOf(event.target.id),
        1
      );
      setCheckedCheckboxesNight(newCardsArray);
    }
    console.log(checkedCheckboxesNight);
  }

  function handleNewMorningCards() {
    if (
      checkedCheckboxesMorning.length > 6 ||
      checkedCheckboxesMorning.length < 6
    ) {
      alert("Du får välja 6 olika uppgifter");
    } else if (checkedCheckboxesMorning.length === 6) {
      const newMorningTasks = morningCards.filter((card) =>
        checkedCheckboxesMorning.includes(card.id)
      );
      setNewMorningCards(newMorningTasks);
    }
    console.log(newMorningCards);
  }

  function handleNewNightCards() {
    if (
      checkedCheckboxesNight.length > 6 ||
      checkedCheckboxesNight.length < 6
    ) {
      alert("Du får välja 6 olika uppgifter");
    } else if (checkedCheckboxesNight.length === 6) {
      const newNightTasks = nightCards.filter((card) =>
        checkedCheckboxesNight.includes(card.id)
      );
      setNewNightCards(newNightTasks);
    }
    console.log(newNightCards);
  }
  // function handleSave() {
  //   handleNewMorningCards();
  //   if (checkedCheckboxesMorning.length === 6) {
  //     setIsSettingsOpen(false);
  //   }
  // }
  // -------------------

  //SAVE TO LOCAL STORAGE

  const nameStorage = "KidsRoutineNameLocalStorage";
  const starsStorage = "KidsRoutineStarsLocalStorage";
  const morningCardsStorage = "KidsRoutineMorningCardsLocalStorage";
  const nightCardsStorage = "KidsRoutineNightCardsLocalStorage";

  const saveLocalItems = () => {
    localStorage.setItem(nameStorage, JSON.stringify(name));
    localStorage.setItem(starsStorage, JSON.stringify(earnedStars));
    localStorage.setItem(morningCardsStorage, JSON.stringify(newMorningCards));
    localStorage.setItem(nightCardsStorage, JSON.stringify(newNightCards));
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
    if (localStorage.getItem(morningCardsStorage) === null) {
      localStorage.setItem(
        morningCardsStorage,
        JSON.stringify(newMorningCards)
      );
    } else {
      let CardsFromLocal = JSON.parse(
        localStorage.getItem(morningCardsStorage)
      );
      setNewMorningCards(CardsFromLocal);
    }
    if (localStorage.getItem(nightCardsStorage) === null) {
      localStorage.setItem(nightCardsStorage, JSON.stringify(newNightCards));
    } else {
      let CardsFromLocal = JSON.parse(localStorage.getItem(nightCardsStorage));
      setNewNightCards(CardsFromLocal);
    }
  };

  useEffect(() => {
    saveLocalItems();
    // eslint-disable-next-line
  }, [name, earnedStars, newMorningCards, newNightCards]);

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
      <Cards
        onClick={countStars}
        newMorningCards={newMorningCards}
        newNightCards={newNightCards}
        isMorning={isMorning}
      />
      <IconButton
        src={isMorning ? "images/info-black.png" : "images/info-white.png"}
        alt="info"
        id="info-button"
        onClick={handleInfoModal}
      />
      <IconButton
        src={
          isMorning ? "images/settings-black.png" : "images/settings-white.png"
        }
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
        // handleSave={handleSave}
        deleteStars={deleteStars}
        saveMorning={handleNewMorningCards}
        handleCheckboxMorning={handleCheckboxMorning}
        saveNight={handleNewNightCards}
        handleCheckboxNight={handleCheckboxNight}
        value={name}
        saveName={handleName}
        stars={earnedStars.length}
        // checkedCheckboxes={checkedCheckboxes}
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
