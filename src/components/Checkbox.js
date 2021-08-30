const Checkbox = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        name={props.name}
        onChange={props.handleCheckbox}
        value={props.name}
        defaultChecked={props.checked}
      />
      <label htmlFor={props.name}>{props.name}</label>
    </div>
  );
};

export default Checkbox;
