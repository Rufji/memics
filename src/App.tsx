import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComicsSection } from './components/ComicsSection';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';
import { BackgroundCircles } from './components/BackgroundCircles';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div 
      className="min-h-screen relative overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" 
      style={{ 
        backgroundImage: darkMode 
          ? "linear-gradient(158.743deg, rgb(0, 0, 0) 1.5877%, rgb(41, 41, 41) 37.073%, rgb(66, 66, 66) 65.461%, rgb(0, 0, 0) 100%)"
          : "linear-gradient(158.743deg, rgb(250, 240, 255) 1.5877%, rgb(230, 245, 255) 37.073%, rgb(240, 235, 255) 65.461%, rgb(255, 245, 250) 100%)"
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Hanalei+Fill&display=swap');
          h1, h2 { font-family: 'Hanalei Fill', cursive; }
        `}
      </style>
      {/* Background Decorative Circles */}
      <BackgroundCircles darkMode={darkMode} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <ComicsSection darkMode={darkMode} />
        <Categories darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}