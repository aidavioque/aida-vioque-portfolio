/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex space-x-6 text-xl">
      <div className="flex items-center space-x-1">
        <img
          src="/images/envelope.svg"
          className="h-9 w-9 pb-1"
          alt="Email contact"
        />
        <a
          className="mr-4 font-semibold text-sky-700 underline"
          href="mailto:aida.aranvio@gmail.com"
          target="_blank"
        >
          Email
        </a>
      </div>
      <div className="mb-1 flex items-end space-x-1">
        <img src="/images/linkedin.svg" alt="Linkedin contact" />
        <a
          className="font-semibold text-sky-700 underline"
          href="https://www.linkedin.com/in/aida-aranvio/"
          target="_blank"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Contact;
