import React, { useEffect, useState } from 'react'
import './Styles/WhatWeDoStyle.css'
import DocumentTitle from '../Components/DocumentTitle'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function WhatWeDo(props) {

    const { slug } = useParams();

    const [whatWeDo, setWhatWeDo] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${slug}`)
            .then(res => {
                setWhatWeDo(res.data);
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    DocumentTitle(whatWeDo.map(item => item.title));

    return (
        <div>
            {
                whatWeDo.map(item =>
                    < div className='natural-resource content'>

                        <div className='banner'>
                            <img height={500} src={`http://127.0.0.1:8000/${item.starter_image}`} />

                            <div className='intro-text'>
                                <p className='text-center text-white'>{item.starter_text}</p>
                            </div>
                        </div>
                        <div className='natural-resource-data pb-5'>
                            <h2 className='yellow-text text-center text-uppercase'>{item.title}</h2>
                            
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                        </div>
                    </div >
                )
            }
        </div>
    )
}

export default WhatWeDo
