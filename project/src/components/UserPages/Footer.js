import React, { useState } from "react";
import logoHead from "../../assets/complogo.png";
import AboutPage from "./AboutDeveloper";
import './css/footer.css';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer=()=>{
  return(
<div className="footerbody">
          {/* <footer id="dk-footer" className="dk-footer">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12 col-lg-4">
                          <div className="dk-footer-box-info mt-5">
                              <a href="index.html" className="footer-logo">
                                  <img src={logoHead} alt="footer_logo" className="img-fluid" />
                              </a>
                              <p className="footer-info-text" style={{ color: '#ccc' }}>
                                  We deliver the best and newest pieces in fashion at the most affordable prices. You definitely do not want to miss out!
                              </p>
                              <div className="footer-social-link">
                                  <h3>Follow us</h3>
                                  <ul>
                                      <li>
                                          <a href="#">
                                              <i className="fa fa-facebook" />
                                              
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <i className="fa fa-twitter" />
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <i className="fa fa-google-plus" />
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <i className="fa fa-linkedin" />
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <i className="fa fa-instagram" />
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              
                          </div>
                          
                          <div className="footer-awarad">
                              <img src="images/icon/best.png" alt="" />
                            
                          </div>
                      </div>
                      
                      <div className="col-md-12 col-lg-8">
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="contact-us">
                                      <div className="contact-icon">
                                          <i className="fa fa-map-o" aria-hidden="true" style={{ marginTop: '20px' }} />
                                      </div>
                                      
                                      <div className="contact-info">
                                          <h3>Surulere, Lagos</h3>
                                          <p className="footp">148/150 Bode Thomas Street</p>
                                      </div>
                            
                                  </div>
                                  
                              </div>
                              
                              <div className="col-md-6">
                                  <div className="contact-us contact-us-last">
                                      <div className="contact-icon">
                                          <i className="fa fa-volume-control-phone" aria-hidden="true" style={{marginTop:'20px'}} />
                                      </div>
                                      
                                      <div className="contact-info">
                                          <h3>123 456 789</h3>
                                          <p className="footp">Give us a call</p>
                                      </div>
                                      
                                  </div>
                                  
                              </div>
                        
                          </div>
                          
                          <div className="row">
                              <div className="col-md-12 col-lg-6">
                                  <div className="footer-widget footer-left-widget">
                                      <div className="section-heading">
                                          <h3>Useful Links</h3>
                                          <span className="animate-border border-black" />
                                      </div>
                                      <ul>
                                          <li>
                                              <a href="#">Cart</a>
                                          </li>
                                          <li>
                                              <a href="#">Checkout</a>
                                          </li>
                                          <li>
                                              <a href="#">Feedback</a>
                                          </li>
                                          <li>
                                              <a href="#">Services</a>
                                          </li>
                                      </ul>
                                      <ul>
                                          <li>
                                              <a href="#">Contact us</a>
                                          </li>
                                          <li>
                                              <a href="#">Blog</a>
                                          </li>
                                          <li>
                                              <a href="#">Testimonials</a>
                                          </li>
                                          <li>
                                              <a href="#">Faq</a>
                                          </li>
                                      </ul>
                                  </div>
                                  
                              </div>
                              
                              <div className="col-md-12 col-lg-6">
                                  <div className="footer-widget">
                                      <div className="section-heading">
                                          <h3>Subscribe</h3>
                                          <span className="animate-border border-black" />
                                      </div>
                                      <p className="footp">
                                          WebVilla is here for you always. Wouldn't you like to hear more from us?</p>
                                      <form action="#">
                                          <div className="form-row">
                                              <div className="col dk-footer-form">
                                                  <input type="email" className="form-control" placeholder="Email Address" />
                                                  <button type="submit">
                                                      <i className="fa fa-send" />
                                                  </button>
                                              </div>
                                          </div>
                                      </form>
        
                                  </div>
                                  
                              </div>
                          </div
                      </di
                  </div>
            
              </div>
              
              <div className="copyright">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6">
                              <span>Copyright © 2021, All Right Reserved WebVilla</span>
                          </div>
                          
                          <div className="col-md-6">
                              <div className="copyright-menu">
                                  <ul>
                                      <li>
                                          <a href="#">Home</a>
                                      </li>
                                      <li>
                                          <a href="#">Terms</a>
                                      </li>
                                      <li>
                                          <a href="#">Privacy Policy</a>
                                      </li>
                                      <li>
                                          <a href="#">Contact</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          
                      </div>
                    
                  </div>
                  
              </div>
              

          </footer> */}

          <footer>
              <div className="container pt-5 border-bottom">
                  <div className="row">
                      <div className="mb-5 align-content-center float-left">
                          <a href="#"><img src="complogo.png" classname="img-thumbnail" width="60%" /></a>
                      </div>
                      <div className="col-md-9 col-sm-12">
                          <div className="col-md-3 col-sm-6 col-6 p-0 float-left mb-3 ml-2">
                              <h5 className="mb-3 font-weight-bold text-uppercase">More Links</h5>
                              <span className="mb-4 animate-border border-black" />
                              <ul className="list-group">
                                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#">Cart</a></li>
                                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#">Feedback</a></li>
                                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#">Services</a></li>
                              </ul>
                          </div>
                          {/* <div class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left ml-2">
                        <h5 class="mb-3 font-weight-bold text-uppercase">Developers</h5>
                        <span class="mb-4 animate-border border-black"></span>
                        <ul class="list-group">
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a
                                    href="https://github.com/naologic">Open Source</a></li>
                            <li class="list-group-item bg-transparent border-0 p-0 mb-2"><a
                                    href="https://stackshare.io/naologic">Technology</a></li>
                        </ul>
                    </div> */}
                          <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left ml-2">
                              <h5 className="mb-3 font-weight-bold text-uppercase">Company</h5>
                              <span className="mb-4 animate-border border-black" />
                              <ul className="list-group">
                                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#">About</a></li>
                                  <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="#"> Blog</a></li>
                              </ul>
                          </div>
                          <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left ml-2">
                              <h5 className="mb-3 font-weight-bold text-uppercase">Connect</h5>
                              <span className="mb-4 animate-border border-black" />
                              <ul className="list-group">
                                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                      <a href="https://www.linkedin.com/in/anjolaoluwa-olutomilayo/"><i className="fa fa-linkedin mr-1" />
                                          LinkedIn</a>
                                  </li>
                                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                      <a href="https://github.com/anjielayo" target="_blank"><i className="fa fa-github mr-1" />
                                          Github</a>
                                  </li>
                                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                      <a href="#" target="_blank"><i className="fa fa-facebook mr-1" /> Facebook</a>
                                  </li>
                                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                                      <a href="#" target="_blank"><i className="fa fa-youtube mr-1" /> YouTube</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <div className="py-4 d-flex justify-content-center align-items-center">
                              <a className="mr-4">Copyright © 2021, All Right Reserved WebVilla</a>
                              <a className="mr-4" href="#">Home</a>
                              <a className="mr-4" href="#">Privacy Policy</a>
                              <a className="mr-4" href="#">Terms &amp; Conditions</a>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
</div>)
}
export default Footer;
// const Footer = () => {
//   const [emailInput, setEmailInput] = useState("");
//   const userSendGmailNotification = () => {
//     toast.success(
//       "Thanks for trusting us! We will send any latest information from S2 Boutique ASAP.",
//       {
//         position: toast.POSITION.TOP_CENTER,
//         autoClose: 7000,
//       }
//     );
//   };
//   const nullValueEmailNotification = () => {
//     toast.error("There are no email to subscribe.", {
//       position: toast.POSITION.TOP_CENTER,
//       autoClose: 3000,
//     });
//   };

