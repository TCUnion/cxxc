import React from 'react';

const Navbar = () => (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl h-18 glass rounded-2xl flex items-center justify-between px-10 z-50">
        <div className="text-2xl font-bold italic font-display text-accent">
            CXXC
        </div>
        <div className="hidden md:flex gap-10 text-[13px] font-medium tracking-wide">
            <a href="#" className="hover:text-accent transition-colors">CYCLOCROSS</a>
            <a href="#" className="hover:text-accent transition-colors">XC TRAIL</a>
            <a href="#" className="hover:text-accent transition-colors">TECHNOLOGY</a>
        </div>
        <button type="button" className="btn-primary text-xs tracking-wider">DISCOVER</button>
    </nav>
);

export default Navbar;
