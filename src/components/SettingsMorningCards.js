import Checkbox from "./Checkbox";
import morningCards from "./morningCards";
import { useState } from "react";

const SettingsMorningCards = (props) => {
  // const [isChecked, setIsChecked] = useState(false);
  // if (props.checkedCheckboxes.includes(card.title)) {
  //   setIsChecked(true);
  // }
  return (
    // loopa igenom, om namnet finns  i listan checked
    <>
      <h4>Välj morgonuppgifter, 6st.</h4>
      {morningCards.map((card) => {
        return (
          <Checkbox name={card.title} handleCheckbox={props.handleCheckbox} />
        );
      })}
    </>
  );
};

export default SettingsMorningCards;
