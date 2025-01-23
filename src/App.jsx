import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;