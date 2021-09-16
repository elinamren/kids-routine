import SettingsNightCards from "./SettingsNightCards";
import SettingsMorningCards from "./SettingsMorningCards";
import NameInput from "./NameInput";
import DeleteStars from "./DeleteStars";
const Settings = (props) => {
  return (
    <div className={`modal-container settings ${props.className}`}>
      <h3>Inställningar</h3>
      <p>Här kan du ändra namn, vilka uppgifter som ska synas osv.</p>
      <div className="input-container">
        <NameInput
          onChange={props.onChange}
          saveName={props.saveName}
          value={props.value}
        />
        <SettingsMorningCards
          handleCheckboxMorning={props.handleCheckboxMorning}
          checkedCheckboxesMorning={props.checkedCheckboxesMorning}
          saveMorning={props.saveMorning}
        />
        <SettingsNightCards
          handleCheckboxNight={props.handleCheckboxNight}
          checkedCheckboxesNight={props.checkedCheckboxesNight}
          saveNight={props.saveNight}
        />
        <DeleteStars stars={props.stars} deleteStars={props.deleteStars} />
      </div>

      <button onClick={props.handleSettingsModal}>Tillbaka</button>
    </div>
  );
};

export default Settings;
