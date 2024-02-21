import Footer from "./Footer";
import ItemsInCartList from "./ItemsInCartList";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Cart({
  cartitem,
  setCartItem,
  itemQuantities,
  setItemQuantities,
  generateUniqueIdentifier,
  subtotal,
}) {
  const setItemQuantity = (itemKey, quantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemKey]: quantity,
    }));
  };

  const handleDelete = (itemId) => {
    const updatedCartItems = cartitem.filter((item) => item.id !== itemId);
    setCartItem(updatedCartItems);
  };

  return (
    <div className="wrapper">
      <div className="content mb-5">
        <Navbar />
        <h1 className="d-flex justify-content-center mt-5">Shopping Cart</h1>
        <div
          className="container cart-container mt-3 mb-4"
          style={{ maxHeight: "400px", minHeight: "400px", overflowY: "auto" }}>
          {cartitem.map((item) => {
            const itemKey = generateUniqueIdentifier(item);
            return (
              <ItemsInCartList
                key={itemKey}
                cartitem={item}
                itemQuantity={itemQuantities[itemKey] || 1}
                onDelete={handleDelete}
                setItemQuantity={setItemQuantity}
                itemKey={itemKey}
              />
            );
          })}
        </div>
        <h2 className="sub-total">SubTotal: {subtotal.toFixed(2)}</h2>
        <div className="parent-last-two-buttons-of-cart">
          <Link to={"/shop"}>
            <button type="button" className="btn btn-primary cart-button">
              👈 Continue Shopping
            </button>
          </Link>
          <Link to={"/checkout"}>
            <button type="button" className="btn btn-primary cart-button">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
