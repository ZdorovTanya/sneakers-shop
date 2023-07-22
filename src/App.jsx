import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "./component/Card";
import Drawer from "./component/Drawer";
import Header from "./component/Header";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://64b91d1379b7c9def6c096ac.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios.get("https://64b91d1379b7c9def6c096ac.mockapi.io/cart")
    .then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://64b91d1379b7c9def6c096ac.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://64b91d1379b7c9def6c096ac.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClikCart={() => setCartOpened(!cartOpened)}
          onRemove = {onRemoveItem}
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
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                image={item.img}
                onPlus={(obj) => onAddToCart(obj)}
                // onFavorite={onFavorite}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
