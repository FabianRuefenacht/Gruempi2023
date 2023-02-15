import React, { Component} from 'react';

import "./App.css";
import Footer from './Footer';
import HeaderPC from './HeaderPC';
import Sponsors from './Sponsors';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: window.innerWidth <= 500
    }
  }

  render() {
    return (
      <div className='AdminDiv'>
        {this.state.isMobile === true &&
            <h1 style={{backgroundColor: "white"}}>Hello</h1>
        }

        {this.state.isMobile === false &&
          <div className='overview'>
            <HeaderPC />
            <Sponsors />
            <Footer />
          </div>
        }
      </div>
    );
  }
}

export default App;