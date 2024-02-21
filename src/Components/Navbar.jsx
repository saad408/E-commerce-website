import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid p-0 bg-white">
      <div className="container ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid d-flex">
            <img
              src="wookie.png"
              alt="Logo"
              width="100"
              height="24"
              className="d-inline-block align-text-top me-4  align-items-center"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item pe-3">
                  <Link className="nav-link active" to="/" aria-current="page">
                    HOME
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link
                    to="/shop"
                    className="nav-link active"
                    aria-current="page">
                    SHOP
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link
                    to="/blog"
                    className="nav-link active"
                    aria-current="page">
                    BLOG
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link
                    to="/portfolio"
                    className="nav-link active"
                    aria-current="page">
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link
                    to="/pages"
                    className="nav-link active"
                    aria-current="page">
                    PAGES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link active"
                    aria-current="page">
                    CONTACT
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <i className="bi bi-search ps-2"></i>
                <Link to="/cart">
                  <i className="bi bi-bag ps-2"></i>
                </Link>
                <i className="bi bi-person ps-2"></i>
                <i className="bi bi-currency-exchange ps-2"></i>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
