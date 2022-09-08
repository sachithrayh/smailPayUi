import Banner from "../assets/images/banner-image.png";
import visa from "../assets/images/visa-img.png";
import paypal from "../assets/images/paypal-img.png";
import uatp from "../assets/images/uatp-img.png";
import amazon from "../assets/images/amazon-img.png";
import stripe from "../assets/images/stripe-img.png";
import Navbar from "./Navbar";

function Content() {
  return (
    <div className="App">
      {/* page banner */}
      <Navbar />

      <div className="row banner-section">
        <div className="col-md-6">
          <div className="text-section">
            <h1 className="page-first-section-title">
              <strong>Discover a Place</strong>
            </h1>
            <h1>
              <strong>to manage your</strong>
            </h1>
            <h1>
              <strong>Money Sefty</strong>
            </h1>
          
          <span className="banner-description">
            smailePay helps you manage money safty and
            <br /> easily so you will have pice of mind
          </span>
          <br />
          <button type="button" class="btn btn-success banner-button mt-4">
            Get Started
          </button>
          </div>
        </div>

        <div className="col-md-6 mt-5 banner-image">
          <img src={Banner} alt="banner Image" />
        </div>
      </div>

      {/* payment methodes section */}
      <div className="row mt-5">
        <div className="col">
          <img
            src={visa}
            alt="banner Image"
            width="200px"
            height="100px"
          />
        </div>
        <div className="col">
          <img src={paypal} alt="banner Image" />
        </div>
        <div className="col">
          <img src={amazon} alt="banner Image" />
        </div>
        <div className="col">
          <img src={uatp} alt="banner Image" />
        </div>
        <div className="col">
          <img src={stripe} alt="banner Image" />
        </div>
      </div>

      {/* Trust And Secure Section */}
      <div className="row mt-5">
        <div className="col">
          <h2 className="page-second-section-title">
            {" "}
            <strong>
              Trusted and Secure <br /> payment service{" "}
            </strong>
          </h2>
        </div>
        <div className="col">
          <span className="banner-two-description">
            We will provide the best service to you so that <br />
            you understand how to use and get to know <br />
            the features that we provide
          </span>
        </div>
      </div>

      <div className="row mt-5 mb-5 caard-section">
        <div className="col">
          <div class="card" width="18px">
            <div class="card-body">
              <span class="material-icons">verified_user</span>
              <h3 class="card-title">Safe Reliable</h3>
              <p class="card-text">
                We guarantee the safety of your money <br />
                of course we have been trusted
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card" width="18px">
            <div class="card-body">
              <span class="material-icons">wallet</span>
              <h3 class="card-title">Easy Transaction</h3>
              <p class="card-text">
                We have an easy-to-understand application <br />
                flow for you to use for transaction
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div class="card" width="18px">
            <div class="card-body">
              <span class="material-icons">join_full</span>
              <h3 className="card-title">Multiple method</h3>
              <p className="card-text">
                Smilepay helps you manage your <br />
                money safety and easily so you will
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
