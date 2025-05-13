import { useState } from 'react';
import { BriefcaseIcon, CalendarIcon, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const workExperience = [
    {
      title: "Founder & CEO",
      company: "ALL FOR ONE TECH - (AFOT)",
      period: "2023 - Present",
      location: "Tamil Nadu, India(Remote)",
      description: [
        "Founded a startup focused on AI, cybersecurity, and freelance automation tools.",
        "Built and deployed secure tools including face authentication systems, phishing detection platforms, and data scrapers.",
        "Managed freelance project delivery, client relations, and platform development.",
      ],
      link: "https://afot.in"
    },
    {
      title: "Cybersecurity & AI Project Developer (Freelance/Personal Projects)",
      period: "2022 – Present",
      location: "Tamil Nadu, India(Remote)",
      description: [
        "Designed Python-based tools for real-time phishing URL detection.",
        "Developed AI-based facial recognition using OpenCV and live video processing.",
        "Implemented bash automation and ethical scripts for Linux-based systems.",
        "Scraped e-commerce sites to analyze product trends and automate comparisons.",
      ],
      link: "https://afot.in"
    }
  ];

  const education = [
    {
      degree: "B.S. in Computer Science",
      institution: "Panimalar Engineering College",
      period: "2022 - 2026",
      location: "Chennai, India",
      description: [
        "Graduated with Honors, CGPA: 7.2",
        "Specialization in Human-Computer Interaction",
        "Senior Project: Built an accessibility-focused web platform",
        "Teaching Assistant for Introduction to Web Development",
      ],
    }
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-900">
      <div className="container-section">
        <h2 className="section-title">Experience & Education</h2>
        
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-12 mt-8">
          <button
            className={`py-3 px-6 font-medium text-lg transition-colors relative ${
              activeTab === 'work'
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
            {activeTab === 'work' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"></span>
            )}
          </button>
          <button
            className={`py-3 px-6 font-medium text-lg transition-colors relative ${
              activeTab === 'education'
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
            onClick={() => setActiveTab('education')}
          >
            Education
            {activeTab === 'education' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"></span>
            )}
          </button>
        </div>

        <div className="space-y-8">
          {activeTab === 'work' ? (
            workExperience.map((job, index) => (
              <div 
                key={index} 
                className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                
                <div className="card border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                  <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                  <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-3">{job.company}</h4>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center">
                      <BriefcaseIcon className="w-4 h-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  
                  <a 
                    href={job.link} 
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <span>Visit company</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            education.map((edu, index) => (
              <div 
                key={index} 
                className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"></div>
                
                <div className="card border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <h4 className="text-lg text-primary-600 dark:text-primary-400 mb-3">{edu.institution}</h4>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center">
                      <BriefcaseIcon className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700 dark:text-gray-300">
                    {edu.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;