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
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default Checkbox;
