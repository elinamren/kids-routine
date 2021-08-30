const Card = (props) => {
  const superlativ = [
    "Bra!",
    "Fantastiskt",
    "Heja!",
    "Wow",
    "Snyggt",
    "Du är bäst",
    "Fint!",
    "Toppen!",
  ];

  const number = Math.floor(Math.random() * superlativ.length);
  const randomWord = superlativ[number];

  return (
    <div className="card" onClick={props.onClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={props.src} alt={props.alt} className="icon" />
          <h3>{props.title}</h3>
        </div>
        <div className="card-back">
          <img src="images/star.png" alt="star" className="icon" />
          <h3>{randomWord}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
