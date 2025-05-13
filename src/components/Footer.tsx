import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white font-heading">
              AFOT
            </a>
            <p className="mt-2 max-w-md text-gray-400">
              Building innovative solutions in cybersecurity, AI, and automation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center">
          <p className="text-center text-gray-400 flex items-center">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-accent-500 animate-pulse" />
            <span>by V. V. Karthikeyan</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            &copy; {currentYear} ALL FOR ONE TECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;