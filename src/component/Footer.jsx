import React from 'react';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div>
        <footer className='bg-dark'>
            <span>Copyright © {year}, Yashas BN</span>
        </footer>
    </div>
  );
}

export default Footer;