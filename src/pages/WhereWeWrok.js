import React from 'react'
import './Styles/WhereWeWorkStyle.css'
import Map from './Images/mapImag1.png'
import DocumentTitle from '../Components/DocumentTitle';

export default function WhereWeWrok() {

    DocumentTitle('Where We Work');

  return (
    <div className='where-we-work content'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-11 col-md-11 col-12 pt-5 pb-3'>
                    <p>
                    Rupani Foundation Pakistan is working from the deserts of Sindh to the mountians of Gilgit-Baltistan. Most of the activities are concentrated in Gilgit-Baltistan, Sindh and Punjab.
                    </p>
                    <p>
                    Our Core Office is based in Gilgit with two main offices in Islamabad and Karachi.
                    </p>
                    <p>
                    The sister organisations of the Foundation also operate in Afghanistan, Taikistan, and the United States by focusing on different innovative programe in different thematic areas.
                    </p>
                </div>
                <div className='col-12 mb-5 pm-5 mt-3'>
                    <img src={Map} width={737} height={436}/>
                </div>
            </div>
        </div>
    </div>
  )
}
