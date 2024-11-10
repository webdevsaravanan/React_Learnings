import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./logo.svg";
function Show() {
  return (
    <div>
      <div className="container mt-5">
        <h2>Featured Cards</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src={img} className="card-img-top" alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">
                  This is a featured card with some content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={img} className="card-img-top" alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">
                  Another featured card with more content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={img} className="card-img-top" alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">
                  This is the third featured card with additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2>Contact Us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              placeholder="Your message here"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Show;
