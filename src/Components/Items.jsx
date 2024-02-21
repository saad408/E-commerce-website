import { useState } from "react";
import Overlay from "./overlay";

function Items({
  PPrice,
  PName,
  PImg1,
  PImg2,
  itemData,
  handleCartItem,
  quantity,
  cartitem,
}) {
  const [curImg, setCurImg] = useState(PImg1);
  const [activeSize, setActiveSize] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeColour, setActiveColour] = useState(null);
  const [overlay, setOverlay] = useState(false);

  const handleClick1 = () => {
    setCurImg(PImg1);
  };

  const handleClick2 = () => {
    setCurImg(PImg1);
  };

  const handleMouseEnter = () => {
    setCurImg(PImg2);
  };

  const handleMouseLeave = () => {
    setCurImg(PImg1);
  };

  const handleActiveColor = (colour) => {
    setActiveColour(colour);
  };

  const handleActiveSize = (size) => {
    setActiveSize(size);
  };

  const handleActiveCategory = (category) => {
    setActiveCategory(category);
  };

  const handleAddToCart = () => {
    if (activeSize && activeColour && activeCategory) {
      const hasDuplicate = cartitem.some(
        (item) =>
          item.size === activeSize &&
          item.id === itemData.id &&
          item.color === activeColour &&
          item.category === activeCategory
      );

      if (!hasDuplicate) {
        handleCartItem({
          ...itemData,
          size: activeSize,
          color: activeColour,
          category: activeCategory,
        });
        setOverlay(true);
      } else {
        alert("Item with the same color, size, and category already in cart.");
      }
    } else {
      alert("Please select size, color, and category before adding to cart.");
    }
  };
  const handleCloseOverlay = () => {
    setOverlay(false);
  };

  return (
    <div className="item-container mb-5">
      {overlay && (
        <Overlay
          description={`${PName} has been added to your cart.`}
          onClose={handleCloseOverlay}
          src={curImg}
        />
      )}
      <div className="item">
        <div className="img d-flex justify-content-center">
          <img
            className="item-img "
            src={curImg}
            alt=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="info-box">
          <h5 className="text-center">{PName}</h5>
          <p className="price">{PPrice}$ </p>
          <div className="colours">
            <button
              className={`colours-button me-2 p-0 `}
              onClick={() => {
                handleClick1();
                handleActiveColor("Blue");
              }}>
              <img
                className={`item-colour-size ${
                  activeColour === "Blue" ? "activeeee" : ""
                }`}
                src={PImg1}
                alt=""
              />
            </button>
            <button
              className={`colours-button p-0 `}
              onClick={() => {
                handleClick2();
                handleActiveColor("White");
              }}>
              <img
                className={`item-colour-size ${
                  activeColour === "White" ? "activeeee" : ""
                }`}
                src={PImg1}
                alt=""
              />
            </button>
          </div>
          <div className="sizes mt-3">
            <button
              onClick={() => handleActiveSize("Small")}
              className={`sizes-button me-1 ${
                activeSize === "Small" ? "activee" : ""
              }`}
              title="Small Size">
              S
            </button>
            <button
              onClick={() => handleActiveSize("Medium")}
              className={`sizes-button me-1 ${
                activeSize === "Medium" ? "activee" : ""
              }`}
              title="Medium Size">
              M
            </button>
            <button
              onClick={() => handleActiveSize("Large")}
              className={`sizes-button me-1 ${
                activeSize === "Large" ? "activee" : ""
              }`}
              title="Large Size">
              L
            </button>
            <button
              onClick={() => handleActiveSize("XL")}
              className={`sizes-button me-1 ${
                activeSize === "XL" ? "activee" : ""
              }`}
              title="Extra Large Size">
              XL
            </button>
          </div>
          <div className="cloth-category mt-4">
            <button
              className="colours-button p-0 m-1"
              onClick={() => handleActiveCategory("Febric")}>
              <img
                className={`cloth-category-button ${
                  activeCategory === "Febric" ? "activeee" : ""
                }`}
                src="febric.jpg"
                alt=""
                title="Febric"
              />
            </button>
            <button
              className="colours-button p-0 m-1"
              onClick={() => handleActiveCategory("Polyester")}>
              <img
                className={`cloth-category-button ${
                  activeCategory === "Polyester" ? "activeee" : ""
                }`}
                src="cloth2.png"
                alt=""
                title="Polyester"
              />
            </button>
            <button
              className="colours-button p-0 m-1"
              onClick={() => handleActiveCategory("Cotton")}>
              <img
                className={`cloth-category-button ${
                  activeCategory === "Cotton" ? "activeee" : ""
                }`}
                src="cloth3.jpeg"
                alt=""
                title="Cotton"
              />
            </button>
            <button
              className="colours-button p-0 m-1"
              onClick={() => handleActiveCategory("Nylon")}>
              <img
                className={`cloth-category-button ${
                  activeCategory === "Nylon" ? "activeee" : ""
                }`}
                src="cloth4.jpeg"
                alt=""
                title="Nylon"
              />
            </button>
          </div>
          <div className="add-to-cart mt-3">
            <button
              className="btn btn-primary jeee"
              onClick={handleAddToCart}
              disabled={quantity === 0}>
              {quantity === 0 ? "Sold Out" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
