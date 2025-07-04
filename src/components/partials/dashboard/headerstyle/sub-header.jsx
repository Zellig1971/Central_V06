import { memo } from "react";

//React-bootstrap
import { Row, Col, Container } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//Img
import topHeader from "/src/assets/images/dashboard/top-header.png";
import topHeader1 from "/src/assets/images/dashboard/top-header1.png";
import topHeader2 from "/src/assets/images/dashboard/top-header2.png";
import topHeader3 from "/src/assets/images/dashboard/top-header3.png";
import topHeader4 from "/src/assets/images/dashboard/top-header4.png";
import topHeader5 from "/src/assets/images/dashboard/top-header5.png";

const SubHeader = memo((props) => {
  return (
    <div className="iq-navbar-header" style={{ height: "215px" }}>
      <Container fluid className=" iq-container">
        <Row>
          <Col md="12">
            <div className="d-flex justify-content-between flex-wrap">
              <div>
                <h1>Hello Qompac!</h1>
                <p>
                  Experience a simple yet powerful way to build Dashboards with
                  Qompac UI.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <Link to="" className="btn btn-link btn-soft-light">
                  <svg
                    width="20"
                    className="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8251 15.2171H12.1748C14.0987 15.2171 15.731 13.985 16.3054 12.2764C16.3887 12.0276 16.1979 11.7713 15.9334 11.7713H14.8562C14.5133 11.7713 14.2362 11.4977 14.2362 11.16C14.2362 10.8213 14.5133 10.5467 14.8562 10.5467H15.9005C16.2463 10.5467 16.5263 10.2703 16.5263 9.92875C16.5263 9.58722 16.2463 9.31075 15.9005 9.31075H14.8562C14.5133 9.31075 14.2362 9.03619 14.2362 8.69849C14.2362 8.35984 14.5133 8.08528 14.8562 8.08528H15.9005C16.2463 8.08528 16.5263 7.8088 16.5263 7.46728C16.5263 7.12575 16.2463 6.84928 15.9005 6.84928H14.8562C14.5133 6.84928 14.2362 6.57472 14.2362 6.23606C14.2362 5.89837 14.5133 5.62381 14.8562 5.62381H15.9886C16.2483 5.62381 16.4343 5.3789 16.3645 5.13113C15.8501 3.32401 14.1694 2 12.1748 2H11.8251C9.42172 2 7.47363 3.92287 7.47363 6.29729V10.9198C7.47363 13.2933 9.42172 15.2171 11.8251 15.2171Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M19.5313 9.82568C18.9966 9.82568 18.5626 10.2533 18.5626 10.7823C18.5626 14.3554 15.6186 17.2627 12.0005 17.2627C8.38136 17.2627 5.43743 14.3554 5.43743 10.7823C5.43743 10.2533 5.00345 9.82568 4.46872 9.82568C3.93398 9.82568 3.5 10.2533 3.5 10.7823C3.5 15.0873 6.79945 18.6413 11.0318 19.1186V21.0434C11.0318 21.5715 11.4648 22.0001 12.0005 22.0001C12.5352 22.0001 12.9692 21.5715 12.9692 21.0434V19.1186C17.2006 18.6413 20.5 15.0873 20.5 10.7823C20.5 10.2533 20.066 9.82568 19.5313 9.82568Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Announcements
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* {{!-- rounded-bottom if not using animation --}} */}
      <div className="iq-header-img">
        <img
          src={topHeader}
          alt="header"
          className="theme-color-default-img img-fluid w-100 h-100 animated-scaleX"
          loading="lazy"
        />
        <img
          src={topHeader1}
          alt="header"
          className=" theme-color-blue-img img-fluid w-100 h-100 animated-scaleX"
          loading="lazy"
        />
        <img
          src={topHeader2}
          alt="header"
          className="theme-color-green-img img-fluid w-100 h-100 animated-scaleX"
          loading="lazy"
        />
        <img
          src={topHeader3}
          alt="header"
          className="theme-color-royal-blue-img img-fluid w-100 h-100 animated-scaleX"
          loading="lazy"
        />
        <img
          src={topHeader4}
          alt="header"
          className="theme-color-red-img img-fluid w-100 h-100 animated-scaleX"
          loading="lazy"
        />
        <img
          src={topHeader5}
          alt="header"
          className="theme-color-pink-img img-fluid w-100 h-100 animated-scaleX"
          loading="lazy"
        />
      </div>
    </div>
  );
});

SubHeader.displayName = "SubHeader";
export default SubHeader;
