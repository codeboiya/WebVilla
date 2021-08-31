import React from "react";
import logo from "../../assets/logo.png";
import devPic from "../../assets/fred2.png";
import { Modal } from "react-bootstrap";

const AboutDeveloper = (props) => {
  const closeAboutModal = () => {
    props.unDisplayAboutModal(false);
  };
  return (
    <Modal size="md" show={props.showAbout} onHide={closeAboutModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={logo} alt="..." style={{ width: "33%" }} />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ padding: "2rem 4rem" }}>
        <div style={{ fontFamily: "Karla,sans-serif" }}>
          <div className="d-flex justify-content-center">
            <img src={devPic} alt="..." className="w-50 rounded-circle" />
          </div>
          <div>
            <h4 className="mt-3 mb-0 font-weight-bold text-center">
              New Horizons
            </h4>
            <div className="d-flex justify-content-center">
              <small className="text-secondary">Developer of WebVilla</small>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <a
                className="btn btn-outline-github rounded-circle px-2 pt-2 mr-2"
                style={{ width: "2.5rem", height: "2.5rem" }}
                href="https://github.com/anjielayo"
                target="blank"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="btn btn-outline-primary rounded-circle px-2 pt-2 mr-2"
                style={{ width: "2.5rem", height: "2.5rem" }}
                href="https://www.linkedin.com/in/anjolaoluwa-olutomilayo/"
                target="blank"
              >
                <i className="fab fa-linkedin" />
              </a>

              <button
                className="btn btn-outline-danger rounded-circle p-2"
                style={{ width: "2.5rem", height: "2.5rem", cursor: "default" }}
                type="button"
                data-toggle="tooltip"
                data-placement="top"
                title="anjolaolutomilayo@gmail.com"
              >
                <i className="far fa-envelope" />
              </button>
            </div>
          </div>
          <p className="mt-3 text-justify text-secondary">
            WebVilla is developed by Group 1 of the New Horizons Web Development class.
            <br />
            <br />
            
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default AboutDeveloper;
