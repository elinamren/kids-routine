import Checkbox from "./Checkbox";
import morningCards from "../morningCards";

const SettingsMorningCards = (props) => {
  // const [isChecked, setIsChecked] = useState(false);
  // if (props.checkedCheckboxes.includes(card.title)) {
  //   setIsChecked(true);
  // }
  return (
    // loopa igenom, om namnet finns  i listan checked
    <div className="card-settings-container">
      <h4>Välj morgonuppgifter, 6st.</h4>
      {morningCards.map((card) => {
        return (
          <Checkbox
            name={card.title}
            handleCheckbox={props.handleCheckbox}
            key={card.id}
            id={card.id}
            // checked={props.checkedCheckboxes.includes(card.id) ? true : false}
          />
        );
      })}
    </div>
  );
};

export default SettingsMorningCards;
