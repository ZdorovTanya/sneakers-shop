import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Drawer from "./component/Drawer";
import Header from "./component/Header";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export const AppContext = React.createContext({});

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://64b91d1379b7c9def6c096ac.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://64b91d1379b7c9def6c096ac.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://64b91d1379b7c9def6c096ac.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://64b91d1379b7c9def6c096ac.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  // const onAddToFavorite = (obj) => {
  //   axios.post("https://64b91d1379b7c9def6c096ac.mockapi.io/favorites", obj);
  //   setFavorites((prev) => [...prev, obj]);
  // };

  const onRemoveItem = (id) => {
    axios.delete(`https://64b91d1379b7c9def6c096ac.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider value={{cartItems, favorites, items}}>
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClikCart={() => setCartOpened(!cartOpened)}
            onRemove={onRemoveItem}
          />
        )}
        <Router>
          <Header onClikCart={() => setCartOpened(!cartOpened)} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  items={items}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  onChangeSearchInput={onChangeSearchInput}
                  onAddToCart={onAddToCart}
                />
              }
            ></Route>
            <Route exact path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
