import React, { useContext } from "react";
import "./CustomCarousel.scss";
import { Carousel, Card,Button  } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faCircle } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../ContextApi/ThemeContext/Theme";

export default function CustomCarousel() {
  const {theme} = useContext(ThemeContext)
  return (
    <div>
    <Carousel  className={`mt-5 cardCarousel ${theme}`} >
    <div className="text">
      <h2><FontAwesomeIcon icon={faBullhorn}/> Today's top highlights</h2>
      <p>Latest breaking news, pictures, videos, and special reports</p>
    </div>
      <Carousel.Item>
        <div className="d-flex gap-4 Card">
        <Card style={{ width: "18.5rem", border:"none" }} className={`${theme}`}>
          <Card.Img variant="top" height={200} style={{ borderRadius: "10px" }}  src="https://i.pinimg.com/564x/47/1a/18/471a180f31cbdfd427fd3167f0dd7871.jpg" />
          <Card.Body>
          <Button className="CustomCarouselButton"
              variant="danger"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> LifeStyle
            </Button>
            <Card.Text style={{fontWeight: "700"}}>
              Some quick example text to build on the card title.
            </Card.Text>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/736x/62/7e/f6/627ef6f43d7079f251f56261ce24cfaa.jpg"
                alt=""
              />
              <span style={{fontSize:"12px"}}>By Louis . Jan 01,2022 . 5min read</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18.5rem", border:"none" }} className={`${theme}`}>
          <Card.Img variant="top" height={200} style={{ borderRadius: "10px" }}  src="https://i.pinimg.com/564x/82/06/b4/8206b46d4ef41207fe7b3fd7fd6c985a.jpg" />
          <Card.Body>
          <Button className="CustomCarouselButton"
              variant="primary"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> Trending
            </Button>
            <Card.Text style={{fontWeight: "700"}}>
              Some quick example text to build on the card title.
            </Card.Text>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/564x/82/06/b4/8206b46d4ef41207fe7b3fd7fd6c985a.jpg"
                alt=""
              />
              <span style={{fontSize:"12px"}}>By Louis . Jan 01,2022 . 5min read</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18.5rem", border:"none" }} className={`${theme}`}>
          <Card.Img variant="top" height={200} style={{ borderRadius: "10px" }}  src="https://i.pinimg.com/564x/78/c5/b5/78c5b54c6526c1faf39891d2e12552ce.jpg" />
          <Card.Body>
          <Button className="CustomCarouselButton"
              variant="warning"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> Marketing
            </Button>
            <Card.Text style={{fontWeight: "700"}}>
              Some quick example text to build on the card title.
            </Card.Text>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/564x/78/c5/b5/78c5b54c6526c1faf39891d2e12552ce.jpg"
                alt=""
              />
              <span style={{fontSize:"12px"}}>By Louis . Jan 01,2022 . 5min read</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18.5rem", border:"none" }} className={`${theme}`}>
          <Card.Img variant="top" height={200} style={{ borderRadius: "10px" }}  src="https://i.pinimg.com/564x/60/df/f4/60dff4f321506af6452c225f9bb31dba.jpg" />
          <Card.Body>
          <Button className="CustomCarouselButton"
              variant="success"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> Technology
            </Button>
            <Card.Text style={{fontWeight: "700"}}>
              Some quick example text to build on the card title.
            </Card.Text>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/564x/60/df/f4/60dff4f321506af6452c225f9bb31dba.jpg"
                alt=""
              />
              <span style={{fontSize:"12px"}}>By Louis . Jan 01,2022 . 5min read</span>
            </div>
          </Card.Body>
        </Card>
        </div>
      </Carousel.Item>
      <Carousel.Item>
       
        <div className="d-flex gap-4">
        <Card style={{ width: "18.5rem", border:"none" }} className={`${theme}`}>
          <Card.Img variant="top" height={200} style={{ borderRadius: "10px" }}  src="https://i.pinimg.com/564x/5c/8a/39/5c8a39185660dd43c975aedfa21ce051.jpg" />
          <Card.Body>
          <Button className="CustomCarouselButton"
              variant="danger"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> LifeStyle
            </Button>
            <Card.Text style={{fontWeight: "700"}}>
              Some quick example text to build on the card title.
            </Card.Text>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/564x/5c/8a/39/5c8a39185660dd43c975aedfa21ce051.jpg"
                alt=""
              />
              <span style={{fontSize:"12px"}}>By Louis . Jan 01,2022 . 5min read</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18.5rem", border:"none" }} className={`${theme}`}>
          <Card.Img variant="top" height={200} style={{ borderRadius: "10px" }}  src="https://i.pinimg.com/564x/a2/8b/ef/a28bef45eca1e39b78e295329565de30.jpg" />
          <Card.Body>
          <Button className="CustomCarouselButton"
              variant="warning"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> Trending
            </Button>
            <Card.Text style={{fontWeight: "700"}}>
              Some quick example text to build on the card title.
            </Card.Text>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/564x/a2/8b/ef/a28bef45eca1e39b78e295329565de30.jpg"
                alt=""
              />
              <span style={{fontSize:"12px"}}>By Louis . Jan 01,2022 . 5min read</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18.5rem", border:"none" }} className={`${theme}`}>
          <Card.Img variant="top" height={200} style={{ borderRadius: "10px" }}  src="https://i.pinimg.com/564x/78/c5/b5/78c5b54c6526c1faf39891d2e12552ce.jpg" />
          <Card.Body>
          <Button className="CustomCarouselButton"
              variant="primary"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> Marketing
            </Button>
            <Card.Text style={{fontWeight: "700"}}>
              Some quick example text to build on the card title.
            </Card.Text>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/564x/78/c5/b5/78c5b54c6526c1faf39891d2e12552ce.jpg"
                alt=""
              />
              <span style={{fontSize:"12px"}}>By Louis . Jan 01,2022 . 5min read</span>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18.5rem", border:"none" }} className={`${theme}`}>
          <Card.Img variant="top" height={200} style={{ borderRadius: "10px" }}  src="https://i.pinimg.com/564x/60/df/f4/60dff4f321506af6452c225f9bb31dba.jpg" />
          <Card.Body>
          <Button className="CustomCarouselButton"
              variant="success"
              style={{ padding: "4px 8px", fontSize: "15px" }}
            >
              <FontAwesomeIcon icon={faCircle} /> Technology
            </Button>
            <Card.Text style={{fontWeight: "700"}}>
              Some quick example text to build on the card title.
            </Card.Text>
            <div className="d-flex gap-3 align-items-center">
              <img
                width={40}
                height={40}
                style={{ borderRadius: "50%" }}
                src="https://i.pinimg.com/564x/60/df/f4/60dff4f321506af6452c225f9bb31dba.jpg"
                alt=""
              />
              <span style={{fontSize:"12px"}}>By Louis . Jan 01,2022 . 5min read</span>
            </div>
          </Card.Body>
        </Card>
        
        </div>
      </Carousel.Item>
    </Carousel>

    <section className="mt-5 ms-4" style={{cursor: "pointer", position: "relative"}}> 
      <img src="https://blogzine.webestica.com/assets/images/adv-3.png" alt="" />
      <p style={{position: "absolute", right: "3%", color: "gray"}}>Advertisement</p>
    </section>
    </div>
   

   
  );
}
