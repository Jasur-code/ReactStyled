import { faEllipsis, faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Card,
  Button,
} from "react-bootstrap";
import ThemeContext from "../../ContextApi/ThemeContext/Theme";
import "./Header.scss";

export default function Header() {
  const{ theme, toggleTheme} = useContext(ThemeContext)
  return (
    <Navbar  expand="lg" className={`customNavbar ${theme}`}>
      <Container className="d-flex justify-content-between">
        <div >
          <img
            src="https://blogzine.webestica.com/assets/images/logo.svg"
            alt=""
          />
        </div>

        <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto d-flex gap-3 align-items-center ${theme}`}>
              <NavDropdown title="Home" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Home Default
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Home lazy load
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Magazine Classic
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Magazine</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Home Cards
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pages</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Shop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Other orchives
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Post" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Post</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Post grid
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Post list
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Post list 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Post Card
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="LifeStyle"
                id="basic-nav-dropdown"
                className="lifeStyle"
              >
                <div className="d-flex gap-3">
                  <Card style={{ width: "16rem", border: "none" }}>
                    <Card.Img
                      variant="top"
                      src="https://blogzine.webestica.com/assets/images/blog/16by9/small/01.jpg"
                    />
                    <Card.Body>
                      <Card.Text className="text-dark">
                        7 common mistakes everyone makes while traveling
                      </Card.Text>
                      <Card.Text className="text-secondary">
                        JOAN WALLACE FEB 18, 2022
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "16rem", border: "none" }}>
                    <Card.Img
                      variant="top"
                      src="https://blogzine.webestica.com/assets/images/blog/16by9/small/02.jpg"
                    />
                    <Card.Body>
                      <Card.Text className="text-dark">
                        12 worst types of business accounts you follow on
                        Twitter
                      </Card.Text>
                      <Card.Text className="text-secondary">
                        LORI STEVENS JUN 03, 2022
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: "16rem", border: "none" }}>
                    <Card.Img
                      variant="top"
                      src="https://blogzine.webestica.com/assets/images/blog/16by9/small/03.jpg"
                    />
                    <Card.Body>
                      <Card.Text className="text-dark">
                        Skills that you can learn from business
                      </Card.Text>
                      <Card.Text className="text-secondary">
                        JUDY NGUYEN SEP 07, 2022
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    style={{
                      width: "16rem",
                      border: "none",
                      textAlign: "center",
                      backgroundColor: "#BDF3F7",
                    }}
                  >
                    <Card.Body>
                      <Card.Text className="text-secondary">
                        The Blogzine
                      </Card.Text>
                      <Card.Text className="text-dark display-6">
                        Premium Membership
                      </Card.Text>
                      <Card.Text className="text-secondary">
                        Become a Member Today!
                      </Card.Text>
                      <Button variant="warning">View pricing plans</Button>
                    </Card.Body>
                  </Card>
                </div>

                <div className="mt-4 d-flex gap-3 align-items-center">
                <span>Trending tags:</span>
                  <Button variant="outline-primary">Travel</Button>{" "}
                  <Button variant="outline-secondary">Business</Button>{" "}
                  <Button variant="outline-success">Tech</Button>{" "}
                  <Button variant="outline-warning">Gadgets</Button>{" "}
                  <Button variant="outline-danger">LifeStyle</Button>{" "}
                  <Button variant="outline-info">Vaccine</Button>{" "}
                  <Button variant="outline-dark">Sports</Button>
                  <Button variant="outline-danger">Covid 19</Button>{" "}
                </div>
              </NavDropdown>
                <div  className="d-flex gap-4 align-items-center">
                    <span>Dashboard</span>
                    <div>
                    {
                      theme === "dark"?
                     <FontAwesomeIcon icon={faMoon} onClick={() => toggleTheme("dark")}></FontAwesomeIcon> :
                     <FontAwesomeIcon icon={faSun} onClick={() => toggleTheme("light")}></FontAwesomeIcon>
                      
                    }
                    </div>
                    <FontAwesomeIcon style={{fontSize: "30px"}} icon={faEllipsis}></FontAwesomeIcon>  
                    <Button variant="danger" style={{fontSize: "14px"}}>Subscribe</Button> 
                    <FontAwesomeIcon style={{fontSize: "20px", color:"gray"}} icon={faSearch}></FontAwesomeIcon>  
                </div>


            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
