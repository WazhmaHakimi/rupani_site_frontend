import React, { useEffect, useState } from 'react'
import CareerImg from './Images/1709299324.png'
import './Styles/CareersStyle.css'
import DocumentTitle from '../Components/DocumentTitle'
import axios from 'axios'

function Careers() {
    const [careers, setCareers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/career')
            .then(res => {
                setCareers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    DocumentTitle('Careers');

    return (
        <div className='careers content'>
            <h2 className='yellow-text text-center text-uppercase pt-3'>
                CAREERS
            </h2>
            <p>
                Thank you for your interest in working with Rupani Foundation! Our current career opportunities are listed below:
            </p>

            <div className='flex-box'>
                {
                    careers.map(item =>
                        <div className='flex-item'>
                            <p className='fw-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none"><path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FFA400"></path></svg>
                                <span className='m-3'>
                                    {item.title}
                                </span>
                            </p>
                            <p className='gray-text'>
                                last Date: {item.closing_date}
                            </p>
                            <a href={item.link}>
                                <img src={`http://127.0.0.1:8000/${item.image}`} alt={item.image_alt} />
                            </a>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Careers
