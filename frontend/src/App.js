import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Menubar from './components/Menubar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import FullStackDev from './components/FullStackDev';

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
        </Routes>
        <footer>
          <Footer />
        </footer>
    </BrowserRouter>
  );
}

export default App;
