import { useEffect, useState } from "react";
import Card from "./Card.js";

const Cards = (props) => {
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
      {cards.map((card) => {
        return (
          <Card
            onClick={props.onClick}
            key={card.id}
            alt={card.title}
            src={card.image}
            title={card.title}
          />
        );
      })}
    </div>
  );
};

export default Cards;
