const Settings = (props) => {
  return (
    <div className="star container" style={props.style}>
      <h2>Inställningar</h2>
      <p>Här kan du ändra namn, vilka uppgifter som ska synas osv.</p>
      <br />
      <button className="hej settings" onClick={props.onClick}>
        Tillbaka
      </button>
      <button>Spara</button>
    </div>
  );
};

export default Settings;
