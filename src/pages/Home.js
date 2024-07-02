import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Box } from '@mui/material'
import SliderOne from './Images/Rectangle1.png'
import SliderTwo from './Images/Rectangle2.png'
import SliderThree from './Images/Rectangle3.png'
import SliderFour from './Images/Rectangle4.png'
import WhoWeAre1 from './Images/woWeAre-1.png'
import WhoWeAre2 from './Images/woWeAre-2.png'
import WhoWeAre3 from './Images/woWeAre-3.png'
import WhoWeAre4 from './Images/woWeAre-4.png'
import WhoWeAre5 from './Images/woWeAre-5.png'
import WhoWeAre6 from './Images/woWeAre-6.png'
import KeepUp from './Images/keepUp.svg'
import MultipleImagesSlideShow from './MultipleImagesSlideShow';
import './Styles/HomeStyle.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios'

export default function Home() {
  const [sliders, setSliders] = useState([]);
  const [sliderSetting, setSliderSetting] = useState({});
  DocumentTitle('Home');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/sliders')
      .then(res => {
        setSliders(res.data)
      })
      .catch(err => {
        console.log(err)
      })

      axios.get('http://127.0.0.1:8000/api/sliderSetting')
      .then(res => {
        setSliderSetting(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Box className='content' style={{ display: 'block', width: '100%' }}>
      <div className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={ sliderSetting.interval } data-bs-wrap="true" data-bs-pause="false">
        <div className="carousel-inner">
          {
            sliders.map(slider =>
              <div className="carousel-item active">
                <img src={'http://127.0.0.1:8000/' + slider.image} height={550} className="d-block w-100" alt={slider.image_alt} />
              </div>
            )
          }
        </div>
        <span className="carousel-text-overlay">{ sliderSetting.slider_text }</span>
      </div>


      <Box sx={{ backgroundColor: '#f1f7f4' }}>
        <div className='container index-body py-4'>
          <div className='row'>
            <p className='about-text font-poppins font-normal font-400 text-center'>
              Rupani Foundation Pakistan is implementing innovative, community-driven development solutions to respond to development challenges for over 16 years, reaching out to vulnerable populations in Pakistan, irrespective of their race, religion, ethnicity, or gender. The goal of the Foundation is to consolidate the needed human, financial and technical resources to help the poorest and most marginalized in target geographies, especially women and girls, such that they achieve a level of self-reliance and positive change in their wellbeing...
              <a href='Aboutus' className='yellow-link'>Read More</a>
            </p>
          </div>


          <div className="row what-we-do mb-5">
            <div className='row'>
              <h2 className='my-5 text-center yellow-text'>WHAT WE DO</h2>
            </div>

            <div className='row about-cards'>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 px-0 ">
                <div className="card">
                  <a href="Earlychildhood">
                    <img
                      src={WhoWeAre1}
                      alt=""
                    />

                    <div className='intro text-uppercase'>
                      <h6>Early Childhood development</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12 px-0 ">
                <div className="card">
                  <a href="Education">
                    <img
                      src={WhoWeAre2}
                      alt=""
                    />

                    <div className='intro text-uppercase'>
                      <h6>Education</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12 px-0 ">
                <div className="card">
                  <a href="Economicinclusion">
                    <img
                      src={WhoWeAre3}
                      alt=""
                    />

                    <div className='intro text-uppercase'>
                      <h6>Economic Inclusion</h6>
                    </div>
                  </a>


                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12 px-0 ">
                <div className="card">
                  <a href="Mentalhealth">
                    <img
                      src={WhoWeAre4}
                      alt=""
                    />

                    <div className='intro text-uppercase'>
                      <h6>Mental Health</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12 px-0 ">
                <div className="card">
                  <a href="Nresource">
                    <img
                      src={WhoWeAre5}
                      alt=""
                    />

                    <div className='intro text-uppercase'>
                      <h6>Natural Resources Management</h6>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12 px-0 ">
                <a href='Humanitarian'>
                  <div className="card">
                    <img
                      src={WhoWeAre6}
                      alt=""
                    />
                    <div className='intro text-uppercase'>
                      <h6>Humanitarian Assistance</h6>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>

          <MultipleImagesSlideShow />

          <div className='row pt-5 pb-5'>
            <div className="col-12">
              <h2 className="text-center yellow-text mb-5">SUBSCRIBE</h2>
            </div>
            <div className='col-12 subscribe pt-5 pb-5'>
              <div className='row'>
                <div className='col-8 offset-2'>
                  <div className='row'>
                    <div className='col-lg-4 col-md-12 col-12 yellow-text'>
                      <h2 className='text-uppercase'>Keep <img src={KeepUp} /> updated</h2>
                    </div>
                    <div className='col-lg-8 col-md-12 col-12'>
                      <div className='row'>
                        <div className='col-12 pb-4'>
                          Enter your email to subscribe to Rupani Bulletin
                        </div>
                        <div className='col-lg-8 col-md-8 col-12'>
                          <input type='text' placeholder='Email Address' />
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                          <a href='#' className='btn-yellow text-capitalize'>Subscribe</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Box>

    </Box>
  );
}