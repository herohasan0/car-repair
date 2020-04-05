function Button(props) {
  return (
    <a href="">
      <div className="button">
        <span className="button-text">{props.text}</span>
      </div>
    </a>
  );
}

export default Button;
