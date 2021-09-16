import StarIcon from "./Star-icon";

const Winner = (props) => {
  return (
    <div className={`modal-container ${props.className}`}>
      <h3>Bra jobbat {props.name}!</h3>
      <StarIcon />
      <StarIcon style={{ animationDelay: "0.2s" }} />
      <StarIcon style={{ animationDelay: "1.4s" }} />
      <StarIcon />
      <StarIcon style={{ animationDelay: "0.5s" }} />
      <StarIcon style={{ animationDelay: "1s" }} />
      <p>
        Grattis till 6 nya stjärnor. Du har hittils samlat ihop {props.star}{" "}
        stjärnor. Du har klarat alla uppgifter som finns just nu, kom tillbaka
        igen i {props.isMorning ? "kväll" : "morgon"}.
      </p>
    </div>
  );
};

export default Winner;
