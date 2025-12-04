import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-beautiful-turquoise-water-in-the-maldives-2626-large.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 max-w-4xl">
                    Discover the Untouched Maldives
                </h1>

                <p className="text-xl md:text-2xl max-w-2xl mb-10 font-light">
                    Curated journeys to the world's most breathtaking islands
                </p>

                <a
                    href="/collection"
                    className="px-10 py-4 bg-brand-orange text-white font-semibold hover:bg-white hover:text-brand-orange transition-all duration-300"
                >
                    Explore Our Collection
                </a>
            </div>
        </div>
    );
};

export default Hero;
