import React, { useContext } from "react";
import {FaFacebookSquare, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"
import { Button } from "react-bootstrap";
import "./Footer.scss";
import ThemeContext from "../../ContextApi/ThemeContext/Theme";

export default function Footer() {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={`${theme}`}>
      <div className="footerBlock">
        <div className="box_text">
          <img
            src="https://blogzine.webestica.com/assets/images/logo.svg"
            alt=""
          />
          <p className="mt-4">
            The next-generation blog, news, and magazine theme for you to start
            sharing your stories today! This Bootstrap 5 based theme is ideal
            for all types of sites that deliver the news.
          </p>
          <p style={{marginTop: "34px"}}>©2022 Webestica. All rights reserved</p>
        </div>
        <div className="box_links">
            <h4 >Navigation</h4>
            <div className="d-flex align-items-center justify-content-between">
                <ul >
                    <li><a href="hh">Features</a></li>
                    <li><a href="hh">Style Guide</a></li>
                    <li><a href="hh">Contact Us</a></li>
                    <li><a href="hh">Contact Us</a></li>
                    <li><a href="hh">Support</a></li>
                </ul>
                <ul>
                    <li><a href="hh">News</a></li>
                    <li><a href="hh">Career</a></li>
                    <li><a href="hh">Technology</a></li>
                    <li><a href="hh">Startups</a></li>
                    <li><a href="hh">Gadgets</a></li>
                </ul>
            </div>
        </div>
        <div className="box_btns">
            <h4>Browse by Tag</h4>

            <div className="btns mt-4">
                <Button variant="outline-primary">Travel</Button>
                <Button  variant="outline-warning">Business</Button>
                <Button  variant="outline-success">Tech</Button>
                <Button variant="outline-danger">Gadgets</Button>
                <Button  variant="outline-primary">LifeStyle</Button>
                <Button  variant="outline-primary">Vaccine</Button>
                <Button  variant="outline-warning">Marketing</Button>
                <Button  variant="outline-success">Sports</Button>
                <Button  variant="outline-danger">Covid-19</Button>
                <Button  variant="outline-danger">Politics</Button>
            </div>
        </div>

        <div className="box_handles">
            <h4>Our Social handles</h4>

            <div className="mt-4">
             <p className="text-secondary"><FaFacebookSquare className="text-primary"/> Facebook</p>
             <p className="text-secondary"><FaTwitter className="text-primary"/> Twitter</p>
             <p className="text-secondary"><FaLinkedin className="text-primary"/> Linkedin</p>
             <p className="text-secondary"><FaYoutube className="text-danger"/> You tube</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
