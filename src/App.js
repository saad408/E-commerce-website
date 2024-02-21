import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Portfolio from "./Pages/Portfolio";
import Pages from "./Pages/Pages";
import Cart from "./Components/Cart";
import { useState } from "react";
import Checkout from "./Pages/Checkout";

function App() {
  const itemsData = [
    {
      id: 1,
      PImg1: "p01.jpg",
      PImg2: "p1.jpg",
      PName: "Relaxed-Fit Cotton Shirt",
      PPrice: "10.23",
      quantity: 15,
    },

    {
      id: 2,
      PImg1: "p02.jpg",
      PImg2: "p2.jpg",
      PName: "East Hampton Fleece Hoodie",
      PPrice: "65.60",
      quantity: 2,
    },
    {
      id: 3,
      PImg1: "p03.jpg",
      PImg2: "p3.jpg",
      PName: "Viscose-Cashmere Scarf",
      PPrice: "32.00",
      quantity: 0,
    },
    {
      id: 4,
      PImg1: "p04.jpg",
      PImg2: "p4.jpg",
      PName: "Plaid Cotton Oxford Shirt",
      PPrice: "55.91",
      quantity: 3,
    },
    {
      id: 5,
      PImg1: "p05.jpg",
      PImg2: "p5.jpg",
      PName: "Two-Tone Sleeveless Dress",
      PPrice: "170.00",
      quantity: 2,
    },
    {
      id: 6,
      PImg1: "p06.jpg",
      PImg2: "p6.jpg",
      PName: "Skinny Fit Stretch Mesh Polo",
      PPrice: "322.00",
      quantity: 14,
    },
    {
      id: 7,
      PImg1: "p07.jpg",
      PImg2: "p7.jpg",
      PName: "Packable Columbia Jacket",
      PPrice: "12.00",
      quantity: 4,
    },
    {
      id: 8,
      PImg1: "p08.jpg",
      PImg2: "p8.jpg",
      PName: "Custom Fit Soft-Touch Polo",
      PPrice: "15.00",
      quantity: 19,
    },
  ];

  const [cartitem, setCartItem] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const generateUniqueIdentifier = (item) => {
    return `${item.id}_${item.size}_${item.color}_${item.category}`;
  };
  const subtotal = cartitem.reduce((total, item) => {
    const itemKey = generateUniqueIdentifier(item);
    return total + parseFloat(item.PPrice) * (itemQuantities[itemKey] || 1);
  }, 0);
  const handleCartItem = (itemData) => {
    const existingItem = cartitem.find(
      (cartItem) =>
        cartItem.id === itemData.id &&
        cartItem.size === itemData.size &&
        cartItem.color === itemData.color &&
        cartItem.category === itemData.category
    );

    if (existingItem) {
      alert(
        "An item with the same color, size, and category is already in the cart"
      );
    } else {
      setCartItem([...cartitem, itemData]);
    }
  };
  const subs = cartitem.reduce(
    (total, item) => total + item.PPrice * (itemQuantities[item.id] || 1), // Using itemQuantities to get the correct quantity
    0
  );
  const getItemQuantity = (itemId) => {
    const itemKey = generateUniqueIdentifier(
      cartitem.find((item) => item.id === itemId)
    );
    return itemQuantities[itemKey] || 1;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cartitem={cartitem}
              setCartItem={setCartItem}
              handleCartItem={handleCartItem}
              itemsData={itemsData}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartitem={cartitem}
              setCartItem={setCartItem}
              handleCartItem={handleCartItem}
              itemData={itemsData}
              itemQuantities={itemQuantities}
              setItemQuantities={setItemQuantities}
              subs={subs}
              generateUniqueIdentifier={generateUniqueIdentifier}
              subtotal={subtotal}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              itemsData={itemsData}
              cartitem={cartitem}
              setCartItem={setCartItem}
              handleCartItem={handleCartItem}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/pages"
          element={
            <Pages
              cartitem={cartitem}
              setCartItem={setCartItem}
              handleCartItem={handleCartItem}
              itemsData={itemsData}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartitem={cartitem}
              getItemQuantity={getItemQuantity}
              subs={subs}
              subtotal={subtotal}
              itemQuantities={itemQuantities}
              generateUniqueIdentifier={generateUniqueIdentifier}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
