import React, { useEffect, useState } from 'react'
import { Box, Chip, Grid, Stack } from '@mui/material'
import './Styles/Styles.css'
import Logo from './Styles/Images/rupani-logo-n.63b9ead7.png'
import Facebook from './Styles/Images/facebook-icon.svg'
import Linkdin from './Styles/Images/linkdin-icon.svg'
import X from './Styles/Images/xlogo.svg'
import Youtube from './Styles/Images/music-icon.svg'
import Insta from './Styles/Images/insagram-icon.svg'
import { useLocation } from 'react-router-dom';
import axios from 'axios'

function Appbar() {
    const location = useLocation();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categories')
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Box className="fixed-top fixed-navbar">
            <Stack
                direction='row'
                className='topBar'
            >
                <Grid container>
                    <Grid item md={8} sm={8}>
                        <Chip
                            sx={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                '& .MuiChip-icon': {
                                    marginRight: '2px', // Add margin to the right of the icon
                                }
                            }}
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M1.92377 1.96555L3.07109 1.25341C3.44979 1.01858 3.90058 0.929392 4.33936 1.00249C4.77814 1.07559 5.17494 1.30599 5.45575 1.65069L6.84888 3.36012C7.09064 3.65666 7.23331 4.02176 7.25687 4.40416C7.28044 4.78655 7.1837 5.16705 6.98026 5.49222L5.9796 7.09121C5.84634 7.30865 6.15757 7.93236 7.11051 8.88645C8.06426 9.84101 8.68772 10.1521 8.90169 10.02L10.5037 9.01693C10.8284 8.81357 11.2083 8.71682 11.5902 8.74024C11.972 8.76366 12.3367 8.90608 12.633 9.14753L14.3353 10.5355C14.6791 10.8158 14.9092 11.2117 14.9829 11.6496C15.0566 12.0876 14.9689 12.5378 14.736 12.9167L14.0176 14.0856C13.7857 14.4629 13.4581 14.7722 13.0682 14.9819C12.6783 15.1915 12.24 15.2941 11.7982 15.2791C9.62047 15.205 7.26828 13.8782 4.72336 11.331C2.17336 8.78043 0.835297 6.41006 0.739655 4.20484C0.72047 3.76046 0.820082 3.3187 1.02822 2.92508C1.23636 2.53146 1.5455 2.20024 1.92377 1.96555Z" fill="#F1F7F4" />
                            </svg>}
                            label="+93-79-629-1322" />

                        <Chip
                            sx={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                '& .MuiChip-icon': {
                                    marginRight: '2px', // Add margin to the right of the icon
                                },
                            }}
                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M0.708496 4.55467L9.9586 9.48C10.0514 9.52939 10.1544 9.55518 10.259 9.55518C10.3636 9.55518 10.4666 9.52939 10.5594 9.48L19.8095 4.55556V13.1111C19.8096 13.849 19.5338 14.559 19.0388 15.0953C18.5438 15.6317 17.8671 15.9538 17.1475 15.9956L16.9878 16H3.53024C2.80949 16 2.11604 15.7177 1.59215 15.211C1.06826 14.7042 0.753643 14.0114 0.712837 13.2747L0.708496 13.1111V4.55467ZM3.53024 6.20017e-09H16.9878C17.7085 -4.83082e-05 18.402 0.28227 18.9259 0.789041C19.4498 1.29581 19.7644 1.98862 19.8052 2.72533L19.8095 2.88889V3.05244L10.259 8.13689L0.708496 3.05244V2.88889C0.708449 2.15099 0.984206 1.44104 1.4792 0.904684C1.97419 0.368326 2.65089 0.046221 3.37049 0.00444455L3.53024 6.20017e-09H16.9878H3.53024Z" fill="#F1F7F4" />
                            </svg>}
                            label="info@rupanifoundation.org" />
                    </Grid>
                    <Grid item md={4} sm={4} xs={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Stack
                            spacing={1}
                            direction='row'
                            sx={{
                                pt: '.5rem',
                                pb: '.5rem',
                            }}
                        >
                            <a href='#'>
                                <img src={Facebook} width="20" />
                            </a>

                            <a href='#'>
                                <img src={Linkdin} width="20" />
                            </a>

                            <a href='#'>
                                <img src={X} width="20" />
                            </a>

                            <a href='#'>
                                <img src={Youtube} width="20" />
                            </a>

                            <a href='#'>
                                <img src={Insta} width="20" />
                            </a>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>

            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <a
                        className="navbar-brand"
                        href="#"
                    >
                        <img alt="Rupani Company" loading="lazy" width="100" decoding="async" data-nimg="1" src={Logo} className='siteLogo' />
                    </a>
                    <button
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-bs-target="#navbarScroll"
                        data-bs-toggle="collapse"
                        type="button"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className='right-donate-btn'>
                        <a href='/' className='btn-yellow'>Donate</a>
                    </div>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarScroll"
                    >
                        <ul
                            className="navbar-nav me-auto my-2 my-lg-0  navbar-nav-scroll"
                            style={{
                                '--bs-scroll-height': '300px'
                            }}
                        >
                            <li className="nav-item">
                                <a
                                    aria-current="page"
                                    className={`nav-link ${location.pathname === '/' ? ' active' : ''}`}
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="dropdown-toggle nav-link"
                                    data-toggle="dropdown"
                                    href="#"
                                    role="button"
                                >
                                    who we are{' '}
                                    <span className="caret" />
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    data-animations="fadeInDown fadeInLeft fadeInUp fadeInRight"
                                >
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Aboutus' ? ' active' : ''}`}
                                            href="Aboutus"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Missionandvalue' ? ' active' : ''}`}
                                            href="MissionStatement"
                                        >
                                            Mission Statement
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Founderchairman' ? ' active' : ''}`}
                                            href="Founderchairman"
                                        >
                                            Founder and Chairman
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Boardofdirectors' ? ' active' : ''}`}
                                            href="Boardofdirectors"
                                        >
                                            Board Of Directors
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Team' ? ' active' : ''}`}
                                            href="Team"
                                        >
                                            Management Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Partners' ? ' active' : ''}`}
                                            href="Partners"
                                        >
                                            Our Partners
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="dropdown-toggle nav-link"
                                    data-toggle="dropdown"
                                    href="#"
                                    role="button"
                                >
                                    What we do {' '}
                                    <span className="caret" />
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    data-animations="fadeInDown fadeInLeft fadeInUp fadeInRight"
                                >   {
                                        categories.map(item =>
                                            <li>
                                                <a
                                                style={{ textWrap: 'wrap'}}
                                                    className={`dropdown-item ${location.pathname === `/${item.slug}` ? ' active' : ''}`}
                                                    href={item.slug}
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        )
                                    }
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    aria-current="page"
                                    className={`nav-link ${location.pathname === '/Wherewework' ? ' active' : ''}`}
                                    href="Wherewework"
                                >
                                    Where we Work
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    className="dropdown-toggle nav-link"
                                    data-toggle="dropdown"
                                    href="#"
                                    role="button"
                                >
                                    news  & information{' '}
                                    <span className="caret" />
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    data-animations="fadeInDown fadeInLeft fadeInUp fadeInRight"
                                >
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Pressreleaseapi' ? ' active' : ''}`}
                                            href="Pressreleaseapi"
                                        >
                                            Press Release
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Newsinfo' ? ' active' : ''}`}
                                            href="Newsinfo"
                                        >
                                            Newsletters
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Gallery' ? ' active' : ''}`}
                                            href="Gallery"
                                        >
                                            Photo Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Documentaryvideos' ? ' active' : ''}`}
                                            href="Documentaryvideos"
                                        >
                                            Documentary - Videos
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Reportsanddata' ? ' active' : ''}`}
                                            href="Reportsanddata"
                                        >
                                            Reports and data
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className={`dropdown-item ${location.pathname === '/Careers' ? ' active' : ''}`}
                                            href="Careers"
                                        >

                                            Careers
                                        </a>
                                    </li>

                                </ul>

                            </li>
                            <li className="nav-item">
                                <a
                                    aria-current="page"
                                    className={`nav-link ${location.pathname === '/Contact' ? ' active' : ''}`}
                                    href="Contact"
                                >

                                    Contact
                                </a>
                            </li>
                        </ul>
                        <a href='/' className='btn-yellow hide-donate'>Donate</a>

                        <div className="input-group search-bar">
                            <input type="text" className="form-control" placeholder="Search..." />
                            <div className="input-group-append">
                                <button className="btn btn-secondary" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            {/* <Grid
                container
                sx={{
                    p: 4
                }}
            >
                <Grid item md={12}>
                    <Grid item md={10}>
                        <a href='/' className='btn-yellow'>Donate</a>
                    </Grid>
                </Grid>
            </Grid> */}
        </Box>
    )
}

export default Appbar
