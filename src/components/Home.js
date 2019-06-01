import React, { Component } from "react";
import { Link } from "react-router-dom";
import banner from "../banner.jpg";

import img1 from "../1.jpg";
import img2 from "../2.png";
import img3 from "../3.png";
import img4 from "../4.png";
import img5 from "../5.png";
import img6 from "../6.png";
import img7 from "../7.png";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: 0, marginTop: 0 }}>
        <div className="row">
          <div className="col" style={{ padding: 0 }}>
            <img
              src={banner}
              alt=""
              style={{ height: "700px", width: "1840px" }}
            />
          </div>
        </div>
        <div className="row" style={{ paddingTop: "2%" }}>
          <div className="col s1 offset-s2">
            <img src={img1} alt="" style={{ width: "90%" }} />
          </div>
          <div className="col s1">
            <img src={img2} alt="" style={{ width: "70%" }} />
          </div>
          <div className="col s1">
            <img src={img3} alt="" style={{ width: "90%" }} />
          </div>
          <div className="col s1">
            <img src={img4} alt="" style={{ width: "90%" }} />
          </div>
          <div className="col s1">
            <img src={img5} alt="" style={{ width: "90%" }} />
          </div>
          <div className="col s1">
            <img src={img6} alt="" style={{ width: "90%" }} />
          </div>
          <div className="col s1">
            <img src={img7} alt="" style={{ width: "50%" }} />
          </div>
          <div className="col s1" style={{ marginTop: "-0.5%" }}>
            <a class="waves-effect waves-light btn blue">SEE ALL</a>
          </div>
        </div>
        <div
          className="row"
          style={{ float: "none", margin: "0 auto", marginTop: "4%" }}
        >
          <div className="col offset-s4" style={{ paddingLeft: "3%" }}>
            <h3 style={{ fontFamily: "Montserrat" }}>
              <u>Most Popular Courses </u>
            </h3>
          </div>
          <div className="col offset-s2" style={{ paddingLeft: "4%" }}>
            <h5 style={{ fontFamily: "Montserrat" }}>
              Flexible and affordable online courses from the World’s top
              universities & companies{" "}
            </h5>
          </div>
        </div>
        <div className="row" style={{ marginTop: "3%" }}>
          <div className="col offset-s2">
            <h5 style={{ fontWeight: "bolder" }}>Advanced Courses</h5>
          </div>
        </div>
        <div className="row" style={{ marginTop: "3%" }}>
          <div
            className="col s3 offset-s2"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001179.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%"
            }}
          >
            <div
              style={{
                paddingTop: "15%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              <Link to="/webd" style={{ color: "white" }}>
                Web Development <br /> Course
              </Link>
            </div>
          </div>
          <div
            className="col s3"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001371.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%",
              marginLeft: "2%"
            }}
          >
            <div
              style={{
                paddingTop: "10%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Machine Programming <br /> Course
            </div>
          </div>
          <div
            className="col s3"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001181.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%",
              marginLeft: "2%"
            }}
          >
            <div
              style={{
                paddingTop: "10%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Competitive Programming <br /> Course
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "3%" }}>
          <div
            className="col s3 offset-s2"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001371.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%"
            }}
          >
            <div
              style={{
                paddingTop: "15%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Data Science <br /> Course
            </div>
          </div>
          <div
            className="col s3"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001255.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%",
              marginLeft: "2%"
            }}
          >
            <div
              style={{
                paddingTop: "15%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Interview Preparation <br /> Course
            </div>
          </div>
          <div
            className="col s3"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001178.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%",
              marginLeft: "2%"
            }}
          >
            <div
              style={{
                paddingTop: "15%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Aptitude Preparation <br /> Course
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "3%" }}>
          <div className="col offset-s2">
            <h5 style={{ fontWeight: "bolder" }}>Foundation Courses</h5>
          </div>
        </div>
        <div className="row" style={{ marginTop: "3%" }}>
          <div
            className="col s3 offset-s2"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001255.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%"
            }}
          >
            <div
              style={{
                paddingTop: "15%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Java Programming <br /> Course
            </div>
          </div>
          <div
            className="col s3"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001176.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%",
              marginLeft: "2%"
            }}
          >
            <div
              style={{
                paddingTop: "15%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              C++ Programming <br /> Course
            </div>
          </div>
          <div
            className="col s3"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001282.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%",
              marginLeft: "2%"
            }}
          >
            <div
              style={{
                paddingTop: "10%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Python Programming <br /> Course
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "3%" }}>
          <div className="col offset-s2">
            <h5 style={{ fontWeight: "bolder" }}>Career Tracks</h5>
          </div>
        </div>
        <div className="row" style={{ marginTop: "3%" }}>
          <div
            className="col s3 offset-s2"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001371.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%"
            }}
          >
            <div
              style={{
                paddingTop: "15%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Data Scientist <br /> Career Track
            </div>
          </div>
          <div
            className="col s3"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001255.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%",
              marginLeft: "2%"
            }}
          >
            <div
              style={{
                paddingTop: "16%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Machine Learning <br /> Engineer Track
            </div>
          </div>
          <div
            className="col s3"
            style={{
              color: "white",
              backgroundImage: `url(https://ninjasfiles.s3.amazonaws.com/0000000000001179.png)`,
              backgroundRepeat: "none",
              height: "200px",
              width: "20%",
              marginLeft: "2%"
            }}
          >
            <div
              style={{
                paddingTop: "16%",
                fontSize: "200%",
                fontWeight: "bolder",
                fontFamily: "Montserrat"
              }}
            >
              Web Developer <br /> Career Track
            </div>
          </div>
        </div>
        <div className="row" style={{ margin: "4%" }}>
          <div
            className="col s3 offset-s4 offset-s4"
            style={{ paddingLeft: "5%" }}
          >
            <div>
              <a class="waves-effect waves-light btn blue">
                <Link to="/allcourses" style={{ color: "white" }}>
                  Explore all courses
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
