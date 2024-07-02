import React from 'react'
import Banner from './Images/Humanitarians22.png'
import HumanitarianImage from './Images/Humanitarians11.png'
import Video from './Images/vidoYoutb.png'
import './Styles/HumanitarianStyle.css'
import DocumentTitle from '../Components/DocumentTitle'

function Humanitarian() {

    DocumentTitle('Humanitarian');

    return (
        <div className='humanitarian-box content'>
            <div className='banner'>
                <img src={Banner} />
                <div className='intro-text'>
                    <p className='text-center text-white'>The Foundation operates in areas which are highly vulnerable to natural disasters. From flashfloods and earthquakes to avalanches and landslides, the region faces a range of potential hazards that can have devastating consequences for local communities.</p>
                </div>
            </div>
            <div className='humanitarian-data'>
                <h2 className='text-center yellow-text'>
                    HUMANITARIAN ASSISTANCE
                </h2>

                <div className='humanitarian-p'>
                    <p>
                        Rupani Foundation, Pakistan distributed flood relief packages among the affectees in flood-hit areas of Gilgit-Baltistan and Sindh during the 2022 torrential rains. The Foundation also provided tents and boats for the affectees in Balochistan.
                    </p>

                    <p>
                        Similarly, the Foundation provided ration to the affectees of Glacial Lake Outburst Flood (GLOF) in Hassanabad, Hunza.
                    </p>
                </div>

                <div className='flex-box pb-5'>
                    <div className='humanitarian-text'>
                        <p>
                            At the time when COVID-19 were posing unprecedented challenges to states and communities across the globe, Rupani Foundation played its role in reducing the miseries of vulnerable communities:
                        </p>
                        <ul>
                            <li>
                                The Foundation distributed over 200 tons of ration among the families in the low-income areas in Gilgit-Baltistan, KPK, Punjab and Sindh.
                            </li>
                            <li>
                                Rupani Foundation distributed Personal Protective Equipment (PPEs) across the country.
                            </li>
                            <li>
                                Conducted awareness campaigns to educate people about hygiene and physical distancing.
                            </li>
                        </ul>
                    </div>

                    <div className='humanitarian-image'>
                        <img src={HumanitarianImage} />
                    </div>
                </div>

                <div className='humanitarian-video'>
                    <a href='#'>
                        <img src={Video} />
                        <p className='text-uppercase pt-4'>
                            Covid:
                        </p>
                    </a>

                    <a href='#'>
                        <img src={Video} />
                        <p className='text-uppercase pt-4'>
                            Covid:
                        </p>
                    </a>

                    <a href='#'>
                        <img src={Video} />
                        <p className='text-uppercase pt-4'>
                            Covid:
                        </p>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Humanitarian
