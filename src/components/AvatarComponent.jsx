import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MattyImage from "../assets/maty2.png";

const ProfilePage = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleImageClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sirakhun.masamer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cardStyle = darkMode
    ? "bg-gray-800 text-white border border-gray-700"
    : "bg-white text-gray-900 border border-gray-200";
  const titleColor = darkMode ? "text-teal-400" : "text-blue-600";
  const toptyle =  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900";
  return (
    <Container className={`profile-container max-w-4xl mx-auto p-8 rounded-3xl shadow-xl  ${toptyle}`}>
      <Col md={12}>
        <Row className="gap-8">
          <Col md={6} className="avatar-section text-center">
            <img
              src={MattyImage}
              alt="Matty"
              className="rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto transition-all transform hover:scale-125 ease-in-out shadow-xl object-cover cursor-pointer"
              onClick={handleImageClick}
            />
            <h2
              className={`text-3xl mt-4 font-bold transition-colors ${
                darkMode
                  ? "text-white hover:text-teal-400"
                  : "text-gray-800 hover:text-indigo-500"
              }`}
            >
              Sirakhun Masamer
            </h2>
            <p
              className={`text-lg mt-2 transition-colors ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Software Developer
            </p>
            <p
              className={`text-sm mt-2 italic ${
                darkMode ? "text-gray-500" : "text-gray-700"
              }`}
            >
              The only way to do great work is to love what you do.
            </p>
            {isOpen && (
              <div
                className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50"
                onClick={handleClose}
              >
                <img
                  src={MattyImage}
                  alt="Full Matty"
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
                />
              </div>
            )}
          </Col>

          <Col md={6}>
            <div
              className={`contact-section py-8 px-2 rounded-3xl mt-5 ${cardStyle}`}
            >
              <h3
                className={`text-3xl font-semibold mb-6 text-center ${titleColor}`}
              >
                Contact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-start">
                <Col className="mb-3 sm:ms-0 md:ms-10">
                  <p className="mb-3">
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href="tel:+66829652745"
                      className="transition-colors hover:text-indigo-500"
                    >
                      +66 82 965 2745
                    </a>
                  </p>
                </Col>
                <Col className="mb-3">
                  <p className="mb-3">
                    <span className="font-semibold">Email:</span>{" "}
                    <button
                      onClick={handleCopyEmail}
                      className="underline hover:text-indigo-500 transition-colors cursor-pointer"
                    >
                      {copied ? "คัดลอกแล้ว" : "sirakhun.masamer@gmail.com"}
                    </button>
                  </p>
                </Col>
                <Col className="mb-3 sm:ms-0 md:ms-18">
                  <p className="mb-3">
                    <span className="font-semibold">GitHub:</span>{" "}
                    <a
                      href="https://github.com/MattyHup6434"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-indigo-500"
                    >
                      MattyHub
                    </a>
                  </p>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default ProfilePage;
