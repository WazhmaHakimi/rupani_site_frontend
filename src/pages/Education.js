import React, { useState } from 'react'
import Banner from './Images/EducationImage1.png'
import Education1 from './Images/EducationImage212.png'
import './Styles/EducationStyle.css'
import EIPS from './Images/EducationImage34.png'
import Education2 from './Images/EducationImage33.png'
import Education3 from './Images/Education_image4.png'
import Education4 from './Images/Rectangle3.png'
import Education5 from './Images/EducationImage10.png'
import Education6 from './Images/education11.png'
import ECDIcon from './Images/childDevelopment_icon_1.png'
import ELM1 from './Images/activeTabImage33.png'
import Umeed from './Images/umeetFirstWeb1.png'
import Training from './Images/Tab4Image1.png'
import './Styles/TabsCollapseStyle.css'
import DocumentTitle from '../Components/DocumentTitle'

function Education() {

  DocumentTitle('Education');

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  
  return (
    <div className='education content'>
      <div className='banner'>
        <img src={Banner} width='100%' />
        <div className='intro-text'>
          <p className='text-center text-white'>
            Although access to education has improved in Rupani Foundation’s intervention areas, the quality of education has not always kept the pace. While more children are enrolled in schools today than ever before, most are still not receiving the education they need to succeed in life.
          </p>
        </div>
      </div>

      <div className='education-box'>
        <h2 className='yellow-text text-uppercase text-center'>
          Education
        </h2>

        <div className='flex-box'>
          <div className='education-text'>
            Rupani Foundation’s education program aims at offering a systematic and comprehensive education portfolio that ensures a ladder of quality education opportunities from ECD to tertiary education, offering high quality education opportunities at RF’s own institutions, professional development, and training of teachers, improving national education systems, and contributing to knowledge generation and the achievement of sustainable development goals.
          </div>
          <div className='education-image'>
            <img src={Education1} />
          </div>
        </div>

        <div className='collapse-center'>
          <div className="tabs text-uppercase pt-3">
            <label
              className={`tabs__label flex-label ${activeTab === 1 ? 'tabs__label--active' : ''}`}
              onClick={() => handleTabClick(1)}
            >
              <span>
                EDUCATION IMPROVEMENT PROGRAMS AT SCHOOLS (EIPS)
              </span>

              <span class="caret-down"></span>
            </label>
            <label
              className={`tabs__label flex-label ${activeTab === 2 ? 'tabs__label--active' : ''}`}
              onClick={() => handleTabClick(2)}
            >
              <span>
                ACCESS TO QUALITY LEARNING OPPORTUNITIES
              </span>

              <span class="caret-down"></span>
            </label>
            <label
              className={`tabs__label flex-label ${activeTab === 3 ? 'tabs__label--active' : ''}`}
              onClick={() => handleTabClick(3)}
            >
              <span>
                INCLUSIVE SYSTEMS & RESEARCH
              </span>

              <span class="caret-down"></span>
            </label>
          </div>
          <div className="tabs__content">
            <div
              className={`eips-box tabs__pane ${activeTab === 1 ? 'tabs__pane--active' : ''}`}
            >
              <div className='eips-flex-box'>
                <div className='eips-image'>
                  <img src={EIPS} />
                </div>
                <div className='eips-text'>
                  <h2 className='text-uppercase yellow-text'>
                    RUPANI FOUNDATION ECD CENTERS
                  </h2>
                  <p>
                    EIPS gives special attention to improving student’s academic and non-academic learning outcomes through systems approach - emphasizing the importance of enhancing government capacity, school leadership, teacher transformation, parental participation, community engagement, and student empowerment. RF is currently implementing two major EIPS programs in Gilgit-Baltistan.
                  </p>
                </div>
              </div>

              <div className='second-flex-box my-5'>
                <div className='second-image'>
                  <img src={Education2} />
                </div>
                <div className='second-text'>
                  <h2 className='text-uppercase green-text'>
                    1- GIRLS’ RIGHT TO EDUCATION IN GILGIT BALTISTAN
                  </h2>
                  <p>
                    This project is an excellent example of successful multilateral collaboration. Funded by Korea International Cooperation Agency (KOICA) through UNESCO, it is implemented by Rupani Foundation with the support of Government of Gilgit-Baltistan in 44 government schools in the remote Astore District of Gilgit Baltistan.
                  </p>
                </div>
              </div>

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

              <div className='third-flex-box my-5'>
                <div className='third-text'>
                  <p>
                    The rigorous admission campaign along with other intervention to improve the physical and learning environment of the schools enhanced the enrollment of 685 children (405 girls and 280 boys) in primary classes of the project schools
                  </p>
                  <p>
                    The project trained 84 teachers in primary Math and Science, conducted five workshops for 225 members of School Management Committees and Mothers Support Groups and sessions on Covid 19 were organised for teachers and students.
                  </p>
                  <p>
                    The most convincing and motivating factors for the parents were improving the physical environment of the schools. The project constructed 28 washrooms, 4 classrooms, renovated 5 schools and worked on repair and maintenance of 42 schools. Carpet and underlay were provided to 95 classrooms of the project schools.
                  </p>
                </div>

                <div className='third-image'>
                  <img src={Education3} />
                </div>
              </div>

              <h2 className='green-text text-uppercase'>
                2- INTRODUCING COMPUTER , STEAM AND ENTREPRENEURSHIP EDUCATION IN GOVERNMENT SCHOOLS
              </h2>

              <img src={Education4} width='100%' />

              <p>
                This program is first of its kind in Pakistan to inculcate future skills in school education and transform the students into makers, inventors, entrepreneurs, and tech enthusiasts of tomorrow.
              </p>
              <p>
                As a lead implementing agency, Rupani Foundation has partnered with Gilgit-Baltistan Rural Support Programme (GBRSP) and Government of Gilgit-Baltistan to implement the program in 200 public sector schools in 10 districts of Gilgit-Baltistan.
              </p>

              <div className='second-grid-box grid-box'>
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

              <p>
                Rupani Foundation trained 100 Tech Fellows in collaboration with LearnOBots and GbeeTechive and deployed them in 200 schools to implement the pioneering Computer, STEM and Entrepreneurship program the public sector schools in 10 districts of Gilgit-Baltistan.
              </p>

              <div className='fourth-flex-box my-5'>
                <div className='fourth-image'>
                  <img src={Education5} />
                </div>

                <div className='fourth-text'>
                  <p>
                    The impressive and innovative projects, demonstrated by the students in a short span of time, have substantiated the potential of the program to transform the education landscape of Pakistan.
                  </p>
                  <p>
                    The intervention has already seen achieving its targets as students from low socio-economic backgrounds are developing projects on STEAM, Entrepreneurship and Computer Programme and Coding. The impressive and innovative projects, demonstrated by the students in a short span of time, have substantiated the potential of the program to transform the education landscape of Pakistan.
                  </p>
                  <p>
                    In computer, the students are taught block programming through scratch, python coding and basics of freelancing alongside the basic IT skills. In STEM, the students are preparing multiple hands-on projects in science, technology, engineering, and mathematics related fields.
                  </p>
                  <p>
                    The entrepreneurship component promotes entrepreneurial and business sense among students to enable them to develop the skill of becoming job creators instead of job seekers. With the strong support of the government of GB, RF plans to lend financial and technical support to the best projects by linking young entrepreneurs to various financial and technical support groups at the GB and national levels. By developing linkages with the policymakers and key stakeholders in Gilgit Baltistan, Rupani Foundation is looking to scale up such initiatives to transform the education landscape of the region.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`tabs__pane ${activeTab === 2 ? 'tabs__pane--active' : ''}`}
            >
              <h2 className='text-center text-uppercase yellow-text'>
                ACCESS TO QUALITY LEARNING OPPORTUNITIES
              </h2>

              <img className='my-4 rounded-1' src={Education6} width='100%' />
              <p>
                The ECD initiative of the Foundation led the establishment of the first International Baccalaureate (IB) school Rupani Academy in Gilgit-Baltistan. The Academy is now offering a well-equipped learning and training facility which provides a space of broad imagination and practical experimentation for social and mental grooming. It is the first institution of its kind in the area, which ensure registration with international educational institutions and will provide students with exchange opportunities. Read More <a href='#' className='text-decoration-none green-text'>www.rupaniacdemy.org</a>
              </p>
              <p>
                In coming years, the Rupani Academy program will be expanded to other regions and countries in Central Asia.
              </p>
              <p>
                In addition, RF’ education program will also promote a franchise model to bring system change in affordable private education.
              </p>
            </div>
            <div
              className={`ELM-centers tabs__pane ${activeTab === 3 ? 'tabs__pane--active' : ''}`}
            >
              <h2 className='yellow-text text-center text-uppercase'>
                INCLUSIVE SYSTEMS & RESEARCH
              </h2>
              <p>
                Rupani Foundation will further strengthen University Partnership Initiative based on the learnings from its engagements with Allama Iqbal Open University (AIOU) and Karakoram International University (KIU). This partnership will help coordinating and conducting action research contributing to achieve education sector improvement in the regions RF operates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
