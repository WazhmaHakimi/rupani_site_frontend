import React, { useEffect, useState } from 'react'
import Image1 from './Images/1709707761.png'
import './Styles/NewsinfoStyle.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Newsinfo() {
    const [newsInfo, setNewsInfo] = useState([]);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/newsInfo')
            .then(res => {
                setNewsInfo(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleReadNewsInfo = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/readNewsInfo/${id}`, { responseType: 'blob' });
            const fileUrl = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
            window.open(fileUrl);
          } catch (error) {
            console.error('Error reading file:', error);
          }
    };

    const handleDownloadNewsInfo = async id => {
        try {
            setLoader(true)
            const response = await axios.get(`http://127.0.0.1:8000/api/downloadNewsInfo/${id}`, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${Date.now()}.pdf`);
            document.body.appendChild(link);
            link.click();
            setLoader(false)
          } catch (error) {
            console.error('Error downloading file:', error);
            setLoader(false)
          }

    };

    DocumentTitle('News Info');

    return (
        <div className='newsinfo content'>
            <div className='text-center'>
                <h2 className='yellow-text text-uppercase pt-3'>Newsletters</h2>
                <p className='gray-text'>
                    Rupani Foundation is publishing a quarterly newsletter Rupani Bulletin to inform its supporters, affiliates and well-wishers of its programmes and activities.
                </p>
            </div>

            <div className='grid-cards pb-5'>
                {
                    newsInfo.map(item =>
                        <div className='grid-item'>
                            <img src={'http://127.0.0.1:8000/' + item.image} alt={item.image_alt} />
                            <div className='mx-4 my-4'>
                                <p>{item.start_month} - {item.end_month} {item.year}</p>
                                <button onClick={() => handleReadNewsInfo(item.id)} className='btn-yellow-inverse text-uppercase'>Read</button>
                                {
                                    !(loader) ?
                                        <button className='btn-yellow text-uppercase mx-4' onClick={() => handleDownloadNewsInfo(item.id)}>Download</button>
                                        :
                                        <button href='#' className='btn-yellow text-uppercase mx-4'>Downloading...</button>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Newsinfo
