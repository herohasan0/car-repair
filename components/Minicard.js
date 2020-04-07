function Minicard(props) {
  return (
    <div className="Minicard">
      <img src={props.src} alt="" className="Minicard-icon" />
      <div className="Minicard-content">
        <h4 className="Minicard-content-title">{props.title}</h4>
        <p className="Minicard-content-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Minicard;
