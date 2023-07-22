import React, { useEffect, useState } from "react";

const Card = ({onClickFavorite, image, title, price, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({title, image, price});
    setIsAdded(!isAdded);
  };


  return (
    <div className="card">
      <div className="favorite" onClick={onClickFavorite}>
        <img src="/img/unliked.svg" alt="unliked" />
      </div>

      <img width={133} height={112} src={image} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
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
