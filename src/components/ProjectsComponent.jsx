import React from "react";

const ProjectsComponent = ({ darkMode }) => {
  const cardStyle = darkMode
    ? "bg-gray-800 text-white border border-gray-700"
    : "bg-white text-gray-900 border border-gray-200";
  const titleColor = darkMode ? "text-teal-400" : "text-blue-600";

  return (
    <div className="project-container px-4 py-8">
      <h3 className={`text-3xl font-bold mb-8 ${titleColor}`}>Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
      
        <a
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0s"
          target="_blank"
          rel="test"
          className={`rounded-2xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl  transform hover:scale-105 ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}
        >
          <div className="flex items-center mb-4">
            <h4 className={`text-xl font-semibold ${titleColor}`}>
            test
            </h4>
          </div>
          <p className="text-sm pl-1">
            basic test
          </p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
          target="_blank"
          rel="test"
          className={`rounded-2xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transform hover:scale-105 ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}
        >
          <div className="flex items-center mb-4">
            <h4 className={`text-xl font-semibold ${titleColor}`}>
            test2
            </h4>
          </div>
          <p className="text-sm pl-1">
            basic test
          </p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
          target="_blank"
          rel="test"
          className={`rounded-2xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transform hover:scale-105 ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}
        >
          <div className="flex items-center mb-4">
            <h4 className={`text-xl font-semibold ${titleColor}`}>
            test3
            </h4>
          </div>
          <p className="text-sm pl-1">
            basic test
          </p>
        </a>

        
      </div>
    </div>
  );
};

export default ProjectsComponent;
