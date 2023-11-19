import React from 'react';
import { Helmet } from "react-helmet";

import Navbar from '../components/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Helmet>
        <title>Delice Bakery</title>
      </Helmet>

      <header>
        <Navbar />
      </header>

      <main className='main-container'>
        { children }
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Layout