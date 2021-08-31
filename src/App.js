import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header.js";
import IconButton from "./components/Icon-button";
import Info from "./components/Info";
import { useEffect, useState } from "react";
import Star from "./components/Star";
import Settings from "./components/Settings";
import Winner from "./components/Winner";
import morningCards from "./components/morningCards";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  useEffect(() => {
    handleNewCards();
    getLocalKidsRoutine();
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

  // NAME
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  function handleName() {
    setName(inputValue);
  }

  // FLIP CARDS & COUNT STARS
  const [flippedCards, setFlippedCards] = useState(0);
  const [earnedStars, setEarnedStars] = useState([]);

  useEffect(() => {
    if (flippedCards === 6) {
      console.log("Winner");
      setIsWinnerOpen(true);
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
    "Gå på toa",
    "Klä på dig",
    "Ät frukost",
    "Borsta tänder",
    "Packa väskan",
    "Klä på ytterkläder",
  ]);

  function handleCheckbox(event) {
    if (event.target.checked) {
      checkedCheckboxes.push(event.target.value);
    } else if (!event.target.checked) {
      const newCardsArray = checkedCheckboxes.splice(
        checkedCheckboxes.indexOf(event.target.value),
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
        checkedCheckboxes.includes(card.title)
      );
      setNewMorningCards(newMorningTasks);
    }
    console.log(newMorningCards);
  }

  // -------------------

  function handleSave() {
    handleName();
    handleNewCards();
  }
  //variabel KidsRoutineNameLocalStorage
  //SAVE TO LOCAL STORAGE
  const saveLocalItems = () => {
    localStorage.setItem("KidsRoutineNameLocalStorage", JSON.stringify(name));
    localStorage.setItem(
      "KidsRoutineCardsLocalStorage",
      JSON.stringify(newMorningCards)
    );
    localStorage.setItem(
      "KidsRoutineStarsLocalStorage",
      JSON.stringify(earnedStars)
    );
  };

  const getLocalKidsRoutine = () => {
    if (localStorage.getItem("KidsRoutineNameLocalStorage") === null) {
      localStorage.setItem("KidsRoutineNameLocalStorage", JSON.stringify(""));
    } else {
      let NameFromLocal = JSON.parse(
        localStorage.getItem("KidsRoutineNameLocalStorage")
      );
      setName(NameFromLocal);
    }
    if (localStorage.getItem("KidsRoutineStarsLocalStorage") === null) {
      localStorage.setItem("KidsRoutineStarsLocalStorage", JSON.stringify([]));
    } else {
      let StarsFromLocal = JSON.parse(
        localStorage.getItem("KidsRoutineStarsLocalStorage")
      );
      setEarnedStars(StarsFromLocal);
    }
    if (localStorage.getItem("KidsRoutineCardsLocalStorage") === null) {
      const defaultCards = morningCards.filter((card) =>
        checkedCheckboxes.includes(card.title)
      );
      localStorage.setItem(
        "KidsRoutineCardsLocalStorage",
        JSON.stringify(defaultCards)
      );
    } else {
      let CardsFromLocal = JSON.parse(
        localStorage.getItem("KidsRoutineCardsLocalStorage")
      );
      setNewMorningCards(CardsFromLocal);
    }
  };

  useEffect(() => {
    saveLocalItems();
  }, [name, earnedStars, newMorningCards]);

  return (
    <div className="App">
      <Header name={name} />
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
            src="images/star.png"
            alt="star"
            width="50"
            height="50"
            key={star}
            style={{
              position: "absolute",
              top: isMobile ? getRandomNumber(290) : getRandomNumber(290),
              left: isMobile ? getRandomNumber(230) : getRandomNumber(870),
              animationDelay: getRandomNumber(5) + "s",
            }}
          />
        ))}
      />
      <Settings
        handleSettingsModal={handleSettingsModal}
        style={{ display: isSettingsOpen ? "block" : "none" }}
        onChange={handleInputValue}
        handleSave={handleSave}
        deleteStars={deleteStars}
        handleCheckbox={handleCheckbox}
        value={name}
        stars={earnedStars.length}
        setCheckedCheckboxes={checkedCheckboxes}
      />
      <Winner
        name={name}
        star={earnedStars.length}
        style={{ display: isWinnerOpen ? "block" : "none" }}
        handleWinnerModal={handleWinnerModal}
      />
    </div>
  );
}

export default App;
