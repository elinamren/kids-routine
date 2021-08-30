import Card from "./Card.js";

const Cards = (props) => {
  return (
    <div className="cards-container">
      {props.newMorningCards.map((card) => {
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
