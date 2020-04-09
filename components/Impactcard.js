function Impactcard(props) {
  return (
    <div className="Impactcard">
      <div className="Impactcard-left">
        <img src={props.img} alt="" className="Impactcard-left-img" />
      </div>
      <div className="Impactcard-right">
        <div className="Impactcard-right-title">{props.title}</div>
        <div className="Impactcard-right-description">{props.description}</div>
      </div>
    </div>
  );
}

export default Impactcard;
