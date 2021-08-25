import { useEffect, useState } from "react";

const Winner = (props) => {
  const hour = new Date().getHours();

  const [theme, setTheme] = useState("");
  const [isWinnerOpen, setIsWinnerOpen] = useState(false);

  function handleWinnerModal() {
    setIsWinnerOpen((prevValue) => {
      return !prevValue;
    });
  }

  useEffect(() => {
    if (hour > 12) {
      setTheme("morgon");
    } else {
      setTheme("kväll");
    }
  });

  return (
    <div
      className="container"
      style={{ display: isWinnerOpen ? "block" : "none" }}
    >
      <h2>{props.name}, bra jobbat!</h2>
      <img src="images/star.png" alt="star" width="50" height="50" />
      <img src="images/star.png" alt="star" width="50" height="50" />
      <img src="images/star.png" alt="star" width="50" height="50" />
      <img src="images/star.png" alt="star" width="50" height="50" />
      <img src="images/star.png" alt="star" width="50" height="50" />
      <img src="images/star.png" alt="star" width="50" height="50" />
      <p>
        Du Har hittils samlat ihop {props.star} stjärnor. Du har klarat alla
        uppgifter som finns just nu. Kom tillbaka igen i {theme}.
      </p>
      <button onClick={handleWinnerModal}>TEST MODE</button>
    </div>
  );
};

export default Winner;
