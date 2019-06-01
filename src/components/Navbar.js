import React, { Component } from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul id="dropdown1" class="dropdown-content" style={{ color: "blue" }}>
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
                <a
                  href="collapsible.html"
                  style={{
                    color: "blue",
                    paddingLeft: "75%",
                    fontSize: "150%"
                  }}
                >
                  Signin
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
