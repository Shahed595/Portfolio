import React from 'react';
import {FaFacebook,FaMailBulk,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-theme w-screen flex justify-center'>
           <div className='md:w-full w-1/2'>
               <div className='p-10 font-mont text-center'>
                    <p className='text-gray-50'>Desgined and developed by Shahed ahmed</p>
                    <div className='flex text-white w-full justify-between mt-5'>
                        {/* <FaFacebook><a></a></FaFacebook> */}
                        <a target="_blank" href="https://www.facebook.com/shahed.kingshahedkhan"><FaFacebook/></a>
                        <a target="_blank" href="https://mail.google.com/mail/u/1/#inbox"><FaMailBulk/></a>
                        <a target="_blank" href="https://www.instagram.com/multitasker_shahed/"><FaInstagram/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/shahed-ahmed-multitasker/"><FaLinkedin/></a>
                        <a target="_blank" href="https://github.com/Shahed595"><FaGithub/></a>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;