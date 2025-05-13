import { Code, Shield, Cpu, LineChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "JavaScript", level: 87 },
        { name: "Python", level: 60 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Ethical Hacking", level: 85 },
        { name: "Penetration Testing", level: 80 },
        { name: "Threat Detection", level: 75 },
        { name: "Security Tools", level: 85 },
        { name: "Network Security", level: 80 },
      ]
    },
    {
      title: "AI & Automation",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: "OpenCV", level: 75 },
        { name: "Scikit-learn", level: 70 },
        { name: "Web Scraping", level: 85 },
        { name: "Bash Scripting", level: 50 },
        { name: "Face Recognition", level: 80 },
      ]
    },
    {
      title: "Other Skills",
      icon: <LineChart className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Linux", level: 80 },
        { name: "Blockchain", level: 60 },
        { name: "Solidity", level: 20 },
        { name: "Technical Writing", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800">
      <div className="container-section">
        <h2 className="section-title text-center mx-auto after:left-1/4">Skills & Expertise</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16">
          A comprehensive overview of my technical skills and expertise in cybersecurity, development, and AI/ML technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4 text-primary-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;