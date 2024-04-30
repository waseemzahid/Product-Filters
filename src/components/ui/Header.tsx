import React from 'react';
import logo from '../../../public/logo.png'
import slider from '../../../public/slider.jpg'
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full text-center">
        <Image src={logo} alt="Logo" className="mx-auto h-auto" style={{ maxWidth: '150px' }} />
      </div>
      <Image src={slider} alt="Header Image" className="w-full h-auto" />
    </div>
  );
};

export default Header;