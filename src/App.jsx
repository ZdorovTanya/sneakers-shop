import Card from "./component/Card";
import Drawer from "./component/Drawer";
import Header from "./component/Header";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    img: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    img: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    img: "/img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    img: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="searchBlock">
            <img src="/img/Vector.svg" alt="seacrh" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card 
            title={obj.title} 
            price={obj.price} 
            image={obj.img} 
            onClickFavorite={()=> console.log("Избранное")}
            onClickPlus={()=> console.log("Корзина")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
