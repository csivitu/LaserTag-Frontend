import React from 'react';
import AboutLaserTag from '../Components/About';
import ContactUs from "../Components/ContactUs";
import Hero from '../Components/HeroSection';
import PastEvents from '../Components/PastEvents';

export default function Landing() {
  return (
    <>
      <main>
        <Hero />
        <AboutLaserTag />
        <PastEvents />
      </main>
      <ContactUs />
    </>
  )
}
