import React, { useState } from 'react';
import Map from './Map';
import Gruppen from './Gruppen';
import Zeitplan from './Zeitplan';

export default function Spielplan() {
  const [showSpielplan, setShowSpielplan] = useState(true);
  const [showGruppen, setShowGruppen] = useState(false);
  const [showSpielfelder, setShowSpielfelder] = useState(false);

  function Spielplanhandler() {
    setShowSpielplan(true);
    setShowGruppen(false);
    setShowSpielfelder(false);
  }
  function Gruppenhandler() {
    setShowSpielplan(false);
    setShowGruppen(true);
    setShowSpielfelder(false);
  }
  function Spielfelderhandler() {
    setShowSpielplan(false);
    setShowGruppen(false);
    setShowSpielfelder(true);
  }

  return (
    <div className='SpielplanComponent'>
      <nav className='SpielplanNavigation'>
        <h3 onClick={Spielplanhandler} className={showSpielplan ? 'SpielplanNavigationActive' : ''}>Spielplan</h3>
        <h3 onClick={Gruppenhandler} className={showGruppen ? 'SpielplanNavigationActive' : ''}>Gruppen</h3>
        <h3 onClick={Spielfelderhandler} className={showSpielfelder ? 'SpielplanNavigationActive' : ''}>Spielfelder</h3>
      </nav>
      {showSpielplan === true &&
        <><Zeitplan /></>}
      {showGruppen &&
        <><Gruppen /></>}
      {showSpielfelder &&
        <>
          <Map zoom={18} center={[47.533368, 7.639500]} />
        </>}
    </div>
  )
}