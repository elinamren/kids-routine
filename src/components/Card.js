const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={props.src} alt={props.alt} className="icon" />
          <h2>{props.title}</h2>
        </div>
        <div className="card-back">
          <img src="images/star.png" alt="star" className="icon" />
          <h2>{props.randomWord}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
