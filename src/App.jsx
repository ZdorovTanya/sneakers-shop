import Card from "./component/Card";
import Drawer from "./component/Drawer";
import Header from "./component/Header";

import React, { useEffect, useState } from "react";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://64b91d1379b7c9def6c096ac.mockapi.io/items")
      .then((res) => {
        // достаем response-ответ в json формате
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClikCart={() => setCartOpened(!cartOpened)}
        />
      )}

      <Header onClikCart={() => setCartOpened(!cartOpened)} />

      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/Vector.svg" alt="seacrh" />
            {searchValue && (
              <img
                className="inputClear"
                onClick={() => setSearchValue("")}
                src="/img/clear.svg"
                alt="clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type="text"
              placeholder="Поиск..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              image={item.img}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
