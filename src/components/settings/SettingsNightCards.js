import Checkbox from "./Checkbox";
import nightCards from "../nightCards";

const SettingsNightCards = (props) => {
  return (
    <div className="settings-container flexbox">
      <div>
        <h4>Välj kvällsuppgifter, 6st.</h4>
        {nightCards.map((card) => {
          return (
            <Checkbox
              name={card.title}
              handleCheckbox={props.handleCheckboxNight}
              key={card.id}
              id={card.id}
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
