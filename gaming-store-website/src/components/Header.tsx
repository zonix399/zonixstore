import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo">
                <h1>Gaming Store</h1>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;