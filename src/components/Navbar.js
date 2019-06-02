import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";

export default withAuth(
  class Navbar extends Component {
    state = {
      authenticated: null
    };
    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };

    render() {
      console.log(this.state.authenticated);
      if (this.state.authenticated === null) return null;
      if (!this.state.authenticated) {
        return (
          <div>
            <ul
              id="dropdown1"
              class="dropdown-content"
              style={{ color: "blue" }}
            >
              <li>
                <a href="#!" style={{ color: "blue" }}>
                  one
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: "blue" }}>
                  two
                </a>
              </li>
              <li class="divider" />
              <li style={{ color: "blue" }}>
                <a href="#!" style={{ color: "blue" }}>
                  three
                </a>
              </li>
            </ul>
            <nav>
              <div
                class="nav-wrapper white"
                style={{ textAlign: "left", paddingLeft: "5%" }}
              >
                <a href="#" class="brand-logo left">
                  <span style={{ color: "blue" }}>
                    <Link to="/" style={{ color: "blue" }}>
                      TOC
                    </Link>
                  </span>
                </a>
                <ul style={{ display: "inline-block", marginLeft: "8%" }}>
                  <li style={{ backgroundColor: "blue", borderRadius: "5%" }}>
                    <a
                      class="dropdown-trigger"
                      href="#!"
                      data-target="dropdown1"
                      style={{ color: "white" }}
                    >
                      EXPLORE
                      <i class="material-icons right">arrow_drop_down</i>
                    </a>
                  </li>
                </ul>

                <ul
                  id="nav-mobile"
                  class="right hide-on-med-and-down"
                  style={{ marginRight: "8%" }}
                >
                  <li>
                    <div class="center row">
                      <div class="col s12 ">
                        <div class="row" id="topbarsearch">
                          <div
                            class="input-field col s6 s12 "
                            style={{
                              border: "1px solid grey",
                              borderRadius: "40px"
                            }}
                          >
                            <i
                              class="material-icons prefix"
                              style={{ color: "blue", top: "0rem !imp" }}
                            >
                              search
                            </i>
                            <input
                              type="text"
                              placeholder="What do you want to learn?"
                              id="autocomplete-input"
                              class="autocomplete blue-text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      href="badges.html"
                      style={{
                        color: "blue",
                        paddingLeft: "45%",
                        fontSize: "150%"
                      }}
                    >
                      Signup
                    </a>
                  </li>
                  <li>
                    <a href="collapsible.html">
                      <Link
                        to="/signin"
                        style={{
                          color: "blue",
                          paddingLeft: "75%",
                          fontSize: "150%"
                        }}
                      >
                        Signin
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        );
      } else {
        return (
          <div>
            <ul
              id="dropdown1"
              class="dropdown-content"
              style={{ color: "blue" }}
            >
              <li>
                <a href="#!" style={{ color: "blue" }}>
                  one
                </a>
              </li>
              <li>
                <a href="#!" style={{ color: "blue" }}>
                  two
                </a>
              </li>
              <li class="divider" />
              <li style={{ color: "blue" }}>
                <a href="#!" style={{ color: "blue" }}>
                  three
                </a>
              </li>
            </ul>
            <nav>
              <div
                class="nav-wrapper white"
                style={{ textAlign: "left", paddingLeft: "5%" }}
              >
                <a href="#" class="brand-logo left">
                  <span style={{ color: "blue" }}>
                    <Link to="/" style={{ color: "blue" }}>
                      TOC
                    </Link>
                  </span>
                </a>
                <ul style={{ display: "inline-block", marginLeft: "8%" }}>
                  <li style={{ backgroundColor: "blue", borderRadius: "5%" }}>
                    <a
                      class="dropdown-trigger"
                      href="#!"
                      data-target="dropdown1"
                      style={{ color: "white" }}
                    >
                      EXPLORE
                      <i class="material-icons right">arrow_drop_down</i>
                    </a>
                  </li>
                </ul>

                <ul
                  id="nav-mobile"
                  class="right hide-on-med-and-down"
                  style={{ marginRight: "8%" }}
                >
                  <li>
                    <div class="center row">
                      <div class="col s12 ">
                        <div class="row" id="topbarsearch">
                          <div
                            class="input-field col s6 s12 "
                            style={{
                              border: "1px solid grey",
                              borderRadius: "40px"
                            }}
                          >
                            <i
                              class="material-icons prefix"
                              style={{ color: "blue", top: "0rem !imp" }}
                            >
                              search
                            </i>
                            <input
                              type="text"
                              placeholder="What do you want to learn?"
                              id="autocomplete-input"
                              class="autocomplete blue-text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="collapsible.html">
                      <Link
                        to="/dashboard"
                        style={{
                          color: "blue",
                          paddingLeft: "35%",
                          fontSize: "25px"
                        }}
                      >
                        Dashboard
                      </Link>
                    </a>
                  </li>
                  <li
                    className="pr3"
                    style={{ color: "blue", fontSize: "25px" }}
                  >
                    <span
                      style={{ paddingLeft: "35%", cursor: "pointer" }}
                      onClick={this.logout}
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        );
      }
    }
  }
);
