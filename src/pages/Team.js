import React, { useEffect, useState } from 'react'
import './Styles/TeamStyle.css'
import Team1 from './Images/1709651029.png'
import DocumentTitle from '../Components/DocumentTitle';
import axios from 'axios';

function Team() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/team')
            .then(res => {
                setTeam(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    DocumentTitle('Team');

    return (
        <div className='team content'>
            <h2 className='text-center yellow-text text-uppercase pt-5'>
                Management Team
            </h2>
            <div className='team-datas pb-5'>
                {
                    team.map(item =>
                        <div className='team-data'>
                            <img src={'http://127.0.0.1:8000/' + item.image} />
                            <h2>{ item.name }</h2>
                            <h3>{ item.position }</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Team
