import React from 'react'
import { Link } from 'react-router-dom'
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid'

export default function P404() {
  return (
    <div className='P404Component'>
      <h1>Diese Seite konnte nicht gefunden werden.</h1>
      <Link to={"/"} className='Link404'><CursorArrowRaysIcon width={'25px'} />zurück zur Startseite</Link>
    </div>
  )
}