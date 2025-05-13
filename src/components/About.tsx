import { User, Award, MapPin, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-8 mb-6">
              Cybersecurity and AI enthusiast with a strong background in full-stack development, ethical hacking, and system automation. As the Founder of ALL FOR ONE TECH, I build innovative tools in security, AI, and data science.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Proficient in Python, JavaScript, and Bash scripting, I've developed real-time facial recognition apps, phishing protection tools, and scalable image-based AI solutions. My focus is on creating practical applications that enhance digital security and user experience.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am passionate about ethical hacking and system automation, always seeking to learn and implement the latest technologies. My goal is to contribute to a safer digital world through innovative solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              ⚠️ NOTE: The project below was created at a beginner level. It is just a demo project. My main project is in a private GitHub repository.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card group hover:border-primary-500 hover:border-2">
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full group-hover:bg-primary-500 transition-colors duration-300">
                  <User className="h-6 w-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold">Personal Info</h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-medium">Name:</span> V. V. Karthikeyan
                </li>
                <li>
                  <span className="font-medium">Email:</span> karthikeyan56v@gmail.com
                </li>
                <li>
                  <span className="font-medium">Phone:</span> +91 9025486458
                </li>
                <li>
                  <span className="font-medium">Languages:</span> English, Tamil
                </li>
              </ul>
            </div>

            <div className="card group hover:border-primary-500 hover:border-2">
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full group-hover:bg-primary-500 transition-colors duration-300">
                  <Award className="h-6 w-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-medium">Degree:</span> B.E. Computer Science
                </li>
                <li>
                  <span className="font-medium">University:</span> Panimalar Engineering College
                </li>
                <li>
                  <span className="font-medium">Year:</span> 2021 - 2025
                </li>
                <li>
                  <span className="font-medium">CGPA:</span> 7.2
                </li>
              </ul>
            </div>

            <div className="card group hover:border-primary-500 hover:border-2">
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full group-hover:bg-primary-500 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-medium">City:</span> Virudhunagar
                </li>
                <li>
                  <span className="font-medium">State:</span> Tamil Nadu
                </li>
                <li>
                  <span className="font-medium">Pin Code:</span> 626101
                </li>
                <li>
                  <span className="font-medium">Country:</span> India
                </li>
              </ul>
            </div>

            <div className="card group hover:border-primary-500 hover:border-2">
              <div className="flex items-center mb-4">
                <div className="mr-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full group-hover:bg-primary-500 transition-colors duration-300">
                  <Heart className="h-6 w-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold">Interests</h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Cybersecurity</li>
                <li>Artificial Intelligence</li>
                <li>Ethical Hacking</li>
                <li>System Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;