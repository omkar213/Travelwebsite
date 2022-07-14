import React, { Component } from "react";
import Slider from 'react-slick';
import aboutusimage1 from './images/aboutus-image1.png';
import aboutusimage2 from './images/aboutus-image2.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 912,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="aboutUS-section">
        <div className="aboutUS-image1">
            <img src={aboutusimage1}/>
        </div>
        <h2 className="slidet-text">Here's what they have to say...</h2>
        <Slider {...settings}>
            <div className="slider-blog-box">
                <div className="profile">
                    <a href="#"><i class="fa-solid fa-user"></i></a>
                </div>
                <h2>Customer Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip
                   isicing elit, sed do ei usmod tempor incid idunt
                   ut labore et dolore magna aliqua. 
                </p>
            </div>
            <div className="slider-blog-box">
                <div className="profile">
                    <a href="#"><i class="fa-solid fa-user"></i></a>
                </div>
                <h2>Customer Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip
                   isicing elit, sed do ei usmod tempor incid idunt
                   ut labore et dolore magna aliqua. 
                </p>
            </div>
            <div className="slider-blog-box">
                <div className="profile">
                    <a href="#"><i class="fa-solid fa-user"></i></a>
                </div>
                <h2>Customer Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip
                   isicing elit, sed do ei usmod tempor incid idunt
                   ut labore et dolore magna aliqua. 
                </p>
            </div>
            <div className="slider-blog-box">
                <div className="profile">
                    <a href="#"><i class="fa-solid fa-user"></i></a>
                </div>
                <h2>Customer Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip
                   isicing elit, sed do ei usmod tempor incid idunt
                   ut labore et dolore magna aliqua. 
                </p>
            </div>
            <div className="slider-blog-box">
                <div className="profile">
                    <a href="#"><i class="fa-solid fa-user"></i></a>
                </div>
                <h2>Customer Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip
                   isicing elit, sed do ei usmod tempor incid idunt
                   ut labore et dolore magna aliqua. 
                </p>
            </div>
            <div className="slider-blog-box">
                <div className="profile">
                    <a href="#"><i class="fa-solid fa-user"></i></a>
                </div>
                <h2>Customer Name</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip
                   isicing elit, sed do ei usmod tempor incid idunt
                   ut labore et dolore magna aliqua. 
                </p>
            </div>
        </Slider>
        <div className="aboutUS-image2">
            <img src={aboutusimage2}/>
        </div>
      </div>
    );
  }
}