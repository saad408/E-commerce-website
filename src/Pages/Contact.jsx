import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Contact() {
  return (
    <div className="wrapper">
      <div className="content">
        <Navbar />

        <div className="container map mt-5 mb-5">
          <iframe
            className="map-size"
            title="1"
            zoom="12"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13611.660537710699!2d74.3257873991116!3d31.471520612414334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1708169945921!5m2!1sen!2s"></iframe>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 contact">
              <i class="bi bi-telephone icon "></i>
              <h3 className="mb-4">Lets have a chat</h3>
              <span className="light-text">+777 2345 7885</span>
              <span className="light-text">+777 2345 7884</span>
            </div>
            <div className="col-lg-4 contact marginn">
              <i class="bi bi-geo-alt icon"></i>
              <h3 className="mb-4">Visit our location</h3>
              <p className="contact-box light-text">
                2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United
                States of America
              </p>
            </div>
            <div className="col-lg-4 contact">
              <i class="bi bi-clock icon"></i>
              <h3 className="mb-4">Work time</h3>
              <span className="light-text">7 Days a week</span>
              <span className="light-text">from 10 AM to 6 PM</span>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 input-contact">
              <input
                type="text"
                className="input-checkout"
                placeholder="Your name"
              />
              <input
                type="text"
                className="input-checkout"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="input-checkout"
                placeholder="Subject"
              />
            </div>
            <div className="col-lg-6 input-contact">
              <textarea
                className="input-checkout input-contact-message"
                rows={5}
                placeholder="Enter your message here..."
              />
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center mt-4">
          <button type="button" class="btn btn-primary jeee">
            Send Message
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
