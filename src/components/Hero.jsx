import React from 'react';

const Hero = () => {
  return (
    <section className="py-16 px-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <h1 className="text-5xl font-bold mb-6">Welcome to Sasom</h1>
            <p className="text-lg mb-8">
              We provide innovative solutions for your business needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="/about" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Learn More</a>
          </div>
          <div className="lg:col-span-1">
            <img src="/images/hero-image.jpg" alt="Hero" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;