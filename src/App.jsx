import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import Projects from './components/Projects';
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
        <Projects />
        <FeaturedProject />
      </main>
      <Footer />
    </div>
  );
}

export default App;
