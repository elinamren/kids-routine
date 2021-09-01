import SettingsNightCards from "./SettingsNightCards";
import SettingsMorningCards from "./SettingsMorningCards";
import NameInput from "./NameInput";
import DeleteStars from "./DeleteStars";
const Settings = (props) => {
  return (
    <div className={`modal-container settings ${props.className}`}>
      <h2>Inställningar</h2>
      <p>Här kan du ändra namn, vilka uppgifter som ska synas osv.</p>
      <div className="input-container">
        <NameInput onChange={props.onChange} saveName={props.saveName} />
        <SettingsMorningCards
          handleCheckboxMorning={props.handleCheckboxMorning}
          checkedCheckboxes={props.checkedCheckboxes}
          saveMorning={props.saveMorning}
        />
        <SettingsNightCards />
        <DeleteStars stars={props.stars} deleteStars={props.deleteStars} />
      </div>

      <button onClick={props.handleSettingsModal}>Tillbaka</button>
      <button onClick={props.handleSave}>Spara</button>
    </div>
  );
};

export default Settings;
