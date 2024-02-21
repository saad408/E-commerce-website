import { Link } from "react-router-dom";

function COne({ src, name }) {
  return (
    <div className="COne-container">
      <div className="COne">
        <img className="COne img-fluid" src={src} alt="" />
        <Link to="/blog">
          <button type="button" className="btn btn-outline-primary btn-COne ">
            {name}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default COne;
