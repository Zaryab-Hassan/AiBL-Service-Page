import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section id='footer' className="px-[5vw] lg:px-[7vw] xl:px-[15vw] 2xl:px-[20vw] border-t-2 border-gray-100 py-10">
            <h1 className="text-5xl font-extrabold mx-0">Ai<span className='text-primary'>B</span>L</h1>
            <div className="border-b-2 border-gray-500 flex flex-col lg:flex-row lg:items-center">
                <div className="w-full md:w-2/5">
                    <p className='font-semibold text-base md:text-lg text-gray-700 whitespace-nowrap'>Pioneers in Intelligent Prosthetics</p>
                </div>
                <div className="w-full md:w-3/5 lg:p-4 flex flex-col lg:flex-row items-start lg:items-center justify-end">
                    <div className='flex flex-col lg:flex-row my-2 lg:my-0 lg:mx-5'>
                        <Link className='mx-0 lg:mx-3 my-2 lg:my-0 px-0 lg:px-2 py-1 text-primary font-semibold whitespace-nowrap'>Privacy Policy</Link>
                        <Link className='mx-0 lg:mx-3 my-2 lg:my-0 px-0 lg:px-2 py-1 text-primary font-semibold'>Blogs</Link>
                        <Link className='mx-0 lg:mx-3 my-2 lg:my-0 px-0 lg:px-2 py-1 text-primary font-semibold'>Careers</Link>
                        <Link className='mx-0 lg:mx-3 my-2 lg:my-0 px-0 lg:px-2 py-1 text-primary font-semibold'>FAQ</Link>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-4">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                    <Link to={'/about-us/#location'} className="flex items-center mb-5 xs:mb-2">
                        <MapPin className="mr-2 size-3 md:size-8" />
                        <p className='text-base font-semibold text-primary'>ATS, NICAT, NASTP, Chaklala Cantt, Rawalpindi, Pakistan</p>
                    </Link>
                </div>
                <div className="w-full md:w-1/2 my-5 md:my-0">
                    <p className='text-xs md:text-base text-center md:text-end'>Copyright &copy; 2024 <span className='text-primary font-bold'>AiBL</span> . All rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
