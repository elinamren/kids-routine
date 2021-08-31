const Header = (props) => {
  return (
    <header>
      <h1>
        God {props.isMorning ? "morgon" : "kväll"} {props.name}
      </h1>
    </header>
  );
};

export default Header;
