const IconButton = (props) => {
  return (
    <button
      className={`icon-button ${props.className}`}
      id={props.id}
      onClick={props.onClick}
    >
      <img src={props.src} alt={props.alt} width="65" height="65" />
    </button>
  );
};

export default IconButton;
