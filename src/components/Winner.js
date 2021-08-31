import StarIcon from "./Star-icon";

const Winner = (props) => {
  return (
    <div className={`container ${props.className}`}>
      <h2>Bra jobbat {props.name}!</h2>
      <StarIcon />
      <StarIcon style={{ animationDelay: "0.2s" }} />
      <StarIcon style={{ animationDelay: "1.4s" }} />
      <StarIcon />
      <StarIcon style={{ animationDelay: "0.5s" }} />
      <StarIcon style={{ animationDelay: "1s" }} />
      <p>
        Du Har hittils samlat ihop {props.star} stjärnor. Du har klarat alla
        uppgifter som finns just nu. Kom tillbaka igen i{" "}
        {props.isMorning ? "kväll" : "morgon"}.
      </p>
      <button onClick={props.handleWinnerModal}>TEST MODE</button>
    </div>
  );
};

export default Winner;
