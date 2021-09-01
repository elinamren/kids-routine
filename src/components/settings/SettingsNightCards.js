import Checkbox from "./Checkbox";
import nightCards from "../nightCards";

const SettingsNightCards = (props) => {
  return (
    <div className="settings-container">
      <h4>Välj kvällsuppgifter, 6st.</h4>
      {nightCards.map((card) => {
        return (
          <Checkbox
            name={card.title}
            handleCheckbox={props.handleCheckbox}
            key={card.id}
            id={card.id}
          />
        );
      })}
    </div>
  );
};

export default SettingsNightCards;
