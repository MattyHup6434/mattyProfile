import React from 'react';

const SkillsComponent = ({ darkMode }) => {
  const cardStyle = darkMode
    ? "bg-gray-800 text-white border border-gray-700"
    : "bg-white text-gray-900 border border-gray-200";

  const titleColor = darkMode ? "text-teal-400" : "text-blue-600";

  return (
    <div className="skills-container p-6">
      <h3 className={`text-3xl font-semibold mb-6 ${titleColor}`}>
        Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        
        {/* Languages Card */}
        <div className={`skill-card p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}>
          <h4 className={`text-xl font-semibold ${titleColor}`}>
            Languages
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>C#</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>


        <div className={`skill-card p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}>
          <h4 className={`text-xl font-semibold ${titleColor}`}>
            Frameworks
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>ASP.NET</li>
            <li>Spring Boot</li>
            <li>React.js</li>
            <li>Angular</li>
          </ul>
        </div>


        <div className={`skill-card p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}>
          <h4 className={`text-xl font-semibold ${titleColor}`}>
            Databases
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>Oracle</li>
            <li>MySQL</li>
          </ul>
        </div>


        <div className={`skill-card p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}>
          <h4 className={`text-xl font-semibold ${titleColor}`}>
            Tools
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>GitHub</li>
            <li>GitLab</li>
            <li>Postman</li>
            <li>VS Code</li>
          </ul>
        </div>


        <div className={`skill-card p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}>
          <h4 className={`text-xl font-semibold ${titleColor}`}>
            Soft Skills
          </h4>
          <ul className="list-disc pl-5 text-sm">
            <li>Team Collaboration</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
            <li>Emotional Intelligence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
