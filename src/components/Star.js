const Star = (props) => {
  const name = "Molly";
  let earnedStars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14];

  return (
    <div className="star container" style={props.style}>
      <h2>Stjärnor</h2>
      <p>
        Bra jobbat {name}, du har samlat {earnedStars.length + 1} stjärnor.
      </p>
      <div>
        {earnedStars.map((star) => (
          <img
            src="/images/star.png"
            alt=""
            width="50"
            height="50"
            key={star}
          />
        ))}
      </div>
      <br />
      <button onClick={props.onClick}>Tillbaka</button>
    </div>
  );
};

export default Star;
