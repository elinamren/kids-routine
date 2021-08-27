const Card = (props) => {
  return (
    <div key={props.id} className="card" onClick={props.onClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={props.src} alt={props.alt} className="icon" />
          <h3>{props.title}</h3>
        </div>
        <div className="card-back">
          <img src="/images/star.png" alt="star" className="icon" />
          <h3>Bra!</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
