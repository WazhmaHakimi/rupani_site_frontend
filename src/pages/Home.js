import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Box } from '@mui/material'
import FootPrint1 from './Images/Picture1.svg'
import FootPrint2 from './Images/Picture2.svg'
import FootPrint3 from './Images/Picture3.svg'
import FootPrint4 from './Images/Picture4.svg'
import FootPrint5 from './Images/Picture5.svg'
import FootPrint6 from './Images/Picture6.svg'
import FootPrint7 from './Images/Picture7.svg'
import FootPrint8 from './Images/Picture8.svg'
import FootPrint9 from './Images/Picture9.svg'
import FootPrint10 from './Images/Picture10.svg'
import KeepUp from './Images/keepUp.svg'
import MultipleImagesSlideShow from './MultipleImagesSlideShow';
import './Styles/HomeStyle.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios'

export default function Home() {
  const [sliders, setSliders] = useState([])
  const [sliderSetting, setSliderSetting] = useState({})
  const [whatWeDoCategory, setWhatWeDoCategory] = useState([])
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

    axios.get('http://127.0.0.1:8000/api/whatWeDoCategory')
      .then(res => {
        setWhatWeDoCategory(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Box className='content' style={{ display: 'block', width: '100%' }}>
      <div className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval={sliderSetting.interval} data-bs-wrap="true" data-bs-pause="false">
        <div className="carousel-inner">
          {
            sliders.map(slider =>
              <div className="carousel-item active">
                <img src={'http://127.0.0.1:8000/' + slider.image} className="d-block w-100" alt={slider.image_alt} />
              </div>
            )
          }
        </div>
        <span className="carousel-text-overlay">{sliderSetting.slider_text}</span>
      </div>


      <Box sx={{ backgroundColor: '#f1f7f4' }}>
        <div className='container index-body py-4'>
          <div className='row'>
            <p className='about-text font-poppins font-normal font-400 text-center'>
              Rupani Foundation Afghanistan is implementing innovative, community-driven development solutions to respond to development challenges for over 16 years, reaching out to vulnerable populations in Afghanistan, irrespective of their race, religion, ethnicity, or gender. The goal of the Foundation is to consolidate the needed human, financial and technical resources to help the poorest and most marginalized in target geographies, especially women and girls, such that they achieve a level of self-reliance and positive change in their wellbeing...
              <a href='Aboutus' className='yellow-link'>Read More</a>
            </p>
          </div>


          <div className="row what-we-do mb-5">
            <div className='row'>
              <h2 className='my-5 text-center yellow-text'>WHAT WE DO</h2>
            </div>

            <div className='row about-cards'>
              {
                whatWeDoCategory.map(item =>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 px-0 ">

                    <div className="card">
                      <a href={item.slug}>
                        <img
                          src={`http://127.0.0.1:8000/${item.image}`}
                          alt={item.image_alt}
                          height='190'
                        />

                        <div className='intro text-uppercase'>
                          <h6>{item.name}</h6>
                        </div>
                      </a>
                    </div>
                  </div>

                )
              }
            </div>
          </div>

          <MultipleImagesSlideShow />

          <div className='py-3 footprint'>
            <h2 className='yellow-text text-center pt-5'>RF FOOTPRINTS IN AFGHANISTAN
            </h2>
            <div className='grid-box'>
              <div className='grid-items'>
                <div>
                  <img src={FootPrint1} />
                </div>
                <p className='fw-bold'>
                  Incorporated  2008
                </p>
              </div>

              <div className='grid-items'>
                <div>
                  <img src={FootPrint2} />
                </div>
                <p className='fw-bold'>
                  Presence 3 provinces
                </p>
              </div>

              <div className='grid-items'>
                <div>
                  <img src={FootPrint3} />
                </div>
                <p className='fw-bold'>
                  People trained 8000+
                </p>
              </div>

              <div className='grid-items'>
                <div>
                  <img src={FootPrint4} />
                </div>
                <p className='fw-bold'>
                  Business enterprises established 470 +
                </p>
              </div>

              <div className='grid-items'>
                <div>
                  <img src={FootPrint5} />
                </div>
                <p className='fw-bold'>
                  Non–fruit trees planted 20.4 million +
                </p>
              </div>

              <div className='grid-items'>
                <div>
                  <img src={FootPrint6} />
                </div>
                <p className='fw-bold'>
                  Fruit trees planted 0.5 million +
                </p>
              </div>

              <div className='grid-items'>
                <div>
                  <img src={FootPrint7} />
                </div>
                <p className='fw-bold'>
                  Irrigation & DRR infrastructure built  500km +
                </p>
              </div>

              <div className='grid-items'>
                <div>
                  <img src={FootPrint8} />
                </div>
                <p className='fw-bold'>
                  Landscape restored  5000+ hectares
                </p>
              </div>

              <div className='grid-items'>
                <div>
                  <img src={FootPrint9} />
                </div>
                <p className='fw-bold'>
                  Students reached through  ECD  3700
                </p>
              </div>

              <div className='grid-items'>
                <div>
                  <img src={FootPrint10} />
                </div>
                <p className='fw-bold'>
                  Beneficiaries reached 0.5 million +
                </p>
              </div>
            </div>
          </div>

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