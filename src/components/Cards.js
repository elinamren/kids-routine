import cardsMorning from "./cards-morning.js";

const Cards = (props) => {
  return (
    <div className="cards-container">
      {cardsMorning.map((card) => {
        return (
          <div key={card.id} className="card" onClick={props.onClick}>
            <div class="card-inner">
              <div class="card-front">
                <img src={card.image} alt={card.title} className="icon" />
                <h3>{card.title}</h3>
              </div>
              <div class="card-back">
                <img src="/images/star.png" alt="star" className="icon" />
                <h3>Bra!</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
