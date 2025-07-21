import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Gaming Store!</h1>
                <p>Discover the latest games and exclusive promotions.</p>
                {/* Add featured games and promotions here */}
            </main>
            <Footer />
        </div>
    );
};

export default Home;