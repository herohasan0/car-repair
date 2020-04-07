function Servicecard(props) {
  return (
    <div className={`Minicard Servicecard ${props.shadow}`}>
      <img src={props.src} alt="" className="Minicard-icon" />
      <div className="Minicard-content Servicecard-content">
        <h4 className="Minicard-content-title Servicecard-content-title">
          {props.title}
        </h4>
        <p className="Minicard-content-text Servicecard-content-text">
          {props.text}
        </p>
      </div>
    </div>
  );
}
export default Servicecard;
