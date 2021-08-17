const IconButton = (props) => {
  return (
    <button className="icon-button" id={props.id}>
      <img src={props.src} alt={props.alt} width="65" height="65" />
    </button>
  );
};

export default IconButton;
