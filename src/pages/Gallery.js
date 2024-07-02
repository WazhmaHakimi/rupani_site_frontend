import React, { useEffect, useState } from 'react'
import Image1 from './Images/1709652600.png'
import './Styles/GalleryStyle.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios'

function Gallery() {

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/gallery')
            .then(res => {
                setGallery(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    DocumentTitle('Gallery');

    return (
        <div className='gallery content'>
            <h2 className='text-uppercase text-center yellow-text pt-3'>
                Photo Gallery
            </h2>
            <div className='grid-cards pb-5 pt-3'>
                {
                    gallery.map(item =>
                        <div className='grid-item'>
                            <img src={`http://127.0.0.1:8000/${item.image}`} alt={item.image_alt} />
                            <p>{item.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Gallery
