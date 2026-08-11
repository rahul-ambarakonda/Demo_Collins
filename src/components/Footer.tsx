
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {year} Home Appliances. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
