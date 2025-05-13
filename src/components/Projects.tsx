import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Weblink Checker",
      description: "Advanced URL phishing detection and website authenticity checker using machine learning algorithms and security APIs.",
      image: "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "Machine Learning", "Security APIs", "Flask"],
      category: "security",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "FaceAuth",
      description: "Face recognition system for web-based login authentication using OpenCV and deep learning models.",
      image: "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "OpenCV", "TensorFlow", "React"],
      category: "ai",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Product Lens",
      description: "AI model to identify and describe objects using image features, built with advanced computer vision techniques.",
      image: "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "AI/ML", "Computer Vision", "API"],
      category: "ai",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Flipkart Scraper",
      description: "Automated market analyzer and price tracker using web scraping and data analysis techniques.",
      image: "https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Python", "BeautifulSoup", "Data Analysis", "Automation"],
      category: "automation",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "AFOT Platform",
      description: "Comprehensive tech platform for automation tools and software services with integrated security features.",
      image: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "Security"],
      category: "web",
      liveLink: "https://afot.in",
      githubLink: "#"
    }
  ];
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'security', label: 'Security' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'automation', label: 'Automation' },
    { id: 'web', label: 'Web Apps' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800">
      <div className="container-section">
        <h2 className="section-title text-center mx-auto after:left-1/4">My Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
          A showcase of my work in cybersecurity, AI/ML, and automation, demonstrating practical applications of technology.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="card overflow-hidden group transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubLink}
                    className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;