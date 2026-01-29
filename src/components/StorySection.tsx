import React from 'react';
import storyBg from '../assets/images/story_bg.png';

const StorySection = () => (
    <section className="relative py-40 px-10 md:px-20 flex flex-col items-center justify-center text-center space-y-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 brightness-[0.15]">
            <img
                src={storyBg}
                alt="Soil Texture"
                className="w-full h-full object-cover"
                width="2069"
                height="1379"
                loading="lazy"
            />
        </div>
        <span className="font-mono text-accent font-bold tracking-[8px] text-sm">OUR SPIRIT</span>
        <h2 className="text-7xl font-bold max-w-4xl font-display">BORN IN THE DIRT.<br />RAISED ON THE TRAIL.</h2>
        <p className="text-text-muted text-2xl font-serif italic max-w-3xl leading-relaxed">
            "At CXXC, we don't just ride; we conquer the elements. Every splash of mud is a badge of honor, and every blade of grass is a witness to our speed."
        </p>
    </section>
);

export default StorySection;
