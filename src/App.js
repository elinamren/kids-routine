import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header.js";
import IconButton from "./components/Icon-button";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <IconButton src="images/info.png" alt="info" id="info-button" />
      <IconButton
        src="images/settings.png"
        alt="settings"
        id="settings-button"
      />
      <IconButton src="images/star.png" alt="star" id="star-button" />
      <Info />
    </div>
  );
}

export default App;
