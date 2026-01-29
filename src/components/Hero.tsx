import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
    <section id="hero" className="relative w-full h-screen flex items-center px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1541625602330-2277a1cd43a7?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover brightness-50"
                alt="Hero Background"
                width="2070"
                height="1380"
                loading="eager"
            />
        </div>
        <div className="relative z-10 max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-accent font-bold tracking-[6px] mb-6 text-sm"
            >
                FROM MUD TO DIRT
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-8xl font-display font-bold leading-tight mb-8"
            >
                UNLEASH THE<br />BEYOND.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-text-muted text-xl max-w-lg"
            >
                Defining the pinnacle of Cyclocross Racers and Cross-country performance.
            </motion.p>
        </div>
    </section>
);

export default Hero;
