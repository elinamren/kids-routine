const NameInput = (props) => {
  return (
    <div className="settings-container">
      <label htmlFor="name">Namn: </label>
      <input
        type="text"
        name="name"
        onChange={props.onChange}
        // value={props.value}
      />
    </div>
  );
};

export default NameInput;
