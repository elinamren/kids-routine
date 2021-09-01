const NameInput = (props) => {
  return (
    <div className="settings-container flexbox">
      <div>
        <label htmlFor="name">Namn: </label>
        <input
          type="text"
          name="name"
          onChange={props.onChange}
          value={props.value}
        />
      </div>
      <button className="small-button" onClick={props.saveName}>
        Spara
      </button>
    </div>
  );
};

export default NameInput;
