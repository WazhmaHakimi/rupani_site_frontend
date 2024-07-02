import React from 'react'
import Logo from './Styles/Images/rupani-logo-n.63b9ead7.png'
import XLogo from './Styles/Images/Footerx.png'
import FooterSvg from './Styles/Images/footer-picc.svg'
import Location from './Styles/Images/footer-address.svg'
import Phone from './Styles/Images/footer-phone.svg'
import Email from './Styles/Images/footer-mail.svg'
import Facebook from './Styles/Images/footer-face.svg'
import Linkdin from './Styles/Images/footer-linkdin.svg'
import Youtube from './Styles/Images/footer-musc.svg'
import Insta from './Styles/Images/footer-insta.svg'
import './Styles/FooterStyle.css'

function Footer() {
    return (
        <footer>
            <div className='d-grid footer-data'>
                <div className='footer-logo'>
                    <img src={Logo} height={50} />
                </div>
                <div className='footer-starter-text'>
                    <p>
                        Rupani Foundation’s mission is to create long lasting solutions to poverty by enhancing skills through value addition in local resources and promote holistic development of children by providing educational and ECD services.
                    </p>

                </div>
            </div>

            <div className='d-grid footer-data'>
                <div className='social-icons'>
                    <h5 className='text-center'>Follow Us</h5>
                    <div className='d-flex gap-2 flex-column'>
                        <div className='d-flex gap-2 justify-content-around align-items-center mt-5'>
                            <a href='#'>
                                <img src={Facebook} width='28' />
                            </a>

                            <a href='#'>
                                <img src={Linkdin} width='28' />
                            </a>

                            <a href='#'>
                                <img src={XLogo} width='28' />
                            </a>
                        {/* </div> */}

                        {/* <div className='d-flex gap-2 justify-content-around align-items-center'> */}
                            <a href='#'>
                                <img src={Youtube} width='28' />
                            </a>

                            <a href='#'>
                                <img src={Insta} width='28' />
                            </a>
                        </div>
                    </div>

                </div>
                <div className='addresses'>
                    <h5>Kabul Office</h5>
                    <img src={Location} width="15" /> &nbsp;
                    <b> Address</b>
                    <p>
                        Contact Address: House No 5, Street 13, Qala-e Fathullah Kabul, Afghanistan
                    </p>
                    <p>
                        <img src={Phone} width="20" />
                        <b className='black-text'> Phone </b>
                        <span> +93-79-629-1322</span>
                    </p>
                    <p>
                        <img src={Email} width="20" />
                        <b className='black-text'> Email </b>
                        <p>info@rupanifoundationaf.org</p>
                    </p>

                </div>

                <div className='addresses'>
                    <h5>US Headquarters</h5>
                    <img src={Location} width="15" /> &nbsp;
                    <b> Address</b>
                    <p>
                        8303 Southwest Freeway, Suite 440, Houston, TX 77074 USA
                    </p>
                    <p>
                        <img src={Phone} width="20" />
                        <b className='black-text'> Phone </b>
                        <span>+713-777-5059</span>

                    </p>

                </div>

                {/* <div className='addresses'>
                    <h5>Islamabad Office</h5>
                    <img src={Location} width="15" /> &nbsp;
                    <b> Address</b>
                    <p>
                        Office 3-6 first floor, Time Square Plaza G8 Markaz, 45000, Islamabad
                    </p>
                    <p>
                        <img src={Phone} width="20" />
                        <b className='black-text'> Phone </b>
                        <span>+92-51 8730495</span>
                    </p>
                </div> */}
            </div>
            <img src={FooterSvg} className='footerSvg' width='100%' />
        </footer>

    )
}

export default Footer