//   const handleUserSendEmailInput = (event) => {
//     let { value } = event.currentTarget;
//     setEmailInput(value);
//   };

//   const userSendGmail = () => {
//     //  email validation
//     var checkEmail = emailInput.includes("@");
//     if (emailInput === "" || !checkEmail) {
//       nullValueEmailNotification();
//     } else {
//       userSendGmailNotification();
//     }
//   };
//   return (
//     <div className="mx-5 my-5">
//       <div className="row">
//         <div className="col-md-2">
//           <img src={logoHead} alt="..." className="w-100" />
//         </div>
//         <div className="col-md-3">
//           <p className="footer-title">S2 BOUTIQUE</p>
//           <small>
//             Look inside trendy,elegant & fantastic fashion in Batam. Tell the
//             world who you are with style without having to speak.
//           </small>
//           <div className="mt-4">
//             <small className="pt-4">© 2020 S2-Boutique Batam</small>
//           </div>
//         </div>

//         <div className="col-md-3">
//           <p className="footer-title">REACH OUT</p>
//           <button className="btn btn-outline-success mr-3">
//             <i className="fab fa-whatsapp fa-lg" />
//           </button>

//           <button className="btn btn-outline-instagram mr-3">
//             <i className="fab fa-instagram fa-lg" />
//           </button>
//           <button className="btn btn-outline-primary mr-3">
//             <i className="fab fa-facebook-square fa-lg" />
//           </button>

//           <button className="btn btn-outline-danger">
//             <i className="far fa-envelope fa-lg" />
//           </button>
//         </div>
//         <div className="col-md-4">
//           <p className="footer-title">SUBSCRIBE</p>
//           <small>
//             Don't miss out the Latest Sale, Discounts, and New Arrivals !!
//           </small>
//           <div className="input-group mt-3 mb-2">
//             <input
//               type="email"
//               className="form-control"
//               name="emailUser"
//               placeholder="Your Gmail/Email"
//               onChange={handleUserSendEmailInput}
//             />
//             <div className="input-group-append">
//               <button
//                 className="btn btn-outline-success"
//                 type="button"
//                 id="button-addon2"
//                 onClick={userSendGmail}
//               >
//                 <i className="fas fa-chevron-circle-right"></i>
//               </button>
//             </div>
//           </div>
//           <small className="text-secondary">
//             We will not share your gmail/whatsapp to anyone else.
//           </small>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Footer;
