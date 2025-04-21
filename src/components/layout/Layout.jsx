import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Noise from '../Noise';
import SmoothScroll from '../SmoothScroll';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <SmoothScroll />
      <Noise />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 