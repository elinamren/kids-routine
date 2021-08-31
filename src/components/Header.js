const Header = (props) => {
  return (
    <header>
      <h1 style={{ color: props.isMorning ? "black" : "white" }}>
        God {props.isMorning ? "morgon" : "kväll"} {props.name}
      </h1>
    </header>
  );
};

export default Header;
