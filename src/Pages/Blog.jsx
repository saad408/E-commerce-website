import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Blog() {
  return (
    <div className="wrapper">
      <div className="content">
        <Navbar />

        <div className="container">
          <h2 className="mt-5 mb-5 d-flex justify-content-center">The Blog</h2>

          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 card-height mb-4">
              <div class="card  h-100 card-height">
                <img src="b1.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body cart-details1">
                  <h5 class="card-title d-flex justify-content-center">
                    Fashion
                  </h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis qui, ipsam quae ab pariatur veniam repudiandae,
                    magnam hic nobis expedita magni voluptates. Odio atque et,
                    autem quasi reiciendis perspiciatis minus?
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                    Last updated: 29 December, 2023
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 card-height mb-4">
              <div class="card h-100 card-height">
                <img src="b2.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body cart-details2">
                  <h5 class="card-title d-flex justify-content-center">Men</h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo harum repellat, ipsa neque quisquam accusantium,
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                    Last updated: 3 January, 2024
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 card-height mb-4">
              <div class="card h-100 card-height">
                <img src="b3.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body cart-details3">
                  <h5 class="card-title d-flex justify-content-center">
                    Unique
                  </h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias illum, tenetur voluptatem nemo, omnis possimus, cum
                    nisi ex sequi
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                    Last updated: 2 January, 2024
                  </small>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-12 card-height mb-4">
              <div class="card h-100 card-height">
                <img src="b4.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body cart-details4">
                  <h5 class="card-title d-flex justify-content-center">
                    Women
                  </h5>
                  <p class="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus, doloremque ab? Animi incidunt earum nulla nemo
                    aspernatur, repudiandae perspiciatis dignissimos
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                    Last updated: 26 January, 2024
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 card-height mb-4">
              <div class="card h-100 card-height">
                <img src="b5.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body cart-details5">
                  <h5 class="card-title d-flex justify-content-center">
                    Fashion
                  </h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, accusamus
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                    Last updated: 12 Febuary, 2024
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 card-height mb-4">
              <div class="card h-100 card-height">
                <img src="b6.jpg" class="card-img-top" alt="..."></img>
                <div class="card-body cart-details4 cart-details-6">
                  <h5 class="card-title d-flex justify-content-center">Tips</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis autem corrupti vitae magni! Iusto ratione ipsam
                    saepe, inventore quos expedita odit quidem iure explicabo
                    nostrum option lore
                  </p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">
                    Last updated: 14 Febuary, 2024
                  </small>
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

export default Blog;
