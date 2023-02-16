import React, { useState, useEffect} from 'react';

import "./App.css";
import Footer from './Footer';
import FooterPhone from './FooterPhone';
import HeaderPC from './HeaderPC';
import HeaderPhone from './HeaderPhone';
import SponsorsPhone from './SponsorsPhone';
import Sponsors from './Sponsors';



export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const interval = setInterval(() => setIsMobile(window.innerWidth <= 500), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {isMobile === true &&
        <div>
          <HeaderPhone />
          <SponsorsPhone />
          <FooterPhone />
        </div>
      }

      {isMobile === false &&
        <div className='overview'>
          <HeaderPC />
          <Sponsors />
          <Footer />
        </div>
      }
    </div>
  )
}