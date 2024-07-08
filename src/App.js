import logo from './logo.svg';
import './App.css';
import Appbar from './Components/Appbar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/Home';
import Contact from './pages/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WhereWeWrok from './pages/WhereWeWrok';
import BoardOfDirectors from './pages/BoardOfDirectors';
import Partners from './pages/Partners';
import Team from './pages/Team';
import AboutUs from './pages/AboutUs';
import MissionAndValue from './pages/MissionAndValue';
import FounderChairman from './pages/FounderChairman';
import Humanitarian from './pages/Humanitarian';
import NResource from './pages/NResource';
import MentalHealth from './pages/MentalHealth';
import PressRelease from './pages/PressRelease';
import EarlyChildhood from './pages/EarlyChildhood';
import Education from './pages/Education';
import Careers from './pages/Careers';
import DocumentaryVideos from './pages/DocumentaryVideos';
import Gallery from './pages/Gallery';
import Newsinfo from './pages/Newsinfo';
import ReportsAndData from './pages/ReportsAndData';
import EconomicInclusion from './pages/EconomicInclusion';
import WhatWeDo from './pages/WhatWeDo';

function App() {
  return (
    <>
      <Router>
      <Appbar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Wherewework' element={<WhereWeWrok />} />
          <Route path='/Boardofdirectors' element={<BoardOfDirectors />} />
          <Route path='/Partners' element={<Partners />} />
          <Route path='/Team' element={<Team />} />
          <Route path='/Aboutus' element={<AboutUs />} />
          <Route path='/MissionStatement' element={<MissionAndValue />} />
          <Route path='/Founderchairman' element={<FounderChairman />} />
          <Route path='/Humanitarian' element={<Humanitarian />} />
          <Route path='/Nresource' element={<NResource />} />
          <Route path='/Mentalhealth' element={<MentalHealth />} />
          <Route path='/Pressreleaseapi' element={<PressRelease />} />
          <Route path='/Earlychildhood' element={<EarlyChildhood />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Careers' element={<Careers />} />
          <Route path='/Documentaryvideos' element={<DocumentaryVideos />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Newsinfo' element={<Newsinfo />} />
          <Route path='/Reportsanddata' element={<ReportsAndData />} />
          <Route path='/Economicinclusion' element={<EconomicInclusion />} />
          <Route path='/:slug' element={<WhatWeDo />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
