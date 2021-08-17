import cardsMorning from "./cards-morning.js";

const Cards = () => {
  return (
    <div className="cards-container">
      {cardsMorning.map((card) => {
        return (
          <div key={card.id} className="cards">
            <img src={card.image} alt={card.title} width="150" height="150" />
            <h3>{card.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
