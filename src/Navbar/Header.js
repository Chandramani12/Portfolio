import React from 'react';
import './app.css';

const Header = () => {
    return (
        <header className="bg-gray-800 height text-white container  flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl mb-2 md:mb-0">Chandramani Tiwari</h1>
            <nav>
                <ul className="flex flex-col md:flex-row md:space-x-4">
                    <li className="mb-2 md:mb-0"><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li className="mb-2 md:mb-0"><a href="/about" className="hover:text-gray-400">About</a></li>
                    <li><a href="/skills" className="hover:text-gray-400">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
