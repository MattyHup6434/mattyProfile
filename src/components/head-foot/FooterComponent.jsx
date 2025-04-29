import React from "react";

const FooterComponent = ({ darkMode }) => {
  const bgColor = darkMode ? "bg-gray-800" : "bg-gray-100";
  const textColor = darkMode ? "text-gray-100" : "text-gray-600";
  const borderColor = darkMode
    ? "border-t border-gray-700"
    : "border-t border-gray-300";

  return (
    <footer
      className={`${bgColor} ${textColor} ${borderColor} text-center py-6 mt-16`}
    >
      <p className="text-sm">&copy; Sirakhun Masamer - profile</p>
    </footer>
  );
};

export default FooterComponent;
