import React, { useEffect, useState } from 'react'
import Partner1 from './Images/image22.3844fcfa.png'
import Partner2 from './Images/image23.c440ac7c.png'
import Partner3 from './Images/image24.f9abb6f2.png'
import Partner4 from './Images/image25.09018ca0.png'
import Partner5 from './Images/image26.257c309c.svg'
import Partner6 from './Images/image32.9b0ed8f4.png'
import Partner7 from './Images/image33.36c0638b.png'
import Partner8 from './Images/image34.d3ed5e8b.png'
import Partner9 from './Images/image35.d406081b.png'
import Partner10 from './Images/image36.379c10c1.png'
import Partner11 from './Images/image42.e13c5caa.png'
import Partner12 from './Images/image43.7423a39f.png'
import Partner13 from './Images/image44.71e87efa.png'
import Partner14 from './Images/image45.533ccdaa.png'
import Partner15 from './Images/image48.5077bbcf.png'
import Partner16 from './Images/image46.20ba8d06.png'
import './Styles/PartnersStyle.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios'

function Partners() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/partners')
            .then(res => {
                setPartners(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    DocumentTitle('Partners');

    return (
        <div className='partners content'>
            <div className='container py-5'>
                <div className='row'>
                    <h2 className='text-center yellow-text text-uppercase'>
                        Our Partners
                    </h2>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <p>
                            Rupani Foundation works closely with governments, donors, and civil society stakeholders in the design and implementation of development projects.
                        </p>
                        <p>
                            The following partners contributed financially or materially to the programs of Rupani Foundation. The Foundation sincerely acknowledge the contributions of our partners and well-wishers.
                        </p>
                    </div>
                </div>

                <div className='partner-logos mt-4'>
                    {
                        partners.map(item =>
                            <div className='partner-logo'>
                                <a href={item.link}>
                                    <img src={'http://127.0.0.1:8000/' + item.image} />
                                </a>
                            </div>
                        )
                    }
                </div>

                <div className='partners-list mt-4'>
                    <ul>
                        {
                            partners.map(item => 
                                <li>{ item.name }</li>
                            )
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Partners
