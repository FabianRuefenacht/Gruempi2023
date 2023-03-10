import React, { Component } from 'react';
import Timer from './Timer';
import Instagram from './Instagram';
import Logo_Gruempi_ohne_Jahr_color_breitvektor from './Data/Logo/SVG/Logo_Gruempi_ohne_Jahr_color_breitvektor.svg';
import Reglement from './Reglement';
import FAQ from './FAQ';
import Anmeldung from './Anmeldung';
import { Route, Routes, Link } from 'react-router-dom';
import Spielplan from './Spielplan';
import P404 from './P404';
import Team from './Team';
import Danke from './Danke';
import UPS from './UPS';

class HeaderPC extends Component {
  render() {
    return (
      <>
        <div className="Header">
          <img src={Logo_Gruempi_ohne_Jahr_color_breitvektor} alt='Logo Grümpi 2023' />
          <Link to="/" className='HeaderLink' onClick={() => Window.scrollTo(0, 0)}>Home</Link>
          <Link to="/FAQ" className='HeaderLink' onClick={() => Window.scrollTo(0, 0)}>FAQ</Link>
          <Link to="/Reglement" className='HeaderLink' onClick={() => Window.scrollTo(0, 0)}>Reglement</Link>
          <Link to="/Anmeldung" className='HeaderLink HeaderLinkAnmeldung' onClick={() => Window.scrollTo(0, 0)}>Anmeldung</Link>
        </div>
        <Routes>
          <Route path='/' element={<><Timer /><Instagram /></>} />
          <Route path='/FAQ' element={<><FAQ /></>} />
          <Route path='/Reglement' element={<><Reglement /></>} />
          <Route path='/Anmeldung' element={<><Anmeldung /></>} />
          <Route path='/live' element={<Spielplan />} />
          <Route path='/Spielplan' element={<Spielplan />} />
          <Route path='/Danke' element={<><Danke /></>} />
          <Route path='/Ups' element={<><UPS /></>} />
          <Route path='/Teams/:id' element={<><Team /></>} />
          <Route path='/*' element={<><P404 /></>} />
        </Routes>
      </>
    );
  }
}

export default HeaderPC;