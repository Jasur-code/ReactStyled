import { faBookmark, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../../ContextApi/ThemeContext/Theme";
import "./Section2.scss";

export default function Section2() {
  const {theme} = useContext(ThemeContext)
  return (
    <section className={`section2 mt-5 ${theme}`}>
       <div>
        <div className="text">
          <h2>
            <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon> Last week top
            highlights
          </h2>
        </div>
        <div className="block">
          <div className="box_left">
            <img
            className="bgImg"
              src="https://blogzine.webestica.com/assets/images/blog/16by9/05.jpg"
              alt=""
            />
            <div className="box_left_text">
              <div>
                <Button variant="primary" className="me-2">
                  <FontAwesomeIcon icon={faCircle} />
                  Business
                </Button>
                <Button variant="dark">
                  <FontAwesomeIcon icon={faCircle} />
                  Sponsored
                </Button>
                <h2>
                  <a href="hhh">
                    Never underestimate the influence of social media
                  </a>
                </h2>
              </div>
              <div className="d-flex gap-3 align-items-center mt-3">
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://i.pinimg.com/736x/62/7e/f6/627ef6f43d7079f251f56261ce24cfaa.jpg"
                  alt=""
                />
                <span style={{ fontSize: "18px", color:"white" }}>
                  By Louis . Jan 01,2022 . 5min read
                </span>
              </div>
            </div>
          </div>
          <div className="box_right">
            <div className="box_right_box d-flex gap-3">
            <div className="box_right_img">
              <img src="https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg" alt="" />
            </div>
                <div className="box_right_text">
                    <p className="m-0 d-inline-block pe-2 ps-2 rounded" style={{color: "crimson", backgroundColor: "#FBE9EB", fontWeight:"500", fontSize:"14px"}}><FontAwesomeIcon icon={faCircle}/> LifeStyle</p>
                    <h5>The pros and cons of business agency</h5>
                    <div className="d-flex gap-3 align-items-center">
                <img
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                  src="https://i.pinimg.com/736x/62/7e/f6/627ef6f43d7079f251f56261ce24cfaa.jpg"
                  alt=""
                />
                <span style={{ fontSize: "14px", color:"gray", fontWeight:"600" }}>
                  By Louis . Jan 01,2022 . 5min read
                </span>
              </div>
                </div>
            </div>  
            <div className="box_right_box d-flex gap-3 mt-4">
            <div className="box_right_img">
              <img src="https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg" alt="" />
            </div>
                <div className="box_right_text">
                    <p className="m-0 d-inline-block pe-2 ps-2 rounded" style={{color: "#4F9EF8", backgroundColor: "#EDF5FE", fontWeight:"500", fontSize:"14px"}}><FontAwesomeIcon icon={faCircle}/> Sports</p>
                    <h5>The pros and cons of business agency</h5>
                    <div className="d-flex gap-3 align-items-center">
                <img
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                  src="https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg"
                  alt=""
                />
                <span style={{ fontSize: "14px", color:"gray", fontWeight:"600" }}>
                  By Louis . Jan 01,2022 . 5min read
                </span>
              </div>
                </div>
            </div> 
            <div className="box_right_box d-flex gap-3 mt-4">
            <div className="box_right_img">
              <img src="https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg" alt="" />
            </div>
                <div className="box_right_text">
                    <p className="m-0 d-inline-block pe-2 ps-2 rounded" style={{color: "#0CBC87", background:"#E6F8F3", fontWeight:"500", fontSize:"14px"}}><FontAwesomeIcon icon={faCircle}/> Business</p>
                    <h5>The pros and cons of business agency</h5>
                    <div className="d-flex gap-3 align-items-center">
                <img
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                  src="https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg"
                  alt=""
                />
                <span style={{ fontSize: "14px", color:"gray", fontWeight:"600" }}>
                  By Louis . Jan 01,2022 . 5min read
                </span>
              </div>
                </div>
            </div>   
            <div className="box_right_box d-flex gap-3 mt-4">
            <div className="box_right_img">
              <img src="https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg" alt="" />
            </div>
                <div className="box_right_text">
                    <p className="m-0 d-inline-block pe-2 ps-2 rounded" style={{color: "#F7C32E", background:"#FEF6E0", fontWeight:"500", fontSize:"14px"}}><FontAwesomeIcon icon={faCircle}/> Business</p>
                    <h5>The pros and cons of business agency</h5>
                    <div className="d-flex gap-3 align-items-center">
                <img
                  width={40}
                  height={40}
                  style={{ borderRadius: "50%" }}
                  src="https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg"
                  alt=""
                />
                <span style={{ fontSize: "14px", color:"gray", fontWeight:"600" }}>
                  By Louis . Jan 01,2022 . 5min read
                </span>
              </div>
                </div>
            </div>   
          </div>
        </div>
    </div>
    </section>
   
  );
}
