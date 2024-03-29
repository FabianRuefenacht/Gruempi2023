import React, { useState } from 'react';
import InstagramPhone from './InstagramPhone';
import FAQPhone from './FAQPhone';
import { Route, Routes, Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import ReglementPhone from './ReglementPhone';
import P404Phone from './P404Phone';
import AnmeldungPhone from './AnmeldungPhone';
import SpielplanPhone from './SpielplanPhone';
import Team from './Team';
import TimerPhone from './TimerPhone';
import Logo_Gruempi_ohne_Jahr_color_breitvektor from './Data/Logo/SVG/Logo_Gruempi_ohne_Jahr_color_breitvektor.svg';
import DankePhone from './DankePhone';
import UPSPhone from './UPSPhone';

export default function HeaderPhone() {
    const [navBar, setNavBar] = useState(false)
    var now = new Date()
    const TablePlan = new Date(2023, 4, 5, 9, 0, 0, 0)

    function handleClick() {
        setNavBar(false)
        Window.scrollTo(0, 0)
    }

    return (
        <>
            <div className='BurgerWrapper'>
                <div>
                    <img src={Logo_Gruempi_ohne_Jahr_color_breitvektor} alt='Logo Grümpi 2023' className='Logo' />
                    <Hamburger rounded color='white' size={32} toggled={navBar} onToggle={() => setNavBar(!navBar)} />
                </div>
                {navBar &&
                    <aside className='AsidePhone'>
                        <Link to="/" onClick={() => handleClick()} className='HeaderLinkPhone HeaderLink'>Home</Link>
                        <Link to="/FAQ" onClick={() => handleClick()} className='HeaderLinkPhone HeaderLink'>FAQ</Link>
                        <Link to="/Reglement" onClick={() => handleClick()} className='HeaderLinkPhone HeaderLink'>Reglement</Link>
                        {now >= TablePlan &&
                            <Link to="/Spielplan" onClick={() => handleClick()} className='HeaderLinkPhone HeaderLink'>Spielplan</Link>
                        }
                        <Link to="/Anmeldung" onClick={() => handleClick()} className='HeaderLinkPhone HeaderLink HeaderLinkAnmeldung'>Anmeldung</Link>
                    </aside>
                }
            </div>
            <Routes>
                <Route path='/' element={<><TimerPhone /> <InstagramPhone /></>} />
                <Route path='/FAQ' element={<><FAQPhone /></>} />
                <Route path='/Reglement' element={<><ReglementPhone /></>} />
                <Route path='/Anmeldung' element={<><AnmeldungPhone /></>} />
                <Route path='/live' element={<SpielplanPhone />} />
                <Route path='/Spielplan' element={<SpielplanPhone />} />
                <Route path='/Danke' element={<><DankePhone /></>} />
                <Route path='/Ups' element={<><UPSPhone /></>} />
                <Route path='/Teams/:id' element={<><Team /></>} />
                <Route path='/*' element={<><P404Phone /></>} />
            </Routes>
        </>
    )
}