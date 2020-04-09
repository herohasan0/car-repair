function Customercard(props) {
  return (
    <div className="Customercard">
      <div className="Customercard-top">
        <p className="Customercard-top-text">{props.text}</p>
      </div>
      <div className="Customercard-bottom">
        <img src={props.img} alt="" className="Customercard-bottom-profile" />
        <span className="Customercard-bottom-name">{props.name}</span>
      </div>
    </div>
  );
}

export default Customercard;
