import React, { Component } from "react";

export default class JsCourse extends Component {
  render() {
    return (
      <div class="container">
        <div class="row" style={{ marginTop: "6%" }}>
          <div class="col s12">
            <ul class="tabs">
              <li class="tab col s3">
                <a
                  href="#test1"
                  style={{
                    color: "#0000ff",
                    fontSize: "120%",
                    fontFamily: "Montserrat"
                  }}
                >
                  Course
                </a>
              </li>
              <li class="tab col s3">
                <a
                  class="active"
                  href="#test2"
                  style={{
                    color: "#0000ff",
                    fontSize: "120%",
                    fontFamily: "Montserrat"
                  }}
                >
                  Discussion
                </a>
              </li>
              <li class="tab col s3">
                <a
                  href="#test3"
                  style={{
                    color: "#0000ff",
                    fontSize: "120%",
                    fontFamily: "Montserrat"
                  }}
                >
                  Doubts
                </a>
              </li>
              <li class="tab col s3">
                <a
                  href="#test4"
                  style={{
                    color: "#0000ff",
                    fontSize: "120%",
                    fontFamily: "Montserrat"
                  }}
                >
                  Assignments
                </a>
              </li>
            </ul>
          </div>
          <div id="test1" class="col s12" style={{ marginTop: "5%" }}>
            <div className="row">
              <div className="col s12">
                <h4
                  style={{
                    fontFamily: "Montserrat",
                    paddingLeft: "5%"
                  }}
                >
                  <u>Asynchronous Programming with Javascript</u>
                </h4>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col s12" style={{ paddingTop: "2%" }}>
                <i
                  class="material-icons"
                  style={{ color: "blue", fontSize: "220%", cursor: "pointer" }}
                >
                  keyboard_arrow_right
                </i>
                <span
                  style={{
                    fontSize: "150%",
                    position: "relative",
                    top: "-9px"
                  }}
                >
                  Module 0 - Intro
                </span>
              </div>
            </div>
            <hr />
            <hr />
            <div className="row">
              <div className="col s12" style={{ paddingTop: "2%" }}>
                <i
                  class="material-icons"
                  style={{ color: "blue", fontSize: "220%", cursor: "pointer" }}
                >
                  keyboard_arrow_right
                </i>
                <span
                  style={{
                    fontSize: "150%",
                    position: "relative",
                    top: "-9px"
                  }}
                >
                  Module 1 - Asynchronous Fundamentals
                </span>
              </div>
            </div>
            <hr />
            <hr />
            <div className="row">
              <div className="col s12" style={{ paddingTop: "2%" }}>
                <i
                  class="material-icons"
                  style={{ color: "blue", fontSize: "220%", cursor: "pointer" }}
                >
                  keyboard_arrow_right
                </i>
                <span
                  style={{
                    fontSize: "150%",
                    position: "relative",
                    top: "-9px"
                  }}
                >
                  Module 2 - Promises
                </span>
              </div>
            </div>
            <hr />
            <hr />
            <div className="row">
              <div className="col s12" style={{ paddingTop: "2%" }}>
                <i
                  class="material-icons"
                  style={{ color: "blue", fontSize: "220%", cursor: "pointer" }}
                >
                  keyboard_arrow_right
                </i>
                <span
                  style={{
                    fontSize: "150%",
                    position: "relative",
                    top: "-9px"
                  }}
                >
                  Module 3 - Fetch API
                </span>
              </div>
            </div>
            <hr />
            <hr />
            <div className="row">
              <div className="col s12" style={{ paddingTop: "2%" }}>
                <i
                  class="material-icons"
                  style={{ color: "blue", fontSize: "220%", cursor: "pointer" }}
                >
                  keyboard_arrow_right
                </i>
                <span
                  style={{
                    fontSize: "150%",
                    position: "relative",
                    top: "-9px"
                  }}
                >
                  Module 4 - Generators
                </span>
              </div>
            </div>
            <hr />
            <hr />
            <div className="row">
              <div className="col s12" style={{ paddingTop: "2%" }}>
                <i
                  class="material-icons"
                  style={{ color: "blue", fontSize: "220%", cursor: "pointer" }}
                >
                  keyboard_arrow_right
                </i>
                <span
                  style={{
                    fontSize: "150%",
                    position: "relative",
                    top: "-9px"
                  }}
                >
                  Module 5 - Final Assessment
                </span>
              </div>
            </div>
            <hr />
          </div>
          <div id="test2" class="col s12" style={{ marginTop: "5%" }}>
            <div className="row">
              <div className="col s3">
                <ul class="collection with-header">
                  <li class="collection-header">
                    <h5>All Discussions</h5>
                  </li>
                  <li class="collection-item">Post's I am following</li>
                  <li class="collection-item">General</li>
                  <li class="collection-item">
                    Module 0 Assingment Submission
                  </li>
                  <li class="collection-item">&nbsp; Introductions</li>
                  <li class="collection-item">
                    Module 1 Assingment Submission
                  </li>
                  <li class="collection-item">&nbsp; Stop Watch Application</li>
                  <li class="collection-item">
                    Module 2 Assingment Submission
                  </li>
                  <li class="collection-item">
                    &nbsp; Advanced Product Catalog
                  </li>
                  <li class="collection-item">
                    Module 3 Assingment Submission
                  </li>
                  <li class="collection-item">&nbsp; Face API</li>
                  <li class="collection-item">
                    Module 4 Assingment Submission
                  </li>
                  <li class="collection-item">&nbsp; Starship Comparison</li>
                </ul>
              </div>
              <div className="col s8" style={{ paddingLeft: "5%" }}>
                <div className="row">
                  <div className="col">
                    <p style={{ textAlign: "left" }}>Discussion Home</p>
                    <h5
                      style={{
                        fontFamily: "Montserrat"
                      }}
                    >
                      Asynchronous Programming with Javascript
                    </h5>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div
                    className="col s4"
                    style={{ marginTop: "5%", backgroundColor: "#DDDDDD" }}
                  >
                    <div className="row">
                      <div
                        className="col s12"
                        style={{
                          paddingBottom: "5%",
                          paddingTop: "15%",
                          fontWeight: "bold",
                          fontSize: "150%"
                        }}
                      >
                        Find Discussions
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col s12"
                        style={{
                          paddingBottom: "5%",
                          paddingTop: "15%",
                          fontWeight: "bold",
                          fontSize: "150%"
                        }}
                      >
                        Engage with posts
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col s12"
                        style={{
                          paddingBottom: "5%",
                          paddingTop: "15%",
                          fontWeight: "bold",
                          fontSize: "150%"
                        }}
                      >
                        Receive updates
                      </div>
                    </div>
                  </div>
                  <div
                    className="col s8"
                    style={{
                      paddingTop: "4.2%"
                    }}
                  >
                    <ul class="collection">
                      <li class="collection-item">
                        <div className="row">
                          <div className="col s4" style={{ paddingTop: "4%" }}>
                            <b>
                              Use the All Topics menu to find specific topics.
                            </b>
                          </div>
                          <div className="col s4" style={{ paddingTop: "8%" }}>
                            {" "}
                            <b>Search all posts</b>
                          </div>
                          <div className="col s4" style={{ paddingTop: "8%" }}>
                            <b>Filter and sort topics</b>
                          </div>
                        </div>
                      </li>
                      <li class="collection-item">
                        <div className="row">
                          <div className="col s4" style={{ paddingTop: "4%" }}>
                            <b>Vote for good posts and responses.</b>
                          </div>
                          <div className="col s4" style={{ paddingTop: "4%" }}>
                            {" "}
                            <b>Report abuse, topics, and responses</b>
                          </div>
                          <div className="col s4" style={{ paddingTop: "5%" }}>
                            <b>Follow or unfollow posts</b>
                          </div>
                        </div>
                      </li>
                      <li class="collection-item">
                        <div className="row">
                          <div className="col s12" style={{ paddingTop: "0%" }}>
                            <b>Check this box to receive an email digest</b>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="test3" class="col s12" style={{ marginTop: "5%" }}>
            Doubts
          </div>
          <div id="test4" class="col s12" style={{ marginTop: "5%" }}>
            Assignments
          </div>
        </div>
      </div>
    );
  }
}
