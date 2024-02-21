import Footer from "../Components/Footer";
import Items from "../Components/Items";
import Navbar from "../Components/Navbar";

function Shop({ itemsData, cartitem, setCartItem, handleCartItem }) {
  return (
    <div className="wrapper">
      <div className="content">
        <Navbar />
        <div className="all-items-container container">
          <div className="row">
            {itemsData.map((item, index) => (
              <div key={index} className="col-lg-4 col-sm-6 col-xl-3 heightt">
                <Items
                  PImg1={item.PImg1}
                  PImg2={item.PImg2}
                  PPrice={item.PPrice}
                  PName={item.PName}
                  id={item.id}
                  itemData={item}
                  setCartItem={setCartItem}
                  cartitem={cartitem}
                  quantity={item.quantity}
                  handleCartItem={handleCartItem}
                  key={"Item" + item.id}
                />
              </div>
            ))}
          </div>
          {console.log(cartitem)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
