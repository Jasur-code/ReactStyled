import React from "react";
import "./CustomMain.scss";
import { Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function CustomMain() {
  return (
    <Carousel className="customCarousel">
      <Carousel.Item className="carouselItem">
        <img
          height={700}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carouselText">
            <Button
              variant="danger"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> LifeStyle
            </Button>
            <h1>
              <a href="hhh">10 tell-tale signs you need to get a new startup.</a>
            </h1>
            <p>
              No visited raising gravity outward subject my cottage Mr be. Hold
              do at tore in park feet near my case
            </p>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/736x/62/7e/f6/627ef6f43d7079f251f56261ce24cfaa.jpg"
                alt=""
              />
              <span>By Louis . Jan 01,2022 . 5min read</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="d-flex gap-3 align-items-center mt-5">
              <div>
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>Tell-tale signs you ne...</h5>
                <span style={{ fontSize: "13px" }}>
                  Departure defective arranging rap...
                </span>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center mt-4">
              <div>
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://wallpaperaccess.com/full/308566.jpg"
                  alt=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>7 common mistakes e...</h5>
                <span style={{ fontSize: "15px" }}>
                  Particular way thoughly unaffec...
                </span>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center mt-4">
              <div>
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>Initial problem of sta...</h5>
                <span style={{ fontSize: "13px" }}>
                  Dtawings offended yet abswered...
                </span>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carouselItem">
        <img
          height={700}
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/308566.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carouselText" style={{ width: "600px" }}>
            <Button
              variant="warning"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> Travel
            </Button>
            <h1>
              <a href="hhh">
              7 common mistakes everyone makes while traveling
              </a>
            </h1>
            <p>
              Particular way thoroughly unaffected projection favorable Mrs can
              be projecting own.
            </p>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/736x/62/7e/f6/627ef6f43d7079f251f56261ce24cfaa.jpg"
                alt=""
              />
              <span>By Lary . Feb 22,2022 . 2min read</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="d-flex gap-3 align-items-center mt-5">
              <div>
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>Tell-tale signs you ne...</h5>
                <span style={{ fontSize: "13px" }}>
                  Departure defective arranging rap...
                </span>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center mt-4">
              <div>
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://wallpaperaccess.com/full/308566.jpg"
                  alt=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>7 common mistakes e...</h5>
                <span style={{ fontSize: "15px" }}>
                  Particular way thoughly unaffec...
                </span>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center mt-4">
              <div>
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>Initial problem of sta...</h5>
                <span style={{ fontSize: "13px" }}>
                  Dtawings offended yet abswered...
                </span>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carouselItem">
        <img
          height={700}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carouselText" style={{ width: "600px" }}>
            <Button
              variant="primary"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> Covid 19
            </Button>
            <h1>
              <a href="hhh">
                Initial problem of startups and their solution
              </a>
            </h1>
            <p>
              Thirty it matter enable become admire in giving. See resolved
              goodness felicity shy civility domestic.
            </p>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/736x/62/7e/f6/627ef6f43d7079f251f56261ce24cfaa.jpg"
                alt=""
              />
              <span>By Lary . Feb 22,2022 . 2min read</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="d-flex gap-3 align-items-center mt-5">
              <div>
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>Tell-tale signs you ne...</h5>
                <span style={{ fontSize: "13px" }}>
                  Departure defective arranging rap...
                </span>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center mt-4">
              <div>
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://wallpaperaccess.com/full/308566.jpg"
                  alt=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>7 common mistakes e...</h5>
                <span style={{ fontSize: "15px" }}>
                  Particular way thoughly unaffec...
                </span>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-center mt-4">
              <div>
                <img
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  alt=""
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>Initial problem of sta...</h5>
                <span style={{ fontSize: "13px" }}>
                  Dtawings offended yet abswered...
                </span>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
