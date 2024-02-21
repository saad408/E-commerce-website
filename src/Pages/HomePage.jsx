import COne from "../Components/COne";
import Carosel from "../Components/Carosel";
import Footer from "../Components/Footer";
import Items from "../Components/Items";
import Navbar from "../Components/Navbar";

function HomePage({ cartitem, setCartItem, handleCartItem, itemsData }) {
  return (
    <>
      <header>
        <Navbar cartitem={cartitem} />
        <Carosel />
      </header>
      <div className="C-container ">
        <div className="boxes mb-4" id="item-1">
          <COne src={"1.jpg"} name={"CASUAL"} />
        </div>
        <div className="boxes " id="item-2">
          <COne src={"2.jpg"} name={"WOMEN"} />
        </div>
        <div className="boxes" id="item-3">
          <COne src={"3.jpg"} name={"SHIRT"} />
        </div>
        <div className="boxes" id="item-4">
          <COne src={"4.jpg"} name={"MEN"} />
        </div>
        <div className="boxes" id="item-5">
          <COne src={"5.jpg"} name={"DRESSES"} />
        </div>
        <div className="boxes" id="item-6">
          <COne src={"6.jpg"} name={"JEANS"} />
        </div>
      </div>
      <h2 className="center mt-5 ">Top Trending</h2>
      <h4 className="center mb-4">Top view in this week</h4>
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
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
