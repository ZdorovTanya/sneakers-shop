import Card from "./component/Card";
import Drawer from "./component/Drawer";
import Header from "./component/Header";

import React, { useEffect, useState } from "react";



function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);

  useEffect (() => {
    fetch ('https://64b91d1379b7c9def6c096ac.mockapi.io/items')
    .then((res) => {
      // достаем response-ответ в json формате
      return res.json();
    })
    .then((json) => {
      setItems(json);
    })
  }, [])
  

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClikCart={() => setCartOpened(!cartOpened)} />}

      <Header onClikCart={() => setCartOpened(!cartOpened)} />

      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/Vector.svg" alt="seacrh" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card 
            title={obj.title} 
            price={obj.price} 
            image={obj.img} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
