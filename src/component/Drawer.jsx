const Drawer = ({onClikCart, items=[]}) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClikCart}
            className="removeBtn cu-p"
            src="/img/remove.svg"
            alt="remove"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <img
                className="mr-20"
                width={70}
                height={70}
                src={obj.image}
                alt=""
              />

              <div className="mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>

              <img className="removeBtn" src="/img/remove.svg" alt="remove" />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul className="mb-30">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 489 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenBtn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
