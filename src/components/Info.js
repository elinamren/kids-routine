const Info = (props) => {
  return (
    <div className={`container ${props.className}`} style={props.style}>
      <h2>Välkommen</h2>
      <p>
        Klara av alla morgon och kvällsuppgifter på ett kul och lekfullt sätt.
        Välj vilka uppgifter som passar dig bäst och samla så många stjärnor du
        kan. Lycka till!
      </p>
      <br />
      <p>
        Detta är ett Hyper Island skolprojekt som är utvecklat av Elin Amrén,
        mer information hittar du på{" "}
        <a href="https://github.com/elinamren/goodmorning">Github</a>.
      </p>
      <br />
      <h4>CRED</h4>
      <p>
        Iconer designade av{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        från{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          Flaticon
        </a>
      </p>
      <br />
      <button onClick={props.onClick}>Stäng</button>
    </div>
  );
};

export default Info;
