import React from 'react'
import Banner from './Images/MentalHealth11.png'
import MHealth1 from './Images/MentalHealth2.png'
import MHealth2 from './Images/MentalHealth13.png'
import './Styles/MentalHealthStyle.css'
import DocumentTitle from '../Components/DocumentTitle'

function MentalHealth() {

    DocumentTitle('Mental Health');

    return (
        <div className='mental-health content'>
            <div className='banner'>
                <img src={Banner} />
                <div className='intro-text'>
                    <p className='text-center text-white'>The mental health and suicide related issues are affecting millions of people worldwide. According to the World Health Organization (WHO), around 1 in 4 people in the world will experience some form of mental health issue at some point in their lives. WHO further estimates that every 40 seconds, someone dies by suicide, making it a leading cause of death worldwide.</p>
                </div>
            </div>

            <div className='mental-health-box'>
                <h2 className='yellow-text text-center'>BRAIN WELL-BEING PROGRAM</h2>
                <p>
                    Rupani Foundation has developed a comprehensive brain well-being and suicide prevention framework to establish an evidence-based preventive and curative mechanism for brain well-being and suicide prevention in Gilgit-Baltistan.
                </p>
                <p>
                    The program follows a four-pronged approach based on three interconnected pillars – prevention, curative pillar, Research and Development and Advocacy for addressing mental health issues and promoting mental well-being to achieve the desired objectives.
                </p>

                <div className='flex-box'>
                    <div className='mental-health-text'>
                        <p>
                            Rupani Foundation facilitated the renowned US-based Pakistani Psychiatrist Dr. Mazhar Khowaja to conduct brain wellness sessions in GB. The Foundation also conducted policy dialogue with parliamentarians and other relevant stakeholders in Gilgit to share his findings and recommendations.
                        </p>
                        <p>
                            In the first phase of the program, the Rupani Foundation, in collaboration with the Government Education Department, trained 31 Education Department officials as Brain Well-Being Counselors to support the emotional and brain well-being of students in government schools and colleges as the first line of support. This training is part of Rupani Foundations’ pioneering initiative to support the Government of Gilgit-Baltistan to address the rising mental health issues and suicidal cases in Gilgit-Baltistan.
                        </p>
                    </div>
                    <div className='mental-health-image'>
                        <img src={MHealth1} />
                    </div>
                </div>
                <p>
                    The Government of Gilgit-Baltistan (GoGB) has notified Rupani Foundation as member of the Steering Committee on “GB Mental Health and Suicide Prevention Strategy”. This is a testament to the efforts made by Rupani Foundation to support the GoGB in addressing the issue of the rising level of suicidal cases and mental health issues in Gilgit-Baltistan.
                </p>

                <h2 className='green-text text-center text-uppercase'>
                    BRAIN WELL-BEING HELPLINE
                </h2>

                <div className='helpline my-3'>
                    <div className='helpline-text'>
                        <p>
                            Rupani Foundation has signed a Memorandum of Understanding (MoU) with Charter for Compassion (CfC) to launch a mental health program in Gilgit-Baltistan to address the escalating mental health issues.
                        </p>
                        <p>
                            As part of this collaboration, two experienced mental health counselors were stationed in Hunza and Ghizer to provide vital counseling services to individuals facing mental health issues. A dedicated helpline has been established to offer round-the-clock assistance and support to those in need.
                        </p>
                    </div>

                    <div className='helpline-image'>
                        <img src={MHealth2} />
                    </div>
                </div>

                <p>
                    The mental health program will also establish a referral mechanism for individuals requiring secondary and tertiary level treatment. This integrated system will ensure that patients receive the necessary care and support beyond the primary counseling stage.
                </p>
                <p className='pb-5'>
                    The program will be expanded to other districts based on the lessons learned to guarantee a tailored and effective approach to addressing mental health issues
                </p>
            </div>
        </div>
    )
}

export default MentalHealth
