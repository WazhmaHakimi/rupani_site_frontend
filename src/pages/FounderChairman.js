import React from 'react'
import Banner from './Images/img2.png'
import Founder from './Images/mainImage.png'
import Services from './Images/img12.png'
import Awards from './Images/img3.png'
import './Styles/FounderChairmanStyle.css'
import DocumentTitle from '../Components/DocumentTitle'

function FounderChairman() {

    DocumentTitle('Founder Chariman');

    return (
        <div className='founder-chairman content'>
            <div className='banner'>
                <img src={Banner} />
            </div>

            <div className='content'>
                <div className='founder pb-4'>
                    <div className='founder-data'>
                        <h2 className='yellow-text text-uppercase'>Founder & Chariman</h2>
                        <p>
                            A US-based Pakistani entrepreneur and philanthropist, Mr. Nasruddin Rupani is the Founder and Chairman of Rupani Foundation Pakistan.
                        </p>
                        <p>A civil engineer by education from New York University (NYU), Mr. Rupani has great compassion for community service and humanitarian values. With the aim to serve his beloved country Pakistan, he established Rupani Foundation, Pakistan in 2007 with the vision to create a sustainable society for the future generations.</p>
                        <p>Mr. Rupani is also Founder and Chairman of many other civil society organizations based in Pakistan, USA, and other countries.</p>
                        <p>He is Chairman and Founder of Pakistan Alliance for Early Childhood (PAFEC), which is a network of over 500 institutions in Pakistan working on Early Childhood.</p>
                        <p>In USA, Mr. Rupani chairs Ibn Sina Foundation which is a not-for-profit organization providing medical care to the underserved and underprivileged populations in Houston.</p>
                        <p>The contribution in managing and nurturing community service institutions makes Mr. Rupani a highly respected and sought-after figure in the Pakistani community in USA.</p>
                    </div>

                    <div className='founder-image'>
                        <img src={Founder} />
                    </div>
                </div>

                <div className='services'>
                    <div className='services-data'>
                        <h2 className='yellow-text text-uppercase'>Services</h2>
                        <ul>
                            <li>Chairman Rupani Foundation</li>
                            <li>Chairman Pakistan Alliance for Early Childhood (PAFEC)</li>
                            <li>Chairman Ibn Sina Foundation</li>
                            <li>Member Task Force on Education in Pakistan (2018)</li>
                            <li>Board member Collaborative for Children</li>
                            <li>Board member UNICEF</li>
                            <li>Board member Baker Ripley</li>
                            <li>First Chairman Pakistan Gems and Jewelry Association</li>
                        </ul>
                    </div>

                    <div className='services-image'>
                        <img src={Services} />
                    </div>
                </div>

                <div className='awards'>
                    <h2 className='text-uppercase yellow-text'>Awards and Achivements</h2>
                    <div className='award-box'>
                        <div className='award-text'>
                            <ul>
                                <li>
                                    The President of Pakistan, Dr. Arif Alvi, conferred the esteemed ''Sitara-i-Khidmat'' upon Mr. Nasruddin Rupani for his outstanding services to Pakistan on the occasion of the 76th Independence Day.
                                </li>
                                <li>GlobalMindED Inclusive Leader Award 2023.</li>
                                <li>
                                    Fort Bend County Judge KP George recognition in 2022 for philanthropic services.
                                </li>
                                <li>
                                    Lifetime Achievement Award 2022 from US President Joe Biden for philanthropic services.
                                </li>
                                <li>
                                    CSR Award from National Forum for Environment and Health (NFEH) Pakistan 2021.
                                </li>
                                <li>
                                    DeMerchant Spotlight Award 2020 in recognition of philanthropic works.
                                </li>
                                <li>
                                    Sitara-e-Ehtraf by Pakistan’s foreign office for contributions during the COVID-19 Pandemic.
                                </li>
                                <li>
                                    South Asian Chamber of Commerce (SACC) Best Community Service Award.
                                </li>
                                <li>
                                    Pakistan Chamber of Commerce (PCC) Best Community Service Award.
                                </li>
                                <li>
                                    Asian American Family Services (AAFS) Best Community Service Award.
                                </li>
                                <li>
                                    Art of Living Foundation Heroes of Humanity Award for Uplifting Human Values.
                                </li>
                            </ul>
                        </div>

                        <div className='award-image'>
                            <img src={Awards} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FounderChairman
