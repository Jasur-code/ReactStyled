import React, { useContext } from "react";
import "./Section5.scss";
import {  faBullhorn, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeContext from "../../ContextApi/ThemeContext/Theme";

export default function Section5() {
  const {theme} = useContext(ThemeContext)
  return (
    <section className={`section5 mt-5 ${theme}`}>
        <h2><FontAwesomeIcon icon={faBullhorn} style={{color:"gray"}}  /> Sponsored news</h2>
      <div className="block mt-4">
      <div className="box_right">
        <div className="box_right_box d-flex gap-3">
          <div className="box_right_img">
            <img
              src="https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg"
              alt=""
            />
          </div>
          <div className="box_right_text">
            <p
              className="m-0 d-inline-block pe-2 ps-2 rounded"
              style={{
                color: "crimson",
                backgroundColor: "#FBE9EB",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              <FontAwesomeIcon icon={faCircle} /> LifeStyle
            </p>
            <h4>The pros and cons of business agency</h4>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/736x/62/7e/f6/627ef6f43d7079f251f56261ce24cfaa.jpg"
                alt=""
              />
              <span
                style={{ fontSize: "14px", color: "gray", fontWeight: "600" }}
              >
                By Louis . Jan 01,2022 . 5min read
              </span>
            </div>
          </div>
        </div>
        <div className="box_right_box d-flex gap-3 mt-4">
          <div className="box_right_img">
            <img
              src="https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg"
              alt=""
            />
          </div>
          <div className="box_right_text">
            <p
              className="m-0 d-inline-block pe-2 ps-2 rounded"
              style={{
                color: "#4F9EF8",
                backgroundColor: "#EDF5FE",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              <FontAwesomeIcon icon={faCircle} /> Sports
            </p>
            <h4>The pros and cons of business agency</h4>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg"
                alt=""
              />
              <span
                style={{ fontSize: "14px", color: "gray", fontWeight: "600" }}
              >
                By Louis . Jan 01,2022 . 5min read
              </span>
            </div>
          </div>
        </div>
  
        <div className="box_right_box d-flex gap-3 mt-4">
          <div className="box_right_img">
            <img
              src="https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg"
              alt=""
            />
          </div>
          <div className="box_right_text">
            <p
              className="m-0 d-inline-block pe-2 ps-2 rounded"
              style={{
                color: "#F7C32E",
                background: "#FEF6E0",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              <FontAwesomeIcon icon={faCircle} /> Business
            </p>
            <h4>The pros and cons of business agency</h4>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg"
                alt=""
              />
              <span
                style={{ fontSize: "14px", color: "gray", fontWeight: "600" }}
              >
                By Louis . Jan 01,2022 . 5min read
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="box_right">
        <div className="box_right_box d-flex gap-3">
          <div className="box_right_img">
            <img
              src="https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg"
              alt=""
            />
          </div>
          <div className="box_right_text">
            <p
              className="m-0 d-inline-block pe-2 ps-2 rounded"
              style={{
                color: "crimson",
                backgroundColor: "#FBE9EB",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              <FontAwesomeIcon icon={faCircle} /> LifeStyle
            </p>
            <h4>The pros and cons of business agency</h4>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/736x/62/7e/f6/627ef6f43d7079f251f56261ce24cfaa.jpg"
                alt=""
              />
              <span
                style={{ fontSize: "14px", color: "gray", fontWeight: "600" }}
              >
                By Louis . Jan 01,2022 . 5min read
              </span>
            </div>
          </div>
        </div>
        <div className="box_right_box d-flex gap-3 mt-4">
          <div className="box_right_img">
            <img
              src="https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg"
              alt=""
            />
          </div>
          <div className="box_right_text">
            <p
              className="m-0 d-inline-block pe-2 ps-2 rounded"
              style={{
                color: "#4F9EF8",
                backgroundColor: "#EDF5FE",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              <FontAwesomeIcon icon={faCircle} /> Sports
            </p>
            <h4>The pros and cons of business agency</h4>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg"
                alt=""
              />
              <span
                style={{ fontSize: "14px", color: "gray", fontWeight: "600" }}
              >
                By Louis . Jan 01,2022 . 5min read
              </span>
            </div>
          </div>
        </div>
  
        <div className="box_right_box d-flex gap-3 mt-4">
          <div className="box_right_img">
            <img
              src="https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg"
              alt=""
            />
          </div>
          <div className="box_right_text">
            <p
              className="m-0 d-inline-block pe-2 ps-2 rounded"
              style={{
                color: "#F7C32E",
                background: "#FEF6E0",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              <FontAwesomeIcon icon={faCircle} /> Business
            </p>
            <h4>The pros and cons of business agency</h4>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg"
                alt=""
              />
              <span
                style={{ fontSize: "14px", color: "gray", fontWeight: "600" }}
              >
                By Louis . Jan 01,2022 . 5min read
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
