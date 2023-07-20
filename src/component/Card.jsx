import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };


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

        <img
          className="cursor"
          src={isAdded ? "/img/cheked.svg" : "/img/pls.svg"}
          alt="plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
};

export default Card;
