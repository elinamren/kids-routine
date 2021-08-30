import Checkbox from "./Checkbox";

const SettingsMorningCards = (props) => {
  return (
    // loopa igenom, om namnet finns  i listan checked
    <>
      <h4>Välj morgonuppgifter, 6st.</h4>
      <Checkbox name="Gå upp i tid" handleCheckbox={props.handleCheckbox} />
      <Checkbox name="Gå på toa" handleCheckbox={props.handleCheckbox} />
      <Checkbox name="Klä på dig" handleCheckbox={props.handleCheckbox} />
      <Checkbox name="Ät frukost" handleCheckbox={props.handleCheckbox} />
      <Checkbox name="Duka av bordet" handleCheckbox={props.handleCheckbox} />
      <Checkbox name="Borsta tänder" handleCheckbox={props.handleCheckbox} />
      <Checkbox name="Borsta håret" handleCheckbox={props.handleCheckbox} />
      <Checkbox name="Bädda sängen" handleCheckbox={props.handleCheckbox} />
      <Checkbox name="Packa väskan" handleCheckbox={props.handleCheckbox} />
      <Checkbox
        name="Klä på ytterkläder"
        handleCheckbox={props.handleCheckbox}
      />
    </>
  );
};

export default SettingsMorningCards;
