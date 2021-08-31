import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/complogo.png";
import Footer from "./Footer";
import './css/footer.css';
import './css/feedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faCheck, faUser,faSearch,faQuestionCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
//import './css/style.css';

//import './feedscript.js';

const Feedback = () => {
    return (
        <div>
        
        <nav className="navbar static-top navbar-transparent navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} className="logo-fx" alt="..." />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">

              <li className="nav-item ">
                                <Link to="/" exact className="nav-link mr-4">
                                <FontAwesomeIcon icon={faHome} className="mr-2" />
                                Home <span className="sr-only">(current)</span></Link>

                            </li>

              <li className="nav-item">
                                <Link to="/feedback" exact className="nav-link mr-4"><FontAwesomeIcon icon={faUser} className="mr-2" />Feedback</Link>
                            </li>
                {/* {props.tokenUser ? (
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    <li className="nav-item">
                      <button className="btn btn-success d-flex d-row">
                        
                        <p className="my-0"><FontAwesomeIcon icon={faShoppingCart} 
                        className="align-self-center mr-2"/> Cart : {props.dataCart.length}</p>
                      </button>
                    </li>
                  </Link>
                ) : (
                  <li className="nav-item">
                    <button
                      onClick={() => noLoginCartNotification()}
                      className="btn btn-secondary d-flex d-row"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} 
                        className="align-self-center mr-2"/>
                      <p className="my-0">Cart : {props.dataCart.length}</p>
                    </button>
                  </li>
                )} */}

                {/* <li className="nav-item mx-4">
                  {NavLoginSuccess ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-success dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {`Hello, ${userData.username}`}
                      </button>
                      <div className="dropdown-menu">
                        <button
                          onClick={displayAboutModal}
                          className="dropdown-item text-success-s2"
                        >
                          About Developer <i className="fas fa-info-circle"></i>
                        </button>
                        <button
                          className="dropdown-item text-danger"
                          onClick={Logout}
                        >
                          Logout <i className="fas fa-sign-out-alt"></i>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={openLoginModal}
                      className="btn btn-success"
                    ><FontAwesomeIcon icon={faSignInAlt} 
                    className="align-self-center mr-2"/>
                      Sign In
                    </button>
                  )}
                </li> */}
              </ul>
            </div>
          </div>
        </nav>




            <div className="testimonial1 py-5 mt-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h4 className="my-3">Check out what our customers are saying...</h4>
              <h6 className="subtitle font-weight-normal">You can rely on our amazing services to ensure that you always look your best!</h6>
            </div>
          </div>
          {/* Row  */}
          <div className="row owl-carousel owl-theme testi1 mt-4">
            {/* item */}
            <div className="item col-md-6">
              <div className="card card-shadow border-1 mb-4">
                <div className="card-body">
                  <div className="position-relative thumb bg-success-gradiant d-inline-block text-white mb-4"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/1.jpg" alt="wrapkit" className="thumb-img position-absolute rounded-circle" /> Chinonye Joseph</div>
                  <h5 className="font-weight-light">WebVilla has the best customer service I've seen. Very pleasant staff and issues are resolved quickly.</h5>
                  <span className="devider d-inline-block my-3" />
                  <h6 className="font-weight-normal">Managing Director, JJC Limited</h6>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className="item col-md-6">
              <div className="card card-shadow border-1 mb-4">
                <div className="card-body">
                  <div className="position-relative thumb bg-success-gradiant d-inline-block text-white mb-4"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg" alt="wrapkit" className="thumb-img position-absolute rounded-circle" /> Michelle Anderson</div>
                  <h5 className="font-weight-light">Get the trendiest clothes at the most affordable prices on Webvilla. My go-to shop!</h5>
                  <span className="devider d-inline-block my-3" />
                  <h6 className="font-weight-normal">Surulere, Lagos</h6>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className="item col-md-6">
              <div className="card card-shadow border-1 mb-4">
                <div className="card-body">
                  <div className="position-relative thumb bg-success-gradiant d-inline-block text-white mb-4"><img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/3.jpg" alt="wrapkit" className="thumb-img position-absolute rounded-circle" /> Dennis Coker</div>
                  <h5 className="font-weight-light">I shop here almost every month. WebVilla clothes or nothing.</h5>
                  <span className="devider d-inline-block my-3" />
                  <h6 className="font-weight-normal">Yaba, Lagos</h6>
                </div>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className="item col-md-6">
              <div className="card card-shadow border-1 mb-4">
                <div className="card-body">
                  <div className="position-relative thumb bg-success-gradiant d-inline-block text-white mb-4"><img src="bp1.jpg" alt="wrapkit" className="thumb-img position-absolute rounded-circle" /> Mide Olatunji</div>
                  <h5 className="font-weight-light">A moderately sized clothing store. Anything you're looking for in terms of fashion can be found here.</h5>
                  <span className="devider d-inline-block my-3" />
                  <h6 className="font-weight-normal">Ikeja, Lagos.</h6>
                </div>
              </div>
            </div>
            {/* item */}
          </div>
        </div>
      </div>

        <div className="container-fluid bg-light" id="wrapper">
            <div className="contact3 py-5">
                <div className="row no-gutters">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card-shadow">
                                    <img src="2.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-box ml-3">
                                    <h1 className="font-weight-light mt-2">We'd Love to Hear From You!</h1>
                                    <form className="mt-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" type="email" placeholder="Email address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" type="text" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <textarea className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-primary mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-12 bg-light">
                                <div className="card mt-4 border-0 mb-4 bg-light">
                                    <div className="row bg-light">
                                        <div className="col-lg-4 col-md-4 bg-light">
                                            <div className="card-body d-flex align-items-center bg-light">
                                                <div className="mr-3 align-self-center bg-light">
                                                    <img src="icon1.png" alt="" />
                                                </div>
                                                <div className="bg-light">
                                                    <h6 className="font-weight-medium">Address</h6>
                                                    <p className>148/150 Bode Thomas Street,
                                                        <br />Surulere, Lagos.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="card-body d-flex align-items-center c-detail bg-light">
                                                <div className="mr-3 align-self-center">
                                                    <img src="icon2.png" alt="" />
                                                </div>
                                                <div >
                                                    <h6 className="font-weight-medium">Phone</h6>
                                                    <p className>123 456 789
                                                        <br /> 789 234 567</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="card-body d-flex align-items-center c-detail bg-light">
                                                <div className="mr-3 align-self-center">
                                                    <img src="icon3.png" alt="" />
                                                </div>
                                                <div>
                                                    <h6 className="font-weight-medium">Email</h6>
                                                    <p className>
                                                        info@webvilla.com
                                                        <br /> 123@webvilla.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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





export default Feedback;