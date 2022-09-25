import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { faCircle, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Section4.scss";
import ThemeContext from "../../ContextApi/ThemeContext/Theme";

export default function Section4() {
  const {theme} = useContext(ThemeContext)
  return (
    <section className={`mt-5 section4 ${theme}`}>
      <div className="text mt-2">
        <h2>
          <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon> Last week top
          highlights
        </h2>
        <p>Get the latest sports news and updates from football, tennis, formula one, cricket, NBA, and golf with live scores and stats</p>
      </div>
      <div className="block mt-4">
        <div className="box_left">
          <img
            className="bgImg"
            src="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Walking-Street.jpg"
            alt=""
          />
          <div className="box_left_text">
            <div>
              <Button variant="danger" className="me-2 p-0 pe-2 ps-2">
                <FontAwesomeIcon icon={faCircle} />
                Travel
              </Button>
              <h2>
                <a href="hhh">
                8 initial problem of startups and their solution
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
              <span style={{ fontSize: "18px", color: "white" }}>
                By Louis . Jan 01,2022 . 5min read
              </span>
            </div>
          </div>
        </div>
        <div className="box_left">
          <img
            className="bgImg"
            src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/how_to_get_a_business_license_-_article_image.jpg"
            alt=""
          />
          <div className="box_left_text">
            <div>
              <Button variant="warning" className="me-2 p-0 pe-2 ps-2">
                <FontAwesomeIcon icon={faCircle} />
                Technology
              </Button>
              <h2>
                <a href="hhh">
                Business ideas that will boom in upcoming years
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
              <span style={{ fontSize: "18px", color: "white" }}>
                By Louis . Jan 01,2022 . 5min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
