const Star = (props) => {
  return (
    <div className={`modal-container ${props.className}`}>
      <h2>Stjärnor</h2>
      <p>
        Bra jobbat {props.name}, du har samlat {props.star} stjärnor.
      </p>
      <div className="star-board">{props.starDisplay}</div>
      <br />
      <div className="return-button-container">
        <button onClick={props.onClick}>Tillbaka</button>
      </div>
    </div>
  );
};

export default Star;
