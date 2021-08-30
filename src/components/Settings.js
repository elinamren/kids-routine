import morningCards from "./morningCards";
const Settings = (props) => {
  return (
    <div className="container settings" style={props.style}>
      <h2>Inställningar</h2>
      <p>Här kan du ändra namn, vilka uppgifter som ska synas osv.</p>
      <br />
      <label htmlFor="name">Namn: </label>
      <input type="text" name="name" onChange={props.onChange} />
      <br />
      <br />
      <h4>Byt morgonuppgifter</h4>

      {morningCards.map((card) => {
        return (
          <div key={card.id}>
            <input
              type="checkbox"
              name={card.title}
              onClick={props.handleCheckbox}
              value={card.title}
            />
            <label htmlFor={card.title}>{card.title}</label>
          </div>
        );
      })}

      <button onClick={props.handleNewCards}>spara</button>
      <br />
      {/* {newMorningCards.map((card) => {
        return (
          <div
            style={{
              display: "inline-block",
              border: "20px solid rgb(210, 210, 210)",
              borderRadius: "20px",
              padding: "20px",
              margin: "10px",
            }}
          >
            <img src={card.image} alt={card.title} width="150" height="150" />
            <h3>{card.title}</h3>
          </div>
        );
      })} */}
      <br />
      <p>Nollställ insamlade stjärnor</p>
      <button onClick={props.deleteStars}>Ok</button>
      <br />
      <br />
      <button onClick={props.handleSettingsModal}>Tillbaka</button>
      <button onClick={props.handleName}>Spara</button>
    </div>
  );
};

export default Settings;
