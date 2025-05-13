import { ArrowDown } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 dark:bg-primary-900/20 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent-100 dark:bg-accent-900/20 rounded-full opacity-60 blur-3xl"></div>
      </div>
      
      <div className="container-section relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 text-transparent bg-clip-text">
              V V Karthikeyan
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Founder & CEO – ALL FOR ONE TECH
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Cybersecurity and AI enthusiast building innovative solutions in security, AI, and data science. Passionate about protecting digital systems through ethical applications of technology.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Work
              </a>
            </div>
          </div>
          
          <div className="hidden md:block w-full max-w-md animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="aspect-square rounded-full bg-gradient-to-br from-primary-200 to-accent-200 dark:from-primary-800 dark:to-accent-800 shadow-xl p-1">
              <img 
                 src={profileImg} 
                 alt="V. V. Karthikeyan" 
                 className="rounded-full object-cover w-full h-full"
                />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-5 w-5 text-primary-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;