import React from 'react'
import Banner from './Images/mission.jpg'
import Vision from './Images/Vission-icon.svg'
import Mission from './Images/mission-icon.svg'
import Value from './Images/values-icon.svg'
import VisionMissionValue from './Images/mission1.jpg'
import './Styles/MissionAndValueStyle.css'
import DocumentTitle from '../Components/DocumentTitle'

function MissionAndValue() {

    DocumentTitle('Mission Statement');

    return (
        <div className='mission-and-value content'>
            <div className='banner'>
                <img src={Banner} />
            </div>

            <div className='content py-5'>
                <div className='contents'>
                    {/* <div className='content-text'>
                        <img src={Vision} width={35} />
                        <h2 className='yellow-text text-uppercase pt-2'>Vision</h2>
                        <p>To create a sustainable society for future generation.<br /></p>
                    </div> */}

                    <div className='content-text'>
                        <img src={Mission} width={35} />
                        <h2 className='yellow-text text-uppercase pt-2'>Mission Statement</h2>
                        <p>Empower communities and promote sustainable development in Afghanistan through innovative initiatives in climate resilience, early childhood development, youth empowerment, livelihood support, and community engagement. Our mission is to create positive social and environmental impact by fostering education, entrepreneurship, and environmental stewardship, thereby enhancing the well-being and resilience of Afghan communities.”</p>
                    </div>

                    {/* <div className='content-text'>
                        <img src={Value} width={35} />
                        <h2 className='yellow-text text-uppercase pt-2'>Values</h2>
                        <p>The organizational values underpin the behaviors of RF employees and its interventions as a guiding action:</p>
                        <p>
                            <span className='green-text fw-bold'>Pluralism: </span>
                            We recognize and appreciate diversity in all its forms. Pluralism is a fundamental value that we uphold, both within our organization and in all the initiatives we undertake.
                        </p>
                        <p>
                            <span className='green-text fw-bold'>Collaboration: </span>
                            Our impact and accountability lie in our ongoing efforts to collaborate and learn with others.
                        </p>
                        <p>
                            <span className='green-text fw-bold'>Transformation: </span>
                            We strive to achieve transformational results by implementing system-shifting models. This is our primary goal.
                        </p>
                        <p>
                            <span className='green-text fw-bold'>Pluralism: </span>
                            We recognize and appreciate diversity in all its forms. Pluralism is a fundamental value that we uphold, both within our organization and in all the initiatives we undertake.
                        </p>
                    </div> */}


                </div>
                <div className='image'>
                    <img src={VisionMissionValue} />
                </div>
            </div>
        </div>
    )
}

export default MissionAndValue
