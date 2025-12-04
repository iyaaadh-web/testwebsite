import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Collection', path: '/collection' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white shadow-sm">
            <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Fasmala Travels Logo"
                        className="h-12 w-auto"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-sm font-medium text-brand-dark hover:text-brand-orange transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="px-6 py-2 bg-brand-orange text-white font-medium hover:bg-brand-dark transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-brand-dark"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-brand-dark hover:text-brand-orange transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-6 py-2 bg-brand-orange text-white font-medium text-center hover:bg-brand-dark transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
