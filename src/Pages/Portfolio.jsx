import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Portfolio() {
  return (
    <div className="wrapper">
      <div className="content">
        <Navbar />
        <h2 className="mt-5 mb-5 d-flex justify-content-center">Portfolio</h2>
        <div className="container portfolio">
          <div className="area1 area">
            <Link to="/shop">
              <div id="box1" className="box">
                <img src="box1.jpg" alt="" />
              </div>
            </Link>
            <Link to="/shop">
              <div id="box4" className="box">
                <img src="box4.jpg" alt="" />
              </div>
            </Link>
            <Link to="/shop">
              <div id="box6" className="box">
                <img src="box6.jpg" alt="" />
              </div>
            </Link>
          </div>
          <div className="area2 area">
            <Link to="/shop">
              <div id="box2" className="box">
                <img src="box2.jpg" alt="" />
              </div>
            </Link>
            <Link to="/shop">
              <div id="box7" className="box">
                <img src="box7.jpg" alt="" />
              </div>
            </Link>
          </div>
          <div className="area3 area">
            <Link to="/shop">
              <div id="box3" className="box">
                <img src="box3.jpg" alt="" />
              </div>
            </Link>
            <Link to="/shop">
              <div id="box8" className="box">
                <img src="box8.jpg" alt="" />
              </div>
            </Link>
            <Link to="/shop">
              <div id="box5" className="box">
                <img src="box5.jpg" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
