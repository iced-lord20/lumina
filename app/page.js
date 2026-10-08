import React from 'react';

import Hero from '@/compnents/Hero';
import Navbar from '@/compnents/Navbar';
import css from '@/app/lumina.css';
import Footer from '@/compnents/Footer';

const page = () => {
  return (
    <div>
      <Navbar/>
       <Hero/>
       <Footer/>
    </div>
   
  )
}

export default page;