import React, { useState } from 'react'
import Banner from './Images/childDevelopmentImg1.png'
import ECD1 from './Images/childDevelopment_img_3.png'
import ECD2 from './Images/childDevelopment_ing_4.png'
import ECD3 from './Images/childDevelopemt_img_5.png'
import DataImage from './Images/dataImage1.png'
import ECDIcon from './Images/childDevelopment_icon_1.png'
import Video from './Images/ChildDevelopmenTabImage2.png'
import ELM1 from './Images/activeTabImage33.png'
import Umeed from './Images/umeetFirstWeb1.png'
import Training from './Images/Tab4Image1.png'
import './Styles/EarlyChildhoodStyle.css'
import './Styles/TabsCollapseStyle.css'
import DocumentTitle from '../Components/DocumentTitle'

function EarlyChildhood() {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    DocumentTitle('Early Childhood Development');


    return (
        <div className='early-childhood content'>
            <div className='banner'>
                <img src={Banner} />
                <div className='intro-text'>
                    <p className='text-center text-white'>
                        Access to early childhood development (ECD) is critical for a child's holistic development and well-being. According to UNICEF, nearly half of all children under the age of 5 worldwide are not reaching their full developmental potential due to poverty, malnutrition, lack of access to quality education, and other factors. Millions of children in Rupani Foundation's program areas lack access to quality ECD services and resources, putting them at risk of poor outcomes later in life.
                    </p>
                </div>
            </div>

            <div className='ECD-container'>
                <div className='early-childhood-data'>
                    <h2 className='text-center text-uppercase yellow-text'>
                        EARLY CHILDHOOD DEVELOPMENT
                    </h2>
                    <p>
                        Early Childhood Development (ECD) is the flagship initiative of Rupani Foundation which makes the Foundation as one of the pioneers in introducing innovative ECD programs for prenatal to 8 years old children, families, and caregivers in vulnerable and remote communities in Pakistan. The ECD programs intends to provide a healthy start for optimal development of a child.
                    </p>

                    <div className='flex-box'>
                        <div className='early-childhood-text'>
                            <p>
                                It is a unique model which reaches the <span className='fw-medium  green-text'> newly wed couples, pregnant women, parents, grandparents, and children</span> to not only focus on the upbringing of the child but also creating harmony within the family to nurture the child during the most crucial early years of life.
                            </p>
                            <p>
                                Rupani Foundation seeks to be a leader and catalyst for ECD, transforming the quality of life of young children and their families, building strong institutions, developing curriculum and practices, building the technical capacity of ECD practitioners, caregivers and teaching professionals and contributing to networks, research, and policy.
                            </p>
                            <p>
                                <span className='fw-medium green-text'>Pakistan Alliance for Early Childhood (PAFEC),</span> founded by RF, is an exemplary platform to enhance policy engagement and replication of RF' ECD model across program countries.
                            </p>
                        </div>

                        <div className='early-childhood-image'>
                            <img src={ECD1} />
                        </div>
                    </div>
                    <p>
                        Rupani Foundations ECD interventions encompass a range of delivery models from home-based programs, child-minders and in pre-primary facilities to mobile centers in the remote regions. The Foundation follows a milestone-based approach with an integrated curriculum based on the five interconnected components of the WHO, UNICEF, and WBG Nurturing Care Framework; good health, adequate nutrition, security and safety, opportunities for early learning, and responsive caregiving to improve the cognitive, emotional, social, and physical development of children.
                    </p>

                    <img src={ECD2} width='100%' />
                </div>

                <div className='collapse-center'>
                    <div className="tabs text-uppercase pt-3">
                        <label
                            className={`tabs__label flex-label ${activeTab === 1 ? 'tabs__label--active' : ''}`}
                            onClick={() => handleTabClick(1)}
                        >
                            <span>
                                ECD CENTERS
                            </span>

                            <span class="caret-down"></span>
                        </label>
                        <label
                            className={`tabs__label flex-label ${activeTab === 2 ? 'tabs__label--active' : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            <span>
                                MOBILE ECD CENTERS
                            </span>

                            <span class="caret-down"></span>
                        </label>
                        <label
                            className={`tabs__label flex-label ${activeTab === 3 ? 'tabs__label--active' : ''}`}
                            onClick={() => handleTabClick(3)}
                        >
                            <span>
                                EARLY LEARNING MODEL CENTERS
                            </span>

                            <span class="caret-down"></span>
                        </label>
                        <label
                            className={`tabs__label flex-label ${activeTab === 4 ? 'tabs__label--active' : ''}`}
                            onClick={() => handleTabClick(4)}
                        >
                            <span>ECD TRAINING PROGRAMS</span>
                            <span class="caret-down"></span>
                        </label>
                    </div>
                    <div className="tabs__content">
                        <div
                            className={`ECD-centers tabs__pane ${activeTab === 1 ? 'tabs__pane--active' : ''}`}
                        >
                            <h2 className='text-center text-uppercase yellow-text'>
                                RUPANI FOUNDATION ECD CENTERS
                            </h2>
                            <div className='intro-text my-4'>
                                <p className='text-center text-white mx-5'>
                                    Montessori-based program with integrated High-Scope elements to cater educational needs of children, caregivers, and families from prenatal to 3 years.
                                </p>
                            </div>

                            <div className='flex-box'>
                                <div className='ECD-centers-text'>
                                    <p>
                                        This unique program was developed by academic experts and social scientists specifically to focus on a child from prenatal stage to 3 years, and the most important aspect of this model is that parents are engaged from the period of conception till the child graduates from the center.
                                    </p>
                                    <p>
                                        The overall objective of this program is to empower parents for optimum development of their children and to set a pathway for holistic lifelong learning during the first three years. This setup focuses on holistic development of the child; classes include sensory games, physical movements, music, and cognitive activities like signing and language games as age-appropriate activities are valued.
                                    </p>
                                    <p>
                                        The traditional ECD programs are mainly targeting children above three years. This is one of the pioneering community-based programs in Pakistan which caters the needs of prenatal to 3 years old children, parents, and caregivers.
                                    </p>
                                </div>

                                <div className='ECD-centers-image'>
                                    <img src={ECD3} />
                                </div>
                            </div>
                            <p>
                                Rupani Foundation's first ECD Center was established in Zulfiqarabad, Gilgit in March 2009 with enrollment of 70 children and mothers. Building upon its success, RF expanded this unique ECD initiative to Hyderabad, Sindh in 2012.
                            </p>

                            <div className='data-row'>
                                <h2 className='yellow-text text-center text-uppercase'>
                                    ECD PROGARM COMPONENTS
                                </h2>

                                <div className='data-images'>
                                    <img src={DataImage} />
                                    <img src={DataImage} />
                                    <img src={DataImage} />
                                    <img src={DataImage} />
                                    <img src={DataImage} />
                                    <img src={DataImage} />
                                    <img src={DataImage} />
                                    <img src={DataImage} />
                                    <img src={DataImage} />
                                </div>
                            </div>

                            <p>
                                Rupani Foundation is currently running 92 ECD Centers in Pakistan where more than 2,215 children are enrolled for quality learning and there are more than 6,730 beneficiaries including mothers, fathers and other caregivers of the children in these centres.
                            </p>

                            <div className='grid-box'>
                                <div className='grid-items'>
                                    <div>
                                        <img src={ECDIcon} />
                                    </div>
                                    <h2>92</h2>
                                    <p>
                                        ECD Centers 92 in Pakistan
                                    </p>
                                </div>

                                <div className='grid-items'>
                                    <div>
                                        <img src={ECDIcon} />
                                    </div>
                                    <h2>92</h2>
                                    <p>
                                        ECD Centers 92 in Pakistan
                                    </p>
                                </div>

                                <div className='grid-items'>
                                    <div>
                                        <img src={ECDIcon} />
                                    </div>
                                    <h2>92</h2>
                                    <p>
                                        ECD Centers 92 in Pakistan
                                    </p>
                                </div>

                                <div className='grid-items'>
                                    <div>
                                        <img src={ECDIcon} />
                                    </div>
                                    <h2>92</h2>
                                    <p>
                                        ECD Centers 92 in Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`tabs__pane ${activeTab === 2 ? 'tabs__pane--active' : ''}`}
                        >
                            <div className='mobile-ecd-center'>
                                <h2 className='text-center text-uppercase yellow-text'>
                                    MOBILE ECD CENTERS
                                </h2>
                                <div className='intro-text my-4'>
                                    <p className='text-center text-white mx-5'>
                                        Accessibility and affordability are major factors that hinder parents from acquiring best educational services. Mobile ECD is a unique concept to reach-out families in cost-effective manners in remote and isolated settings
                                    </p>
                                </div>

                                <div className='flex-box'>
                                    <div className='mobile-text'>
                                        <p>
                                            Mobile ECD is a pioneering effort of Rupani Foundation that ensures provision of cost-effective Early Childhood Development program on the doorsteps to the marginalized suburbs in Sindh. This inventive school caters to children from prenatal stage to three years of age. Parents and caregivers are also engaged in the holistic development of the child.
                                        </p>
                                        <p>
                                            Mobile ECD truck has been equipped with necessary ECD material, books, age relevant toys, audio, and visual equipment (LED). To counter changing weather patterns, cooling and heating facility has also been installed. Two well trained Family Support Motivators (FSMs) conduct sessions and engage parents, caregivers, and children in stimulating activities.
                                        </p>
                                    </div>
                                    <div className='mobile-image'>
                                        <a href='#'>
                                            <img src={Video} />
                                        </a>
                                    </div>
                                </div>

                                <div className='grid-box'>
                                    <div className='grid-items'>
                                        <div>
                                            <img src={ECDIcon} />
                                        </div>
                                        <h2>19</h2>
                                        <p>
                                            CD Centers 92 in Pakistan
                                        </p>
                                    </div>

                                    <div className='grid-items'>
                                        <div>
                                            <img src={ECDIcon} />
                                        </div>
                                        <h2>6,730</h2>
                                        <p>
                                            6,730 children, mothers and other caregivers currently enrolled
                                        </p>
                                    </div>

                                    <div className='grid-items'>
                                        <div>
                                            <img src={ECDIcon} />
                                        </div>
                                        <h2>250</h2>
                                        <p>
                                            250 FSMs working with ECD Centers
                                        </p>
                                    </div>

                                    <div className='grid-items'>
                                        <div>
                                            <img src={ECDIcon} />
                                        </div>
                                        <h2>50,000</h2>
                                        <p>
                                            RF ECD programs benefited over 50,000 children, parents/caregivers
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`ELM-centers tabs__pane ${activeTab === 3 ? 'tabs__pane--active' : ''}`}
                        >
                            <p>The Early Learning Model (ELM) Centers cater to the educational needs of children of 3-12 age bracket after they graduate from the ECD program (0-3 years). ELM model offers a holistic curriculum for the educational and interpersonal development of the child.</p>

                            <div className='ELM-images my-3'>
                                <img src={ELM1} className='my-2' />
                                <img src={ELM1} className='my-2' />
                                <img src={ELM1} className='my-2' />
                            </div>

                            <p>
                                The first ELM Center was established in Zulfiqarabad Gilgit in 2020 to ensure smooth transition of the ECD graduates into formal schooling by providing a need-responsive and well-resourced learning environment to the ECD graduates. This model was later replicated in five other areas. These ELM centers are running Pre-School, and four levels of ECD, Grade-III, Grade-IV, and Grade-V.
                            </p>

                            <div className='grid-box'>
                                <div className='grid-items'>
                                    <div>
                                        <img src={ECDIcon} />
                                    </div>
                                    <h2>19</h2>
                                    <p>
                                        CD Centers 92 in Pakistan
                                    </p>
                                </div>

                                <div className='grid-items'>
                                    <div>
                                        <img src={ECDIcon} />
                                    </div>
                                    <h2>6,730</h2>
                                    <p>
                                        6,730 children, mothers and other caregivers currently enrolled
                                    </p>
                                </div>

                                <div className='grid-items'>
                                    <div>
                                        <img src={ECDIcon} />
                                    </div>
                                    <h2>250</h2>
                                    <p>
                                        250 FSMs working with ECD Centers
                                    </p>
                                </div>
                            </div>

                            <p>
                                The ELM initiative of Rupani Foundation further led the establishment of Rupani Academy which is the first International Baccalaureate (IB) PYP candidate school in Gilgit-Baltistan. Read More <a href='#' className='green-text text-decoration-none'> www.rupaniacademy.org</a>
                            </p>

                            <div className='umeed'>
                                <div className='umeed-text'>
                                    <h2 className='yellow-text text-center text-uppercase'>umeed</h2>
                                    <p>
                                        UMEED is another intervention of Rupani Foundation in rural areas of Sindh which caters to the educational needs of children (3-8 years). The program focuses on a hybrid approach (a blend of Montessori and High Scope) and works with Community-Based Schools (CBS) promoting ECCE. The program creates Umeed “Hope” for the underprivileged by providing learning materials. The program aims to provide age-appropriate facilities and learning environments, sustainable resources, and encourage an active parental environment in Community Based Schooling System. Currently, children from ECD-1 to ECD-4 are enrolled under this program.
                                    </p>
                                </div>

                                <div className='umeed-image'>
                                    <img src={Umeed} />
                                </div>
                            </div>
                        </div>

                        <div
                            className={`training tabs__pane ${activeTab === 4 ? 'tabs__pane--active' : ''}`}
                        >
                            <h2 className='yellow-text text-center text-uppercase'>
                                ECD TRAINING PROGRAM
                            </h2>
                            <img width='100%' className='mb-3' src={Training} />

                            <p>
                                Rupani Foundation has been working to develop critical human resources in early childhood development. The organization presently offers <span className='fw-medium green-text'> one-month </span>and <span className='fw-medium green-text'> three-month ECD certificate courses </span> and a <span className='fw-medium green-text'>  six-month diploma </span> for ECD educators and caregivers.
                            </p>

                            <p>
                                Moreover, the organization has trained over 2,000 ECD teachers (over 95% women) across Pakistan.
                            </p>

                            <p>
                                The capacity building program is designed to enhance knowledge, skills, and behavioral competencies of the young women, primary school teachers, ECD caregivers, ECD trainers, entrepreneurs, and practitioners in early childhood development by using the WHO Nurturing Care Framework. The core thematic areas include child psychology, school leadership and management, teaching approaches in early grades, importance of learning areas in early years, importance of health and nutrition in early years, creative art and craft development, entrepreneurship skills, information, and communication technology (ICT) at workplace, action research, child rights, 21st century skills, climate change and hands-on teaching exposure with reputed institution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EarlyChildhood
