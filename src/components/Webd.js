import React, { Component } from "react";
import nodejs from "../nodejs.jpg";
import ins from "../ins.jpg";
export default class Webd extends Component {
  render() {
    return (
      <div
        style={{
          background: "#5a7bc4",
          height: "200px",
          borderTop: "5px solid white"
        }}
        class="container-fluid"
      >
        <div className="row">
          <div
            className="col offset-s3 white-text"
            style={{ paddingTop: "1%" }}
          >
            <h4>Web Development with Node.js </h4>
          </div>
        </div>
        <div className="row">
          <div className="col offset-s3 white-text">
            <a
              class="waves-effect waves-light btn"
              style={{
                backgroundColor: "#4C00FF",
                border: "3px solid white",
                borderRadius: "10px",
                paddingBottom: "22%"
              }}
            >
              Pay and register
            </a>
          </div>
        </div>
        <div className="row" style={{ marginTop: "8%" }}>
          <div className="col s12">
            <div className="row">
              <div className="col s8">
                <div className="row">
                  <div className="col s12">
                    <h5
                      style={{
                        fontWeight: "bolder",
                        fontWeight: "bolder",
                        fontFamily: "Montserrat"
                      }}
                    >
                      What you will learn?
                    </h5>
                    <p
                      style={{
                        marginLeft: "30%",
                        width: "40%",
                        fontSize: "120%"
                      }}
                    >
                      You’ll come to understand coding logic, and learn how to
                      think like a dev by building software from the ground up.
                      Our program will provide you with mentorship, data-driven
                      curriculum and a top notch learning environment that will
                      launch you into your first developer role. By the end,
                      you’ll be creating beautiful apps and understanding web
                      development fundamentals for both front and back end.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <h5
                      style={{
                        fontWeight: "bolder",
                        fontWeight: "bolder",
                        fontFamily: "Montserrat",
                        marginBottom: "3%"
                      }}
                    >
                      Build your skills!
                    </h5>
                    <div>
                      <a
                        class="waves-effect waves-light btn white black-text "
                        style={{ paddingRight: "2%" }}
                      >
                        HTML
                      </a>
                      <a class="waves-effect waves-light btn white black-text">
                        CSS
                      </a>
                      <a class="waves-effect waves-light btn white black-text">
                        Javascript
                      </a>
                      <a class="waves-effect waves-light btn white black-text">
                        Node.js
                      </a>
                      <a class="waves-effect waves-light btn white black-text">
                        MongoDB
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s4">
                <div className="row">
                  <div className="col">
                    <h5
                      style={{
                        fontWeight: "bolder",
                        fontFamily: "Montserrat",
                        marginBottom: "3%"
                      }}
                    >
                      Introduction to Node.js
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img src={nodejs} alt="" width={"300px"} />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col s6">
                        <h6
                          style={{
                            fontWeight: "bolder",
                            fontFamily: "Montserrat",
                            marginBottom: "3%"
                          }}
                        >
                          Course Duration
                        </h6>
                        <p>2-3 Months</p>
                      </div>
                      <div className="col s6">
                        <h6
                          style={{
                            fontWeight: "bolder",
                            fontFamily: "Montserrat",
                            marginBottom: "3%"
                          }}
                        >
                          Languages Available
                        </h6>
                        <p>English Hindi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ marginLeft: "29%" }}>
            <h5
              style={{
                fontWeight: "bolder",
                fontFamily: "Montserrat",
                marginBottom: "3%"
              }}
            >
              Instructor
            </h5>
          </div>
        </div>
        <div className="row" style={{ marginTop: "2%" }}>
          <div className="col" style={{ marginLeft: "20%" }}>
            <img
              src={ins}
              alt=""
              style={{
                height: "66px",
                width: "66px",
                border: "2px solid blue",
                borderRadius: "50px"
              }}
            />
            <p
              style={{
                display: "inline-block",
                marginTop: "-25%",
                position: "relative",
                top: "-42px",
                left: "20px"
              }}
            >
              <b>Vikram Singh</b>
              <br />
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p style={{ position: "relative", top: "-87px", left: "454px" }}>
              Vikram is an EC graduate, and has a vast experience of 3 years in
              software development with companies like Spice Labs, Creative
              India and Lead Developer at
            </p>
          </div>
        </div>
        <div
          className="row"
          style={{
            marginLeft: "20%",
            marginRight: "16.5%"
          }}
        >
          <div className="col s12">
            <div className="row">
              <div
                className="col s4"
                style={{
                  borderRight: "1px solid #e0dfdf"
                }}
              >
                <div className="row" style={{ marginTop: "10%" }}>
                  <div className="col s2" style={{ marginLeft: "15%" }}>
                    <h3
                      style={{
                        fontWeight: "bolder",
                        color: "blue"
                      }}
                    >
                      4.2
                    </h3>
                  </div>
                  <div className="col s5" style={{ marginTop: "0.5%" }}>
                    <i
                      class="material-icons"
                      style={{
                        position: "relative",
                        top: "41px",
                        left: "-2px",
                        color: "blue"
                      }}
                    >
                      star
                    </i>
                    <i
                      class="material-icons"
                      style={{
                        position: "relative",
                        top: "41px",
                        left: "0px",
                        color: "blue"
                      }}
                    >
                      star
                    </i>
                    <i
                      class="material-icons"
                      style={{
                        position: "relative",
                        top: "41px",
                        left: "0px",
                        color: "blue"
                      }}
                    >
                      star
                    </i>
                    <i
                      class="material-icons"
                      style={{
                        position: "relative",
                        top: "41px",
                        left: "1px",
                        color: "blue"
                      }}
                    >
                      star
                    </i>
                    <i
                      class="material-icons"
                      style={{
                        position: "relative",
                        top: "41px",
                        left: "2px",
                        color: "blue"
                      }}
                    >
                      star_half
                    </i>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12" style={{ marginLeft: "-27px" }}>
                    <h5
                      style={{
                        fontWeight: "bolder",
                        color: "blue"
                      }}
                    >
                      634 Reviews
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col s8">
                <div
                  className="row"
                  style={{
                    borderBottom: "1px solid #e0dfdf",
                    paddingBottom: "3%"
                  }}
                >
                  <div className="col s8 offset-s2">
                    <h4
                      style={{
                        fontWeight: "bolder",
                        color: "blue"
                      }}
                    >
                      Top Reviews
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <p>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <span
                        style={{
                          fontWeight: "bolder",
                          position: "relative",
                          top: "-7px",
                          left: "14px"
                        }}
                      >
                        By NC . Mar 25th 2019
                      </span>
                      <p>
                        Overall, the course material is good with many example.
                        Need a general knowledge with mathematical and
                        statistical from the beginning to pass the exam, because
                        course slide is a little bit fast.
                      </p>
                    </p>
                  </div>
                  <div className="col s6">
                    <p>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <i
                        class="material-icons"
                        style={{
                          color: "blue"
                        }}
                      >
                        star
                      </i>
                      <span
                        style={{
                          fontWeight: "bolder",
                          position: "relative",
                          top: "-7px",
                          left: "14px"
                        }}
                      >
                        By JE . JAN 25th 2019
                      </span>
                      <p>
                        The course deserves a 5-star rating because: (1) content
                        is relevant, (2) the professor is concise and possesses
                        great teaching skills, and (3) the learning modules are
                        applicable to daily problems.
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ marginLeft: "20%" }}>
            <h5
              style={{
                fontWeight: "bolder",
                fontFamily: "Montserrat",
                marginBottom: "3%"
              }}
            >
              People also viewed these courses
            </h5>
          </div>
        </div>
        <div className="row" style={{ marginLeft: "21%", marginTop: "2%" }}>
          <div className="col s3">
            <div class="card">
              <div class="card-image">
                <img src="https://cdn-images-1.medium.com/max/800/1*eXIBeNlLhz4Pe6vDrYkXLQ.png" />
              </div>
              <div class="card-content">
                <h5
                  style={{
                    fontWeight: "bolder",
                    fontFamily: "Montserrat"
                  }}
                >
                  Introduction to CSS3
                </h5>
              </div>
              <div class="card-action">
                <a href="#" style={{ color: "blue" }}>
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col s3">
            <div class="card">
              <div class="card-image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />
              </div>
              <div class="card-content">
                <h5
                  style={{
                    fontWeight: "bolder",
                    fontFamily: "Montserrat"
                  }}
                >
                  Javascript
                </h5>
              </div>
              <div class="card-action">
                <a href="#" style={{ color: "blue" }}>
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col s3">
            <div class="card">
              <div class="card-image">
                <img src="https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png" />
              </div>
              <div class="card-content">
                <h5
                  style={{
                    fontWeight: "bolder",
                    fontFamily: "Montserrat"
                  }}
                >
                  Ruby on Rails
                </h5>
              </div>
              <div class="card-action">
                <a href="#" style={{ color: "blue" }}>
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
