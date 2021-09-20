import Checkbox from "./Checkbox";
import morningCards from "../morningCards";

const SettingsMorningCards = (props) => {
  return (
    // loopa igenom, om namnet finns  i listan checked
    <div className="settings-container flexbox">
      <div>
        <h3>Välj morgonuppgifter, 6st.</h3>
        {morningCards.map((card) => {
          return (
            <Checkbox
              name={card.title}
              handleCheckbox={props.handleCheckboxMorning}
              key={card.id}
              id={card.id}
              checked={
                props.checkedCheckboxesMorning.includes(card.id) ? true : false
              }
            />
          );
        })}
      </div>
      <button className="small-button" onClick={props.saveMorning}>
        Spara
      </button>
    </div>
  );
};

export default SettingsMorningCards;
