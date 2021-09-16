const Checkbox = (props) => {
  return (
    <div>
      <input
        className="checkbox"
        type="checkbox"
        name={props.name}
        onChange={props.handleCheckbox}
        value={props.name}
        checked={props.checked}
        id={props.id}
      />
      <label for={props.id}>{props.name}</label>
    </div>
  );
};

export default Checkbox;
