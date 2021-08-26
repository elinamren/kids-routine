const Settings = (props) => {
  return (
    <div className="container" style={props.style}>
      <h2>Inställningar</h2>
      <p>Här kan du ändra namn, vilka uppgifter som ska synas osv.</p>
      <br />
      <label htmlFor="name">Namn: </label>
      <input type="text" name="name" onChange={props.onChange} />
      <br />
      <p>Nollställ insamlade stjärnor</p>
      <button onClick={props.deleteStars}>Ok</button>
      <button onClick={props.onClick}>Tillbaka</button>
      <button onClick={props.handleName}>Spara</button>
    </div>
  );
};

export default Settings;
