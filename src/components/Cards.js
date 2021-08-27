import Card from "./Card.js";
import cardsMorning from "./cards-morning.js";

const Cards = (props) => {
  return (
    <div className="cards-container">
      {cardsMorning.map((card) => {
        return (
          <Card
            onClick={props.onClick}
            id={card.id}
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
