import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat pt-16 bg-image-overlay"
      style={{
        backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.92)), url(/images/background-hero.jpg)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Emmanuel Donkoh
            </h1>
            <h2 className="text-3xl lg:text-4xl mb-6 text-blue-300 font-semibold">
              Machine Learning Engineer & Data Scientist
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl">
              AWS Certified ML Engineer specializing in MLOps, Cloud Solutions, and Advanced Analytics. 
              Transforming data into actionable insights and deploying scalable ML solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-slate-700 shadow-lg"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-transparent hover:bg-white text-white hover:text-slate-900 border-2 border-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group"
              >
                <span>📄</span>
                Request Resume
              </button>
            </div>
            
            {/* Social Links with Real Icons */}
            <div className="flex gap-6 mt-8">
              <a 
                href="https://www.linkedin.com/in/emmanuel-donkoh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://github.com/Penod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="profile-image-container group">
              <img
                src="/images/profile.jpg"
                alt="Emmanuel Donkoh"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="profile-overlay group-hover:opacity-100" style={{
                background: 'linear-gradient(rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))'
              }}>
                <div className="text-4xl mb-3">🤖</div>
                <p className="font-semibold text-lg">AI & ML Specialist</p>
                <p className="text-sm opacity-90 mt-2">AWS Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


