import React, { useState } from 'react';
import InstagramPhone from './InstagramPhone';
import FAQPhone from './FAQPhone';
import { Route, Routes, Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import ReglementPhone from './ReglementPhone';
import P404Phone from './P404Phone';
import AnmeldungPhone from './AnmeldungPhone';
import SpielplanPhone from './SpielplanPhone';
import TimerPhone from './TimerPhone';

export default function HeaderPhone() {
    const [navBar, setNavBar] = useState(false)
    var now = new Date()
    const TablePlan = new Date(2023, 4, 5, 17, 0, 0, 0)

    return (
        <>
            <div className='BurgerWrapper'>
                <Hamburger rounded color='white' onToggle={toggled => {
                    if (toggled) {
                        setNavBar(true)
                    } else {
                        setNavBar(false)
                    }
                }} />
                {navBar &&
                    <aside>
                        <Link to="/" className='HeaderLink'>Home</Link>
                        <Link to="/FAQ" className='HeaderLink'>FAQ</Link>
                        <Link to="/Reglement" className='HeaderLink'>Reglement</Link>
                        {now >= TablePlan &&
                            <Link to="/Spielplan" className='HeaderLink'>Spielplan</Link>
                        }
                        <Link to="/Anmeldung" className='HeaderLink HeaderLinkAnmeldung'>Anmeldung</Link>
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
                <Route path='/*' element={<><P404Phone /></>} />
            </Routes>
        </>
    )
}
