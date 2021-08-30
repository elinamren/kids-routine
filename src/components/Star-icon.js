const StarIcon = (props) => {
  return (
    <img
      src="images/star.png"
      alt="star"
      width="50"
      height="50"
      className="star-blink"
      style={props.style}
    />
  );
};

export default StarIcon;
