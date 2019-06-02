import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "5%" }}>
        <div className="row" style={{ marginTop: "5%" }}>
          <div className="col s7" style={{ marginRight: "2%" }}>
            <div className="row">
              <div className="col">
                <h5
                  style={{
                    fontWeight: "bolder",
                    fontFamily: "Montserrat"
                  }}
                >
                  My Courses
                </h5>
              </div>
            </div>

            <div className="row" style={{ border: "1px solid #f5f5f5" }}>
              <div className="col s12">
                <div
                  className="row"
                  style={{
                    paddingBottom: "0",
                    marginBottom: "0",
                    marginLeft: "-19px"
                  }}
                >
                  <div className="col s3">
                    <img
                      src="https://prod-edxapp.edx-cdn.org/asset-v1:HarvardX+PH125.1x+1T2018+type@thumbnail+block@course_image-375x200.jpg"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    className="col s6"
                    style={{ paddingTop: "2%", paddingLeft: "7%" }}
                  >
                    <h5
                      style={{
                        fontFamily: "Montserrat",
                        color: "blue",
                        paddingLeft: "5%"
                      }}
                    >
                      Data Science: R Basics
                    </h5>
                    <p>IITBX - PH125.1x</p>
                    <p>Started - May 12, 2019</p>
                  </div>
                  <div className="col s3">
                    <a
                      class="btn"
                      style={{
                        backgroundColor: "white",
                        marginTop: "5%",
                        border: "1px solid #0000ff",
                        marginTop: "30%"
                      }}
                    >
                      <span style={{ color: "#0000ff" }}>Resume Course</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{ border: "1px solid #f5f5f5" }}>
              <div className="col s12">
                <div
                  className="row"
                  style={{
                    paddingBottom: "0",
                    marginBottom: "0",
                    marginLeft: "-19px"
                  }}
                >
                  <div className="col s3">
                    <img
                      src="https://prod-edxapp.edx-cdn.org/asset-v1:Microsoft+DEV234x+3T2017a+type@thumbnail+block@DEV234x_thumbnail-png-375x200.jpg"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    className="col s6"
                    style={{ paddingTop: "2%", paddingLeft: "7%" }}
                  >
                    <h5
                      style={{
                        fontFamily: "Montserrat",
                        color: "blue",
                        paddingLeft: "5%"
                      }}
                    >
                      Asynchronous Programming with Javascript
                    </h5>
                    <p>IITKX - PH125.1x</p>
                    <p>Started - May 25, 2019</p>
                  </div>
                  <div className="col s3">
                    <a
                      class="btn"
                      style={{
                        backgroundColor: "white",
                        marginTop: "5%",
                        border: "1px solid #0000ff",
                        marginTop: "30%"
                      }}
                    >
                      <span style={{ color: "#0000ff" }}>
                        <Link to="/course/js" style={{ color: "#0000ff" }}>
                          Resume Course
                        </Link>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" style={{ border: "1px solid #f5f5f5" }}>
              <div className="col s12">
                <div
                  className="row"
                  style={{
                    paddingBottom: "0",
                    marginBottom: "0",
                    marginLeft: "-19px"
                  }}
                >
                  <div className="col s3">
                    <img
                      src="https://prod-edxapp.edx-cdn.org/asset-v1:Microsoft+DEV277x+2T2017+type@thumbnail+block@Dev277x-png-375x200.jpg"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    className="col s6"
                    style={{ paddingTop: "2%", paddingLeft: "7%" }}
                  >
                    <h5
                      style={{
                        fontFamily: "Montserrat",
                        color: "blue",
                        paddingLeft: "5%"
                      }}
                    >
                      Object Oriented Programming in Java
                    </h5>
                    <p>Microsoft - DEV277x</p>
                    <p>Started - May 1, 2019</p>
                  </div>
                  <div className="col s3">
                    <a
                      class="btn"
                      style={{
                        backgroundColor: "white",
                        marginTop: "5%",
                        border: "1px solid #0000ff",
                        marginTop: "30%"
                      }}
                    >
                      <span style={{ color: "#0000ff" }}>Resume Course</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ border: "1px solid #f5f5f5" }}>
              <div className="col s12">
                <div
                  className="row"
                  style={{
                    paddingBottom: "0",
                    marginBottom: "0",
                    marginLeft: "-19px"
                  }}
                >
                  <div className="col s3">
                    <img
                      src="https://prod-edxapp.edx-cdn.org/asset-v1:W3Cx+HTML5.0x+1T2017+type@thumbnail+block@HTML5_CSS-Fundamentals-png-375x200.jpg"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    className="col s6"
                    style={{ paddingTop: "2%", paddingLeft: "7%" }}
                  >
                    <h5
                      style={{
                        fontFamily: "Montserrat",
                        color: "blue",
                        paddingLeft: "5%"
                      }}
                    >
                      HTML5 and CSS Fundamentals
                    </h5>
                    <p>W3Cx - HTML5.0x</p>
                    <p>Ended - May 2, 2019</p>
                  </div>
                  <div className="col s3">
                    <a
                      class="btn"
                      style={{
                        backgroundColor: "white",
                        marginTop: "5%",
                        border: "1px solid #0000ff",
                        marginTop: "30%"
                      }}
                    >
                      <span style={{ color: "#0000ff" }}>Resume Course</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ border: "1px solid #f5f5f5" }}>
              <div className="col s12">
                <div
                  className="row"
                  style={{
                    paddingBottom: "0",
                    marginBottom: "0",
                    marginLeft: "-19px"
                  }}
                >
                  <div className="col s3">
                    <img
                      src="https://prod-edxapp.edx-cdn.org/asset-v1:IITBombayX+CS213.2x+1T2017+type@thumbnail+block@CS213x_Banner-png-375x200.jpg"
                      alt=""
                      style={{ height: "100%" }}
                    />
                  </div>
                  <div
                    className="col s6"
                    style={{ paddingTop: "2%", paddingLeft: "7%" }}
                  >
                    <h5
                      style={{
                        fontFamily: "Montserrat",
                        color: "blue",
                        paddingLeft: "5%"
                      }}
                    >
                      Implementation of Data Structures
                    </h5>
                    <p>IITBombayX - CS213.2x</p>
                    <p>Ended - May 12, 2019</p>
                  </div>
                  <div className="col s3">
                    <a
                      class="btn"
                      style={{
                        backgroundColor: "white",
                        marginTop: "5%",
                        border: "1px solid #0000ff",
                        marginTop: "30%"
                      }}
                    >
                      <span style={{ color: "#0000ff" }}>Resume Course</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col s4"
            style={{
              border: "1px solid #f5f5f5",
              padding: "5%",
              marginTop: "4.2%"
            }}
          >
            <span
              style={{
                fontSize: "120%",
                fontWeight: "bold",
                fontFamily: "Montserrat"
              }}
            >
              Browse recently launched courses and see what's new in your
              favorite subjects.
            </span>
            <br />
            <a
              class="btn"
              style={{
                backgroundColor: "white",
                marginTop: "5%",
                border: "1px solid #0000ff"
              }}
            >
              <i class="material-icons left blue-text">search</i>
              <span style={{ color: "#0000ff" }}>Explore New Courses</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
