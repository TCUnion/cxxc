import React from 'react';
import { motion } from 'framer-motion';
import { Bike, ArrowRight } from 'lucide-react';
import './index.css';

const Navbar = () => (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl h-18 glass rounded-2xl flex items-center justify-between px-10 z-50">
        <div className="text-2xl font-bold italic" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}>
            CXXC
        </div>
        <div className="hidden md:flex gap-10 text-[13px] font-medium tracking-wide">
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">CYCLOCROSS</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">XC TRAIL</a>
            <a href="#" className="hover:text-[var(--color-accent)] transition-colors">TECHNOLOGY</a>
        </div>
        <button className="btn-primary text-xs tracking-wider">DISCOVER</button>
    </nav>
);

const Hero = () => (
    <header className="relative w-full h-screen flex items-center px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1541625602330-2277a1cd43a7?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover brightness-50"
                alt="Hero Background"
            />
        </div>
        <div className="relative z-10 max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[var(--color-accent)] font-bold tracking-[6px] mb-6 text-sm"
            >
                FROM MUD TO DIRT
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-8xl font-bold leading-tight mb-8"
            >
                UNLEASH THE<br />BEYOND.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[var(--color-text-muted)] text-xl max-w-lg"
            >
                Defining the pinnacle of Cyclocross Racers and Cross-country performance.
            </motion.p>
        </div>
    </header>
);

const ProductSection = () => (
    <section className="bg-[var(--color-bg-alt)] py-32 px-10 md:px-20 space-y-40">
        {/* CX */}
        <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 rounded-[32px] overflow-hidden aspect-video">
                <img src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1974&auto=format&fit=crop" alt="CX Bike" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <span className="font-mono text-[var(--color-success)] font-bold tracking-widest text-xs">CYCLOCROSS</span>
                <h2 className="text-6xl font-bold">The CX Mastery.</h2>
                <p className="text-[var(--color-text-muted)] text-lg">
                    CYCLOCROSS 越野跑車。專為泥濘賽道與草地競速而生，兼具跑車的迅捷與越野的韌性。
                </p>
            </div>
        </div>

        {/* XC */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-20">
            <div className="w-full md:w-1/2 rounded-[32px] overflow-hidden aspect-video">
                <img src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?q=80&w=2070&auto=format&fit=crop" alt="XC Bike" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
                <span className="font-mono text-[var(--color-accent)] font-bold tracking-widest text-xs">CROSS-COUNTRY</span>
                <h2 className="text-6xl font-bold">XC Dominance.</h2>
                <p className="text-[var(--color-text-muted)] text-lg">
                    Conquer the trails with precision. Engineered for efficiency on steep climbs and control on technical descents.
                </p>
            </div>
        </div>
    </section>
);

const StorySection = () => (
    <section className="relative py-40 px-10 md:px-20 flex flex-col items-center justify-center text-center space-y-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 brightness-[0.15]">
            <img src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=2069&auto=format&fit=crop" alt="Soil Texture" className="w-full h-full object-cover" />
        </div>
        <span className="font-mono text-[var(--color-accent)] font-bold tracking-[8px] text-sm">OUR SPIRIT</span>
        <h2 className="text-7xl font-bold max-w-4xl">BORN IN THE DIRT.<br />RAISED ON THE TRAIL.</h2>
        <p className="text-[var(--color-text-muted)] text-2xl font-serif italic max-w-3xl leading-relaxed">
            "At CXXC, we don't just ride; we conquer the elements. Every splash of mud is a badge of honor, and every blade of grass is a witness to our speed."
        </p>
    </section>
);

const Footer = () => (
    <footer className="bg-[#0A0A0B] py-16 px-20 flex flex-col md:flex-row items-center justify-between border-t border-white/5">
        <div className="text-3xl font-bold italic" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}>
            CXXC
        </div>
        <div className="font-mono text-[10px] text-[--text-placeholder] opacity-40 mt-6 md:mt-0">
            © 2026 CXXC CYCLING. ALL RIGHTS RESERVED.
        </div>
    </footer>
);

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
