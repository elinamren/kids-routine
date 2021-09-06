import { useEffect, useState } from "react";
import Card from "./Card.js";

const Cards = (props) => {
  const superlativ = [
    "Bra!",
    "Fantastiskt",
    "Heja!",
    "Snyggt",
    "Du är bäst",
    "Toppen!",
  ];

  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (props.isMorning) {
      setCards(props.newMorningCards);
    } else {
      setCards(props.newNightCards);
    }
  }, [props.isMorning, props.newNightCards, props.newMorningCards]);
  return (
    <div className="cards-container">
      {cards.map((card, i) => {
        return (
          <Card
            onClick={props.onClick}
            key={card.id}
            alt={card.title}
            src={card.image}
            title={card.title}
            randomWord={superlativ[i]}
          />
        );
      })}
    </div>
  );
};

export default Cards;
