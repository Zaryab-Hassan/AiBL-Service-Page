import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, X } from 'lucide-react';

const MobileMenu = ({ onClose, smoothScroll }) => {
  return (
    <div className='fixed top-0 right-0 w-full h-full bg-white z-40 flex flex-col'>
      <div className='flex justify-between items-center p-4 border-b-2 border-gray-200'>
        <h1 className="text-5xl font-black">Ai<span className="text-primary">B</span>L</h1>
        <X className='cursor-pointer pr-4' size={60} onClick={onClose} />
      </div>
      <ul className='flex flex-col items-center mt-8 space-y-6'>
        {[
          { to: '/', label: 'HOME' },
          { to: '/products', label: 'PRODUCTS' },
          { to: '/services', label: 'SERVICES' },
          { to: '/success-stories', label: 'SUCCESS STORIES' },
          { to: '/about-us', label: 'ABOUT US' },
        ].map(({ to, label }) => (
          <Link key={label} to={to} onClick={onClose} className={label === 'SERVICES' ? 'border-b-2 border-primary pb-1' : ''}>
            {label}
          </Link>
        ))}
        <button
          smooth={'true'}
          duration={500}
          onClick={()=>{
            onClose();
            smoothScroll();
          }}
          className='flex items-center bg-primary text-white px-4 py-2 transition-all duration-300 rounded-lg hover:rounded-full mt-4'>
          <Phone className='w-6 h-6 m-0 lg:mr-2' />
          <span>CONTACT US</span>
        </button>
      </ul>
    </div>
  );
};

export default MobileMenu;
