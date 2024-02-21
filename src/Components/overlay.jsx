import { Link } from "react-router-dom";

export default function Overlay({ description, onClose, src }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <img src={src} alt="Product" className="product-image" />
        <h2>Item Added to Cart</h2>
        <p>{description}</p>
        <div className="parent-last-two-buttons-of-overlay">
          <button className="overlay-button" onClick={onClose}>
            Close
          </button>
          <Link to={"/cart"}>
            <button className="overlay-button">Show Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
