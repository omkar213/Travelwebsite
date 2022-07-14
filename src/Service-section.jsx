import React, { Component } from "react";
import Slider from 'react-slick';
import servicerightimage from './images/service-image.jpg';

export default class Bannersection extends Component{
    render() {
        const settings = {
            dots: false,
            arrows:true,
            infinite: true,
            speed: 500,
            autoplay: false,
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
                    breakpoint: 820,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      infinite: true,
                      dots: false
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
    return(
        <>
            <div className="service-section">
                <div className="service-section-folder">    
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
                </div>
                <div className="servicewrapper">
                    <div className="service-left">
                        <h2>Lorem ipsum dolor
                            sit amet consectetur
                        </h2>
                    </div>
                    <div className="service-right">
                        <div className="service-right-image">
                            <img src={servicerightimage}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
}