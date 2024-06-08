import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menubar from './components/Menubar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import FullStackDev from './components/FullStackDev';
import TrainingPage from './pages/TrainingPage';
import SixWeeks from './components/SixWeeks';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <BrowserRouter>
        <header>
          <Menubar />
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/trainings/full-stack-development' element={<FullStackDev />} />
          <Route path='/trainings' element={<TrainingPage />} />
          <Route path='/trainings/web-development' element={<FullStackDev />} />
          <Route path='/trainings/six-weeks-industrial-training' element={<SixWeeks />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
    </BrowserRouter>
  );
}

export default App;
