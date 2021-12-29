import { useRef } from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import NavbarLinks from './components/NavbarLinks';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import './porfolioApp.css';
function PorfolioApp() {
  const modalRef = useRef();
  console.log('porfolioApp');
  return (
    <div className='App'>
      <Navbar modal={modalRef} />
      <Home />
      <Modal modalRef={modalRef}>
        <NavbarLinks />
      </Modal>
      <Skills />
      <Projects />
    </div>
  );
}

export default PorfolioApp;
