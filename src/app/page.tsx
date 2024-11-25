import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-pink-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-extrabold leading-tight">
          Welcome to My Next.js Project
        </h1>
        <p className="mt-4 text-xl max-w-3xl mx-auto">
          This website was built as part of the Next.js Learning Course. Explore and learn more about modern web development!
        </p>

        {/* Call to Action Button */}
        <div className="mt-8">
          <a
            href="#about"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white shadow-xl">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            About This Project
          </h2>
          <p className="mt-4 text-lg text-center text-gray-700">
            This is a modern Next.js project, built using the latest technologies to create a fast, scalable, and SEO-friendly website. 
            With server-side rendering (SSR), static site generation (SSG), and other Next.js features, this website ensures high performance, 
            excellent user experience, and optimal SEO out-of-the-box.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800">Fast Performance</h3>
              <p className="text-gray-600 mt-4">
                Leveraging Next.js’s optimizations, your site loads quickly and performs efficiently, providing a seamless user experience.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800">Scalable Architecture</h3>
              <p className="text-gray-600 mt-4">
                With features like static site generation (SSG) and server-side rendering (SSR), Next.js allows your site to scale effortlessly.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800">SEO-Friendly</h3>
              <p className="text-gray-600 mt-4">
                Next.js has built-in support for SEO optimizations such as automatic static optimization, which helps your website rank higher in search results.
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Additional Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-gray-800">Built-in CSS and Sass Support</h4>
                <p className="text-gray-600 mt-2">
                  Easily integrate custom CSS or Sass styles for a highly customizable design.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-gray-800">Image Optimization</h4>
                <p className="text-gray-600 mt-2">
                  Optimize images on-demand, ensuring faster load times and better user experience.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-semibold text-gray-800">API Routes</h4>
                <p className="text-gray-600 mt-2">
                  Easily add backend logic to your app without needing a separate server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
