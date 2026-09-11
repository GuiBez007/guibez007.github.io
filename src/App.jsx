import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import FeaturedProject from './components/FeaturedProject';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <FeaturedProject />
      </main>
      <Footer />
    </div>
  );
}

export default App;
