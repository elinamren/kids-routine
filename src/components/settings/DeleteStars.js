const DeleteStars = (props) => {
  return (
    <div className="settings-container flexbox">
      <p>
        Du har {props.stars} insamlade stjärnor. <br />
        Vill du börja om från noll?
      </p>
      <button className="small-button" onClick={props.deleteStars}>
        Ja
      </button>
    </div>
  );
};

export default DeleteStars;
