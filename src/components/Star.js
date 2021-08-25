const Star = (props) => {
  return (
    <div className="container" style={props.style}>
      <h2>Stjärnor</h2>
      <p>
        Bra jobbat {props.name}, du har samlat {props.star} stjärnor.
      </p>
      <div className="star-board">{props.starDisplay}</div>
      <br />
      <button onClick={props.onClick}>Tillbaka</button>
    </div>
  );
};

export default Star;
