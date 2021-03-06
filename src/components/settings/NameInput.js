import { useState } from "react";

const NameInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }
  return (
    <div className="settings-container flexbox">
      <div>
        <label for="name-input">Namn: </label>
        <input
          id="name-input"
          type="text"
          name="name"
          onChange={handleInputValue}
          value={inputValue}
          autocomplete="off"
        />
      </div>
      <button
        className="small-button"
        onClick={() => {
          props.saveName(inputValue);
          setInputValue("");
        }}
      >
        Spara
      </button>
    </div>
  );
};

export default NameInput;
