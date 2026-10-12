import React from 'react'
import Nav from '@/compnents/Nav'
import Hero from '@/compnents/Hero'
import Footer from '@/compnents/Footer'
import './App.css';

const page = () => {
  return (
    <div className="site-wrapper">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <Nav />
      <Hero />
      <Footer />


  
    </div>
  );
};

export default page