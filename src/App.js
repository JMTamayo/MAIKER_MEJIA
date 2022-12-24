import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <>

      <div className="desktop">
        <h1>
          Desktop version not available
        </h1>
        <h2>
          Please use a mobile device or tablet
        </h2>
      </div>

      <div className="mobile">
        <Navbar />
        <Main />
        <Footer />
      </div>

    </>
  )
}

export default App;