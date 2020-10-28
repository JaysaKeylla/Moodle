import React from 'react';

function getCurrentYear () {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <div className="footer theme-background center-align">
      <p>&copy;{getCurrentYear()}. Moodle</p>
    </div>
  );
};

export default Footer;
