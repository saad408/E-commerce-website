function Footer() {
  return (
    <div className="pt-5">
      <div className="container-fluid blue p-0 ">
        <div className="container height">
          <div className="row height">
            <div className="col-lg-4 white height d-flex align-items-center">
              <h4>Be in touch with us</h4>
            </div>
            <div className="col-lg-4 height d-flex align-items-center">
              <div className="input-group  d-flex align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"></input>
                <button
                  className="btn btn-outline-secondary bg-black text-light"
                  type="button"
                  id="button-addon2">
                  Join us
                </button>
              </div>
            </div>
            <div className="col-lg-4 height d-flex align-items-center justify-content-center">
              <ul className="d-flex m-0">
                <li className="me-3">
                  <i className="bi bi-facebook"></i>
                </li>
                <li className="me-3">
                  <i className="bi bi-instagram"></i>
                </li>
                <li className="me-3">
                  <i className="bi bi-whatsapp"></i>
                </li>
                <li className="me-3">
                  <i className="bi bi-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid background-footer pt-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="mb-3">categories</h2>
              <ul className="p-0 light-text">
                <li>Casual</li>
                <li>Dresses</li>
                <li>Jeans</li>
                <li>Men</li>
                <li>Women</li>
                <li>Shirts</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h2 className="mb-3">My Account</h2>
              <ul className="p-0 light-text">
                <li>Account</li>
                <li>Cart</li>
                <li>WishList</li>
                <li>Compare</li>
                <li>Login</li>
                <li>Sign-up</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h2 className="mb-3">About us</h2>
              <p className="light-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                expedita consequuntur accusantium laboriosam reiciendis error
                nihil et perferendis iste veniam minima, ducimus nemo corporis
                animi est, officiis quod adipisci suscipit?
              </p>
            </div>
            <div className="col-lg-3">
              <h2>Contact</h2>
              <p>
                Address:{" "}
                <span className="light-text">
                  2548 Broaddus Maple Court Avenue, Madisonville KY 4783, USA
                </span>
              </p>
              <p>
                Phone:{" "}
                <span className="light-text">
                  +777 2345 7885; +777 2345 7886
                </span>
              </p>
              <p>
                Hours:{" "}
                <span className="light-text">
                  7 Days a week from 10 am to 6 pm
                </span>
              </p>
              <p>
                E-mail: <span className="light-text">info@mydomain.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0 height">
        <div className="container height ">
          <div className="row height">
            <div className="col-lg-6 centering">
              <img
                src="wookie.png"
                alt="Logo"
                width="100"
                height="24"
                className="d-inline-block align-text-top me-4  align-items-center"
              />
            </div>
            <div className="col-lg-6 centering justify-content-end">
              Made with ❤ by <strong className="ms-1"> Raja Saad</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
