import { useEffect, useState } from "react";
import StarIcon from "./Star-icon";

const Winner = (props) => {
  const hour = new Date().getHours();

  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (hour > 12) {
      setTheme("morgon");
    } else {
      setTheme("kväll");
    }
  }, [hour]);

  return (
    <div className="container" style={props.style}>
      <h2>Bra jobbat {props.name}!</h2>
      <StarIcon />
      <StarIcon style={{ animationDelay: "0.2s" }} />
      <StarIcon style={{ animationDelay: "1.4s" }} />
      <StarIcon />
      <StarIcon style={{ animationDelay: "0.5s" }} />
      <StarIcon style={{ animationDelay: "1s" }} />
      <p>
        Du Har hittils samlat ihop {props.star} stjärnor. Du har klarat alla
        uppgifter som finns just nu. Kom tillbaka igen i {theme}.
      </p>
      <button onClick={props.handleWinnerModal}>TEST MODE</button>
    </div>
  );
};

export default Winner;
