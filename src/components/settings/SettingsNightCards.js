import Checkbox from "./Checkbox";
import nightCards from "../nightCards";

const SettingsNightCards = (props) => {
  return (
    <div className="settings-container flexbox">
      <div>
        <h3>Välj kvällsuppgifter, 6st.</h3>
        {nightCards.map((card) => {
          return (
            <Checkbox
              name={card.title}
              handleCheckbox={props.handleCheckboxNight}
              key={card.id}
              id={card.id}
              checked={
                props.checkedCheckboxesNight.includes(card.id) ? true : false
              }
            />
          );
        })}
      </div>
      <button className="small-button" onClick={props.saveNight}>
        Spara
      </button>
    </div>
  );
};

export default SettingsNightCards;
