import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jwt from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import mainBg from "../../assets/mainBackground.png";
import logo from "../../assets/complogo.png";
import Footer from "./Footer";
import './css/footer.css';
import Feedback from "./feedback";
import Carousel from "./Carousel";
import ProductField from "./Products";
import LoginModal from "./Login";
import AboutPage from "./AboutDeveloper";
import Particles from 'react-particles-js';
import "./css/carousel.css";
import "../Users.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faCheck, faUser,faSearch,faQuestionCircle, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


import { userLogout } from "../../actionCreators/LoginAction";

const Index = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [NavLoginSuccess, setNavLoginSuccess] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const loginSuccess = (boolean) => {
    setNavLoginSuccess(boolean);
  };

  if (localStorage.getItem("token-user")) {
    var userData = jwt(localStorage.getItem("token-user"));
  }

  const noLoginCartNotification = () => {
    toast.error("Please login first to continue", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const comingSoonNotification = () => {
    toast.success("This feature will come soon, Stay tuned!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const searchNotification = () => {
    toast.success("Discover the clothing item that you searched for below", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleSearchInput = (event) => {
    let { value } = event.currentTarget;
    setSearchInput(value);
  };

  const handleSearchSubmit = () => {
    setSubmitSearch(true);
    searchNotification();
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    // cause warning but needed to stop logout alert shows 2 times.
  };

  const closeLoginModal = (boolean) => {
    setShowLoginModal(boolean);
  };

  const Logout = () => {
    props.userLogout();
    setNavLoginSuccess(false);
  };

  const displayAboutModal = () => {
    setShowAbout(true);
  };

  const unDisplayAboutModal = (boolean) => {
    setShowAbout(boolean);
  };

  const picture = (image) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: 'no - repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: "center",
      height: '100%',
    };
  };

  return (
    <div

    
      style={{
        fontFamily: "Karla,sans-serif",
        backgroundColor: "#f8f9fa",
      }}
    >

<Particles className="particles-js"
                params={{
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: 'true',
                                value_area: 600
                            }
                        },
                        color: {
                            value: "#fff"
                        },
                        shape: {
                            type: "image",
                            stroke: {
                                width: 3,
                                color: "#fff"
                            },
                            polygon: {
                                nb_sides: 5
                            },
                            image: {
                                src: "testburst.png",
                                width: 100,
                                height: 100,
                                color: 'rgba(240, 117, 33, 1)'
                            }
                        },
                        opacity: {
                            value: 0.7,
                            random: 'false',
                            anim: {
                                enable: 'false',
                                speed: 1,
                                opacity_min: 0.1,
                                sync: 'false'
                            }
                        },
                        size: {
                            value: 5,
                            random: 'true',
                            anim: {
                                enable: 'false',
                                speed: 20,
                                size_min: 0.1,
                                sync: 'false'
                            }
                        },
                        line_linked: {
                            enable: 'false',
                            distance: 50,
                            color: "#ffffff",
                            opacity: 0.6,
                            width: 1
                        },
                        move: {
                            enable: 'true',
                            speed: 5,
                            direction: "bottom",
                            random: 'true',
                            straight: 'false',
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: 'true',
                                rotateX: 300,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: 'true',
                                mode: "bubble"
                            },
                            onclick: {
                                enable: 'true',
                                mode: 'repulse'
                            },
                            resize: 'true'
                        },
                        modes: {
                            grab: {
                                distance:15,
                                line_linked: {
                                    opacity:1
                                }
                            },
                            bubble: {
                                distance:20,
                                size:4,
                                duration:2,
                                opacity:8,
                                speed:3
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.2
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: 'true'
                }
                    
                }style={{
                    position: 'fixed', width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(117, 114, 113, 0.8) 10%, rgba(40, 49, 77, 0.8) 30%, rgba(29, 35, 71, 0.8) 50%, rgba(19, 25, 28, 0.8) 80%, rgba(15, 14, 14, .8) 100%), url(https://38.media.tumblr.com/tumblr_m00c3czJkM1qbukryo1_500.gif)',backgroundSize: 'cover',backgroundPosition: '50% 50%',
                    backgroundRepeat: 'repeat',top: '0', display: 'block',zIndex:'0',verticalAlign:'bottom'}}/>

      
      {/* This is the carousel part */}
      



      {/* start header - part1 */}
      <div className="main-bg-height" style={picture(mainBg)}>
        <nav className="navbar static-top navbar-transparent navbar-expand-lg navbar-light" >
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

                            {/* <form className="form-inline mb-3">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <br/><br/><br/>
                                <button className="btn btn-outline-success mr-2" type="submit">
                                    <FontAwesomeIcon icon={faSearch} className="mr-2" />Search</button>
                            </form> */}
                {props.tokenUser ? (
                  <li className="nav-item mb-2 mr-3">
                  <Link to="/cart" style={{ textDecoration: "none" }}>
                    
                      <button className="btn btn-success d-flex d-row">
                        
                        <p className="my-0"><FontAwesomeIcon icon={faShoppingCart} 
                        className="align-self-center mr-2"/> Cart : {props.dataCart.length}</p>
                      </button>
                    </Link>
                    </li>
                  
                ) : (
                  <li className="nav-item mb-2 mr-3">
                    <button
                      onClick={() => noLoginCartNotification()}
                      className="btn btn-secondary d-flex d-row"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} 
                        className="align-self-center mr-2"/>
                      <p className="my-0">Cart : {props.dataCart.length}</p>
                    </button>
                  </li>
                )}

                <li className="nav-item">
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
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="container mt-4">
        
                <div className="carousel ">
                    <div className="carousel__face"><span className="car_text">This is something</span></div>
                    <div className="carousel__face"><span className="car_text">Very special</span></div>
                    <div className="carousel__face"><span className="car_text">Special is the key</span></div>
                    <div className="carousel__face"><span className="car_text">For you</span></div>
                    <div className="carousel__face"><span className="car_text">Just give it</span></div>
                    <div className="carousel__face"><span className="car_text">A try</span></div>
                    <div className="carousel__face"><span className="car_text">And see</span></div>
                    <div className="carousel__face"><span className="car_text">How IT Works</span></div>
                    <div className="carousel__face"><span className="car_text">Woow</span></div>
                </div>
            </div> */}

        <ToastContainer />

        <div className="container">
          <div className="row mt-2 mb-2">
            <div className="col-md-4 justify-content-center"></div>
            
            
            <div className="col-md-4 justify-content-end mx-auto">
              <div className="carousel">
                <div className="carousel__face"><span className="car_text">This is something</span></div>
                <div className="carousel__face"><span className="car_text">Very special</span></div>
                <div className="carousel__face"><span className="car_text">Special is the key</span></div>
                <div className="carousel__face"><span className="car_text">For you</span></div>
                <div className="carousel__face"><span className="car_text">Just give it</span></div>
                <div className="carousel__face"><span className="car_text">A try</span></div>
                <div className="carousel__face"><span className="car_text">And see</span></div>
                <div className="carousel__face"><span className="car_text">How IT Works</span></div>
                <div className="carousel__face"><span className="car_text">Woow</span></div>
              </div>
            </div>
            <div className="col-md-4 justify-content-center"></div>
            </div>
            <div className="row mt-5">
             <div className="col-md-2"></div> 
            <div className="col-md-8 justify-content-evenly mt-2">
        {/* <div className="vertical-center "> */}
        <p>

                <br /> <br /> <br /> <br /> <br /> <br /> 
        </p>
          <h3
            className="display-4 font-weight-bold text-center mt-5"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Shop Elegant & Fantastic Fashion!
          </h3>
          <p className="text-center text-secondary ">
            Ready to wear dresses tailored for you from online. Hurry up while
            stock lasts.
          </p>
        {/* </div> */}
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control py-4"
              placeholder="Search the fashion name that you want here"
              name="searchinput"
              onChange={handleSearchInput}
              onKeyPress={(event) =>
                event.key === "Enter" ? handleSearchSubmit() : null
              }
            />
            <div className="input-group-append">
              <button
                className="btn btn-success px-4"
                type="button"
                id="button-addon2"
                onClick={handleSearchSubmit}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
            </div>
            </div>
            <div className="col-md-2 mb-5"></div>
          </div>
       
      
      {/* start header - part 1 */}

      {/* carousel-brochure */}
      {/* <div className="container mt-5"> */}
        <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-8 justify-content-left">
        <Carousel/>
        </div>
            <div className="col-md-2"></div>
        </div>
      {/* </div> */}
      {/* carousel-brochure */}

      {/* part 3 - content */}
      {/* <div className="container"> */}
        <div className="row mb-5">
          
          {/* <div className="col-md-3 mt-3">
             <div className="list-group">
              <h5 className="ml-3 text-secondary font-weight-bold mb-3">
                Gender
              </h5>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i className="fas fa-male mr-5 fa-lg align-self-center"></i>
                Man
              </button>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i className="fas fa-female mr-5 fa-lg align-self-center"></i>
                Women
              </button>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-4"
              >
                <div style={{ marginRight: "2rem" }}>
                  <i className="fas fa-male mr-2 fa-lg align-self-center"></i>
                  <i className="fas fa-female fa-lg align-self-center"></i>
                </div>
                Both
              </button>

              <h5 className="ml-3 text-secondary font-weight-bold mb-3">
                Type
              </h5>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i className="fas fa-circle mr-5 fa-sm align-self-center"></i>
                Tops
              </button>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row mb-2"
              >
                <i className="fas fa-circle mr-5 fa-sm align-self-center"></i>
                Bottom
              </button>
              <button
                onClick={comingSoonNotification}
                type="button"
                className="list-group-item list-group-item-action d-flex d-row"
              >
                <i className="fas fa-circle mr-5 fa-sm align-self-center"></i>
                Outer Wear
              </button>
            </div> 
          </div> */}
          
          <div className="col-md-2"></div>
          <div className="col-md-8 mt-5">
            <ProductField
              searchInput={searchInput}
              submitSearch={submitSearch}
            />
          </div>
          <div className="col-md-2"></div>
        </div>
      {/* </div> */}
        </div>

      {/* Footer */}
      {/* <hr className="horizontal-line" /> */}
      <Footer/>
      {/* Footer */}
        
      {/* Modals */}
      <LoginModal
        showLoginModal={showLoginModal}
        closeLoginModal={closeLoginModal}
        loginSuccess={loginSuccess}
      />
      <AboutPage
        showAbout={showAbout}
        unDisplayAboutModal={unDisplayAboutModal}
      />
      {/* Modals */}
    </div>
    </div>
    
  );
};
const mapStateToProps = (state) => {
  return {
    tokenUser: state.LoginReducer.tokenUser,
    dataCart: state.UserReducer.dataCart,
  };
};

const mapDispatchToProps = {
  userLogout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
