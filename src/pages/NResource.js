import React from 'react'
import Banner from './Images/NaturalResources1.png'
import NResource1 from './Images/Nr3.png'
import NResource2 from './Images/NR22.png'
import './Styles/NResourceStyle.css'
import DocumentTitle from '../Components/DocumentTitle'

function NResource() {

    DocumentTitle('Natural Resources');

    return (
        <div className='natural-resource content'>
            <div className='banner'>
                <img src={Banner} />
                <div className='intro-text'>
                    <p className='text-center text-white'>Rupani Foundations’ program areas are often rich in natural resources. Around 3 million people in RF program geographies derive a large part of their livelihoods from agriculture, including farmers, farm laborer and employees of agri-businesses.</p>
                </div>
            </div>

            <div className='natural-resource-data'>
                <h2 className='yellow-text text-center text-uppercase'>NATURAL RESOURCE MANAGEMENT (NRM)</h2>

                <p>
                    Rupani Foundation adapts the tested models including Rural Support Program (RSPs) model of participatory rural development with more innovation and evidence-based solutions as per need of the time and contexts.
                </p>
                <p>
                    The RF’ adapted and upgraded methodologies will stimulate inclusive economic growth and creating resilient communities and institutions in diverse, remote and fragile regions, notably the mountain regions and coastal marginalized populations in the northern plains of Pakistan.
                </p>

                <div className='flex-box'>
                    <div className='natural-resource-image'>
                        <div>
                            <img src={NResource1} />
                        </div>

                        <div>
                            <img src={NResource2} />
                        </div>
                    </div>
                    <div className='natural-resource-text'>
                        <p>
                            Evolving over time and capitalizing on the strong base of grassroot institutions, the programs in certain regions will remain the drivers for RF’ integrated development approach. RF will enhance the self-reliance of rural communities through climate change sensitive sustainable agriculture practices and will be contributing to better household nutrition and food security needs of the most disadvantaged populations. Interventions to sustain the management of natural resources for future generations including harvesting and conserving water, land management and adapting farming systems to meet the challenges of climate change, economic and environmental shocks.
                        </p>
                        <p>
                            RF will facilitate investments in essential productive rural infrastructure (e.g. roads, bridges, micro-hydro, irrigation) and aims to increase the incomes of men and women working in the agricultural sector, supporting farmers to raise the productivity of their lands while minimizing soil disturbance and promoting soil cover (conservation agriculture), crop rotation, agroforestry and water management. RF is working with local agricultural research institutions to strengthen farming systems and agri-business opportunities, focusing on higher value crops with a market development approach.
                        </p>
                        <p>
                            This will connect farmers to fast growing national and regional markets that have an increasing demand for products and promotes investment in value chains and value-added processing, adding value to primary agricultural produce and providing greater economic stability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NResource
