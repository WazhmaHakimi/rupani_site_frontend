import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/MultipleImagesSlideShow.css';
import axios from "axios";

function MultipleImagesSlideShow() {
    const [pressRelease, setPressRelease] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/pressRelease')
            .then(res => {
                setPressRelease(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const PrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
                style={{
                    color: 'blue',
                    fontSize: '24px',
                    padding: '10px',
                    marginTop: '5%',
                    position: 'absolute',
                    left: '10px',
                    top: '100%',
                    zIndex: '1',
                }}
            >
            </div>
        );
    };

    const NextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
                style={{
                    color: 'red',
                    fontSize: '24px',
                    padding: '10px',
                    marginTop: '5%',
                    position: 'absolute',
                    left: '50px',
                    top: '100%',
                    zIndex: '1',
                }}
            >
            </div>
        );
    };

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <h2 className="yellow-text text-center text-uppercase pb-5">
                WHAT'S NEW
            </h2>
            <Slider {...settings}>
                {
                    pressRelease.map(item =>
                        <div>

                            <div className="card  rounded-0">
                                <img src={'http://127.0.0.1:8000/' + item.image} className="card-img-top" alt={item.image_alt} />
                                <div className="card-body">
                                    <p className='date'>{item.date}</p>
                                    <p className="card-text">
                                    {item.content.slice(0, 80)}
                                    {item.content.length > 80 && '...'}
                                    </p>
                                    <a href="Pressreleaseapi" className="btn-yellow text-capitalize">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>

                    )
                }
            </Slider>
            <div className="custom-timeline">

            </div>
        </div>
    );
}

export default MultipleImagesSlideShow;
