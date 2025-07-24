import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BoxIcon, BriefcaseIcon, House, Library, Menu, Phone} from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const smoothScroll = () => {
    const footer = document.querySelector('#footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='sticky top-0 left-0 w-full flex justify-between items-center px-[4vw] lg:px-[1vw] xl:px-[3vw] 2xl:px-[11vw] py-4 border-b-2 border-gray-200 bg-white z-30'>
      <Link title='AiBL' to={'/'} className='font-extrabold relative'>
        <h1 className="text-5xl font-black">Ai<span className="text-primary">B</span>L</h1>
        <h3 className="font-semibold text-primary absolute -bottom-2 left-4 text-[0.6rem] whitespace-nowrap">AI-Driven Solutions for Enhanced Independence</h3>
      </Link>
      <ul className='hidden lg:flex space-x-6 text-black'>
        {[
          { to: '/', label: 'HOME', Icon: House },
          { to: '/products', label: 'PRODUCTS', Icon: BoxIcon },
          { to: '/services', label: 'SERVICES', Icon: BriefcaseIcon },
          { to: '/success-stories', label: 'SUCCESS STORIES', Icon: Library },
          { to: '/about-us', label: 'ABOUT US', Icon: BookOpen },
        ].map(({ to, label, Icon })     => (
          <li key={label}>
            <Link to={to} className={`group flex flex-col items-center transition-all duration-300 ${to === '/' ? "hidden xl:block" : ""}`}>
              <div className='flex items-center my-2'>
                <Icon className='w-6 h-6 mr-2 text-black' />
                <span className={`text-gray-700 font-semibold text-[0.95rem] ${label === 'SERVICES' ? 'border-b-2 border-primary pb-1' : ''}`}>{label}</span>
              </div>
              <span className='border-bottom'></span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={smoothScroll}
        smooth={'true'}
        duration={500}
        className='hidden lg:flex items-center bg-primary text-white px-4 py-2 transition-all duration-300 rounded-lg hover:rounded-full'>
        <Phone className='w-6 h-6 m-0 lg:mr-2' />
        <span className='hidden lg:block'>CONTACT US</span>
      </button>
      <Menu className='block lg:hidden cursor-pointer' size={40} onClick={toggleMobileMenu} />
      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} smoothScroll={smoothScroll} />}
    </header>
  );
};

export default Header;
