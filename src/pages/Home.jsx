import Card from "../component/Card";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
}) => {
  return (
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
              id={index}
              onPlus={(obj) => onAddToCart(obj)}
              // onFavorite={(obj) => onAddToFavorite(obj)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
