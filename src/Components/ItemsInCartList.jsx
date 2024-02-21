function ItemsInCartList({
  cartitem,
  onDelete,
  itemQuantity,
  setItemQuantity,
  itemKey,
}) {
  const handlePlus = () => {
    if (itemQuantity < cartitem.quantity)
      setItemQuantity(itemKey, itemQuantity + 1);
  };

  const handleMinus = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemKey, itemQuantity - 1);
    }
  };

  const handleDelete = () => {
    onDelete(cartitem.id);
  };

  return (
    <div>
      <div className="container item-in-cart ps-0 ms-0 mt-5">
        <div className="but-div">
          <button onClick={handleDelete} className="item-in-cart-delete-button">
            <i className="bi bi-trash3 item-in-cart-delete-button"></i>
          </button>
          <img className="item-in-cart-img" src={cartitem.PImg1} alt="" />
        </div>

        <div className="name-quantity-price">
          <p className="me-5 ms-5 mb-0 product-name-in-cart">
            {cartitem.PName} ({cartitem.size}, {cartitem.color} in{" "}
            {cartitem.category})
          </p>

          <p className="me-5 ms-5 mb-0">
            {(cartitem.PPrice * itemQuantity).toFixed(2)}$
          </p>
          <div className="quantity-change ">
            <button
              className="me-3 item-in-cart-increment-button"
              onClick={handleMinus}>
              -
            </button>
            <input
              className="item-in-cart-input"
              type="number"
              readOnly
              value={itemQuantity}
            />
            <button
              className="item-in-cart-increment-button"
              onClick={handlePlus}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsInCartList;
