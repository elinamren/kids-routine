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
      />
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default Checkbox;
