import SettingsMorningCards from "./SettingsMorningCards";
const Settings = (props) => {
  return (
    <div className="container settings" style={props.style}>
      <h2>Inställningar</h2>
      <p>Här kan du ändra namn, vilka uppgifter som ska synas osv.</p>
      <div className="input-container">
        <br />
        <label htmlFor="name">Namn: </label>
        <input
          type="text"
          name="name"
          onChange={props.onChange}
          // value={props.value}
        />
        <br />
        <br />
        <SettingsMorningCards handleCheckbox={props.handleCheckbox} />

        <br />
        <br />
        <p>Nollställ insamlade stjärnor</p>
        <button onClick={props.deleteStars}>Ok</button>
      </div>

      <button onClick={props.handleSettingsModal}>Tillbaka</button>
      <button onClick={props.handleSave}>Spara</button>
    </div>
  );
};

export default Settings;
