import React, { useEffect, useState } from 'react'
import CardImg from './Images/1711685629.jpg'
import './Styles/PressReleaseStyle.css'
import './Styles/TabsCollapseStyle.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios';
// import './Styles/TabsCollapse.js'

function PressRelease() {

  DocumentTitle('Press Release');

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

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

  return (
    <div className='press-release content'>
      <h2 className='yellow-text text-center text-uppercase pt-3'>PRESS RELEASES</h2>
      <div className='press-cards pb-5'>
        {
          pressRelease.map(item =>
            <div className='press-card overflow-auto'>
              <img src={'http://127.0.0.1:8000/' + item.image} alt={item.image_alt} />
              <div className='fw-bold date'>
                {item.date}
              </div>
              <p>
                {item.content}
              </p>
            </div>
          )
        }
      </div>

      <div className="tabs-Collapse">
        <div className="tabs">
          <label
            className={`tabs__label ${activeTab === 1 ? 'tabs__label--active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            Profile
          </label>
          <label
            className={`tabs__label ${activeTab === 2 ? 'tabs__label--active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            Settings
          </label>
          <label
            className={`tabs__label ${activeTab === 3 ? 'tabs__label--active' : ''}`}
            onClick={() => handleTabClick(3)}
          >
            Options
          </label>
        </div>
        <div className="tabs__content">
          <div
            className={`tabs__pane ${activeTab === 1 ? 'tabs__pane--active' : ''}`}
          >
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
              <br />
              <br />
              Dramatically visualize customer directed convergence without
              revolutionary ROI.
            </p>
          </div>
          <div
            className={`tabs__pane ${activeTab === 2 ? 'tabs__pane--active' : ''}`}
          >
            <p>
              Completely synergize resource taxing relationships via premier niche
              markets. Professionally cultivate one-to-one customer service with
              robust ideas.
              <br />
              <br />
              Dynamically innovate resource-leveling customer service for state of the
              art customer service.
            </p>
          </div>
          <div
            className={`tabs__pane ${activeTab === 3 ? 'tabs__pane--active' : ''}`}
          >
            <p>
              Efficiently unleash cross-media information without cross-media value.
              Quickly maximize timely deliverables for real-time schemas.
              <br />
              <br />
              Dramatically maintain clicks-and-mortar solutions without functional
              solutions.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PressRelease
