import React, { useEffect, useState } from 'react'
import './Styles/WhereWeWorkStyle.css'
import Map from './Images/mapImag1.png'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios';

export default function WhereWeWrok() {
    const [whereWeWork, setWhereWeWork] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/whereWeWork')
            .then(res => {
                setWhereWeWork(res.data)
                console.log(`hello ${whereWeWork}`)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    DocumentTitle('Where We Work');

    return (
        <div className='where-we-work content'>
            <div className='container'>

                {
                    whereWeWork.map(item =>
                        <div className='row'>
                            <div className='col-12 pt-5 pb-3'>

                                <p>
                                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                </p>
                            </div>
                            <div className='col-12 mb-5 pm-5 mt-3 map'>
                                <img className='map_image' src={`http://127.0.0.1:8000/${item.image}`} width={737} height={436} alt={item.image_alt} />
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}
