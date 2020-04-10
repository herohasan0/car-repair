import Title from './Title';

function Maincard(props) {
  return (
    <section className="Maincard" style={props.bg}>
      <div className="container">
        <div className="Maincard-content">
          <Title subject={props.subject} title={props.title} />
          <div className="Maincard-text" style={props.offText}>
            {props.text}
          </div>
          <div className="Maincard-links" style={props.offLinks}>
            <a href="" className="Maincard-links-link">
              {props.link1}
            </a>
            <a href="" className="Maincard-links-link">
              {props.link2}
            </a>
            <a href="" className="Maincard-links-link">
              {props.link3}
            </a>
            <a href="" className="Maincard-links-link">
              {props.link4}
            </a>
          </div>
          <div className="Maincard-div">
            <img src={props.img} alt="" className="Maincard-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Maincard;
