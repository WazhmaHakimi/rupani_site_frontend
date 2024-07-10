import React, { useEffect, useState } from 'react'
import DVImg1 from './Images/1709286701.png'
import './Styles/DocementaryVideosStyle.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios'

function DocumentaryVideos() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/documentaryVideos')
            .then(res => {
                setVideos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    DocumentTitle('Documentary - Videos');

    return (
        <div className='documentary-videos content'>
            <h2 className='text-uppercase yellow-text text-center py-5'>
                Documentary - Videos
            </h2>

            <div className='grid-cards pb-5'>
                {
                    videos.map(item =>
                        <div className='grid-item'>
                            <a href={item.video_link} target='_blank'>
                                <img src={`http://127.0.0.1:8000/${item.image}`} />
                            </a>
                            <p className='fw-semibold pt-3 px-3'>
                                {item.title}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DocumentaryVideos
