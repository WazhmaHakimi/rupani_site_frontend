import React, { useEffect, useState } from 'react'
import './Styles/BoardOfDirectors.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios'

function BoardOfDirectors() {
    const [directors, setDirectors] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/directors')
            .then(res => {
                setDirectors(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    DocumentTitle('Board of Directors');

    return (
        <div className='board-of-directors content'>
            <div className="container">
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-12 mt-4'>
                        <h2 className='yellow-text text-center py-4'>BOARD OF DIRECTORS</h2>
                    </div>
                    {
                        directors.map(item =>
                            <div className='col-lg-3 col-md-4 col-12 d-data'>
                                <img src={'http://127.0.0.1:8000/' + item.image} width={300} alt={item.image_alt} />
                                <h2 className='fw-semibold text-center d-name'>{ item.name }</h2>
                                <h3 className='fw-semibold text-center'>{ item.position }</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default BoardOfDirectors
