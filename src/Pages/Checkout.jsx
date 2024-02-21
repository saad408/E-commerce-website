import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Checkout({
  cartitem,
  itemQuantities,
  subtotal,
  generateUniqueIdentifier,
}) {
  const getItemQuantity = (itemKey) => {
    return itemQuantities[itemKey] || 1;
  };
  return (
    <div className="wrapper">
      <div className="content">
        <Navbar />
        <h1 className="d-flex justify-content-center mt-5 mb-5">Checkout</h1>
        <div className="container parent-checkout-container me-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-details me-5">
                <h2 className="checkout-record-heading">Customer Record </h2>
                <div className="name-field-checkout">
                  <div className="firstname-field-checkout">
                    <label className="mt-3 mb-1" htmlFor="">
                      First Name
                    </label>
                    <input
                      className="input-checkout input-field"
                      placeholder="Raja Saad"
                      type="text"
                    />
                  </div>

                  <div className="firstname-field-checkout">
                    <label className="mt-3 mb-1" htmlFor="">
                      Last Name
                    </label>
                    <input
                      className="input-checkout input-field"
                      placeholder="Naseer"
                      type="text"
                    />
                  </div>
                </div>
                <label className="mt-3 mb-1">Email Address</label>
                <input
                  className="input-checkout input-field"
                  placeholder="abc@gmail.com"
                  type="text"
                />
                <label className="mt-3 mb-1">Company Name</label>
                <input
                  className="input-checkout input-field"
                  placeholder="Systems Limited"
                  type="text"
                />
                <label className="mt-3 mb-1">Country</label>
                <input
                  className="input-checkout input-field"
                  placeholder="Pakistan"
                  type="text"
                />
                <label className="mt-3 mb-1">Street Address</label>
                <input
                  className="input-checkout input-field"
                  placeholder="Street Address Line 1"
                  type="text"
                />
                <input
                  className="input-checkout input-field mt-2"
                  placeholder="Street Address Line 2 (Optional)"
                  type="text"
                />
                <label className="mt-3 mb-1">Town / City</label>
                <input
                  className="input-checkout input-field"
                  placeholder="Lahore"
                  type="text"
                />
                <label className="mt-3 mb-1">State / Province</label>
                <input
                  className="input-checkout input-field"
                  placeholder="Punjab"
                  type="text"
                />
                <label className="mt-3 mb-1">PostalCode/ ZIP</label>
                <input
                  className="input-checkout input-field"
                  placeholder="44000"
                  type="text"
                />
                <label className="mt-3 mb-1">Phone</label>
                <input
                  className="input-checkout input-field"
                  placeholder="(+92) 303 5476615"
                  type="text"
                />
                <label className="mt-3 mb-1">Order Note</label>
                <input
                  className="input-checkout input-field mb-5"
                  placeholder="Email Address"
                  type="text"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container shopping-details mt-5 pt-5">
                <div className="border border-padding">
                  <h2 className="mb-5 checkout-record-heading">Your Order</h2>
                  <div className="shopping-details-product-title">
                    <strong>Products</strong>
                    <strong>Total</strong>
                  </div>
                  <div className="shopping-details-products">
                    {cartitem.map((item) => (
                      <div
                        className="shopping-details-single-product"
                        key={item.id}>
                        <div className="mt-4 mb-4">
                          {item.PName} x{" "}
                          {getItemQuantity(generateUniqueIdentifier(item))}
                        </div>
                        <div>
                          {(
                            item.PPrice *
                            getItemQuantity(generateUniqueIdentifier(item))
                          ).toFixed(2)}
                          $
                        </div>
                      </div>
                    ))}

                    <div className="shopping-details-shipping shopping-details-single-product">
                      <div className="mt-4 mb-4">Shipping Charges</div>
                      <div>9.99$</div>
                    </div>
                  </div>
                  <div className="shopping-details-product-title mt-4 mb-4">
                    <strong>Total</strong>
                    <strong>{(subtotal + 9.99).toFixed(2)}$</strong>
                  </div>
                  <p className="shopping-details-privacy-policy container">
                    Your personal data will be used to process your order in our
                    privacy policy.
                  </p>
                  <div className="shopping-details-privacy-policy d-flex container">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor="flexCheckDefault">
                      I have read and agree to the website terms and conditions.
                    </label>
                  </div>
                  <div className="shopping-details-button">
                    <button
                      type="button"
                      className="btn btn-primary shopping-details-button mt-5">
                      Select Payment Method
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
