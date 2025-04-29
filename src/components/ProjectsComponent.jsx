import React from "react";
import { Row, Col,Container } from "react-bootstrap";
const ProjectsComponent = ({ darkMode }) => {
  const cardStyle = darkMode
    ? "bg-gray-800 text-white border border-gray-700"
    : "bg-white text-gray-900 border border-gray-200";
  const titleColor = darkMode ? "text-teal-400" : "text-blue-600";

  return (
    <Container className="px-4 py-8 mx-auto">
      <Col md={12}>
        <h3 className={`text-3xl font-bold mb-8 ${titleColor}`}>Projects</h3>
        <Row className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          <Col className={`rounded-2xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl  transform hover:scale-105 ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0s"
              target="_blank"
              rel="test"
            >
              <div className="flex items-center mb-4">
                <h4 className={`text-xl font-semibold ${titleColor}`}>test</h4>
              </div>
              <p className="text-sm pl-1">basic test</p>
            </a>
          </Col>

          <Col className={`rounded-2xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl  transform hover:scale-105 ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0s"
              target="_blank"
              rel="test"
            >
              <div className="flex items-center mb-4">
                <h4 className={`text-xl font-semibold ${titleColor}`}>test</h4>
              </div>
              <p className="text-sm pl-1">basic test</p>
            </a>
          </Col>

          <Col className={`rounded-2xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transform hover:scale-105 ${cardStyle} w-full max-w-xs sm:max-w-md md:max-w-lg`}>
            <a
              href="https://www.youtube.com/watch?v=xvFZjo5PgG0s"
              target="_blank"
              rel="test"
            >
              <div className="flex items-center mb-4">
                <h4 className={`text-xl font-semibold ${titleColor}`}>test</h4>
              </div>
              <p className="text-sm pl-1">basic test</p>
            </a>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ProjectsComponent;
