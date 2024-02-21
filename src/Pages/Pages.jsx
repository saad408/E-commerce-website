import HomePage from "./HomePage";

function Pages({ cartitem, setCartItem, handleCartItem, itemsData }) {
  return (
    <div className="wrapper">
      <HomePage
        cartitem={cartitem}
        setCartItem={setCartItem}
        handleCartItem={handleCartItem}
        itemsData={itemsData}
      />
    </div>
  );
}

export default Pages;
