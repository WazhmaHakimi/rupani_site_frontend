import React from 'react'
import Banner from './Images/aboutUs.jpg'
import AboutUs1 from './Images/Rectangle755.png'
import AboutUs2 from './Images/howWeAre31.png'
import Icon1 from './Images/icon1.svg'
import './Styles/AboutUsStyle.css'
import DocumentTitle from '../Components/DocumentTitle'

function AboutUs() {

  DocumentTitle('About');


  return (
    <div className='about-us content'>
      <div className='banner'>
        <img src={Banner} height={300} />
      </div>

      <div className='body-wraper about-us-content py-4'>
        <h2 className='text-uppercase text-center yellow-text'>About Us</h2>
        <p className='gray-text'>
          Rupani Foundation (RF) started its work in Afghanistan in 2008, focused on three major areas including NRM, ECD and Skill Development for Women.
        </p>

        <div className='about-row mb-4'>
          <div className='about-us-text'>
            <p>
              The Foundation was the organization that preceded the Rupani Initiatives (RI). These initiatives are unique in scope and adapts an approach that combines and leverages the social and economic development to address the complex underlying aspects of development with the objectives of bringing a positive change in the lives of peoples in target geographies.
            </p>
            <p>
              Rupani Foundation responds more deliberately to specific population segments e.g., girls and women, youth, minorities, and the elderly.
            </p>
          </div>
          <div className='about-us-image'>
            <img src={AboutUs1} width={500} />
          </div>

        </div>

        <div className='thematic-area-row pb-4'>

          <div className='thematic-area-text'>
            <h2 className='text-uppercase yellow-text'>THEMATIC AREAS</h2>
            <p>
              The core interventions of the Foundation revolve around &nbsp;
              <span>
                early childhood development, education, economic inclusion, brain well-being, natural resources management, humanitarian assistance with cross-cutting themes of gender, environment, civil society, and local governance.
              </span>

            </p>
            <p>
              Since its inception, the Foundation has been implementing innovative programs to enhance skills and introduce value addition in local resources in partnership with local, national, and international agencies, and also promoting the holistic development of children (conception-8 years) by providing essential Early Childhood Development (ECD) and educational programs.
            </p>

          </div>
          <div className='thematic-area-image'>
            <img src={AboutUs2} width={500} />
          </div>
        </div>

        <div className='statistic-row mb-4'>
          <div className='statistic-data'>
            <img src={Icon1} />
            <h2>15,000</h2>
            <p className='text-uppercase'>
              RF TRAINED OVER 15,000 LOCAL YOUTH IN EMPLOYABLE SKILLS.
            </p>
          </div>
          <div className='statistic-data'>
            <img src={Icon1} />
            <h2>15,000</h2>
            <p className='text-uppercase'>
              RF TRAINED OVER 15,000 LOCAL YOUTH IN EMPLOYABLE SKILLS.
            </p>
          </div>
          <div className='statistic-data'>
            <img src={Icon1} />
            <h2>15,000</h2>
            <p className='text-uppercase'>
              RF TRAINED OVER 15,000 LOCAL YOUTH IN EMPLOYABLE SKILLS.
            </p>
          </div>
          <div className='statistic-data'>
            <img src={Icon1} />
            <h2>15,000</h2>
            <p className='text-uppercase'>
              RF TRAINED OVER 15,000 LOCAL YOUTH IN EMPLOYABLE SKILLS.
            </p>
          </div>
          <div className='statistic-data'>
            <img src={Icon1} />
            <h2>15,000</h2>
            <p className='text-uppercase'>
              RF TRAINED OVER 15,000 LOCAL YOUTH IN EMPLOYABLE SKILLS.
            </p>
          </div>
        </div>

        <div className='geographic-area-row pb-3'>
          <h2 className='yellow-text text-center fw-semibold text-uppercase my-2'>
            Geographic Areas of Focus
          </h2>
          <p>
            Rupani Foundation Pakistan is working from the deserts of Sindh to the mountians of Gilgit-Baltistan. Most of the activities are concentrated in Gilgit-Baltistan, Sindh and Punjab. The Foundation has increasingly expanded programs to include other remote and resource-poor areas of Pakistan.
          </p>
          <p>
            Our Core Office is based in Gilgit with two main offices in Islamabad and Karachi.
          </p>
          <p>
            The sister organisations of the Foundation also operate across Pakistan and other parts of the world by focusing on different innovative programe in different thematic areas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
