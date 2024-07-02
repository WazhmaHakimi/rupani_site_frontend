import React, { useEffect, useState } from 'react'
import Image1 from './Images/1709303245.png'
import './Styles/ReportsAndDataStyle.css'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios';

function ReportsAndData() {

    const [reports, setReports] = useState([]);
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/reports')
            .then(res => {
                setReports(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleReadReport = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/readReport/${id}`, { responseType: 'blob' });
            const fileUrl = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
            window.open(fileUrl);
        } catch (error) {
            console.error('Error reading file:', error);
        }
    };

    const handleDownloadReport = async id => {
        try {
            setLoader(true)
            const response = await axios.get(`http://127.0.0.1:8000/api/downloadReport/${id}`, { responseType: 'blob' });
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

    DocumentTitle('Reports And Data');

    return (
        <div className='reports-data content'>
            <h2 className='text-uppercase text-center yellow-text py-3'>
                Reports and data
            </h2>

            <div className='grid-cards pb-5'>
                {
                    reports.map(item =>
                        <div className='grid-item'>
                            <a href='#'><img src={`http://127.0.0.1:8000/${item.image}`} /></a>
                            <p className='fw-semibold mx-2'>
                                {item.title}
                            </p>
                            <div className='mx-3 mb-4'>
                                <button onClick={() => handleReadReport(item.id)} className='btn-yellow-inverse text-uppercase'>Read</button>
                                {
                                    !(loader) ?
                                        <button onClick={() => handleDownloadReport(item.id)} className='btn-yellow text-uppercase mx-4'>Download</button>
                                        :
                                        <button className='btn-yellow text-uppercase mx-4'>Downloading...</button>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ReportsAndData
