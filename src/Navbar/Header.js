import React from 'react';
import './app.css';
import image from '../images/chandramani.png';
const Header = () => {//bg-gray-800
    return (
        <header className="bg-orange height text-white flex flex-col md:flex-row items-center justify-between">
            {/* <h1 className="text-2xl mb-2 md:mb-0">Chandramani Tiwari</h1> */}
            <img src={image} alt="chandramani" width={200} height={150}/>
            <nav>
              
                <ul className="flex flex-col md:flex-row md:space-x-4 menu-text">
                    <li className="mb-2 md:mb-0"><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li className="mb-2 md:mb-0"><a href="/about" className="hover:text-gray-400">About</a></li>
                    <li><a href="/skills" className="hover:text-gray-400">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
