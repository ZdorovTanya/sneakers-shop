const Card = (props) => {
    
  return (
    <div className="card">
      <div className="favorite" onClick={props.onClickFavorite}>
        <img src="/img/unliked.svg" alt="unliked" />
      </div>

      <img width={133} height={112} src={props.image} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={props.onClickPlus}>
          <img width={11} height={11} src="/img/pls.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
