import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import StorySection from './components/StorySection';
import Footer from './components/Footer';
import './index.css';

export default function App() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <ProductSection />
            <StorySection />
            <Footer />
        </main>
    );
}
