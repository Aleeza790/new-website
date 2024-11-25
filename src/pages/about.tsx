"use client";
import React from "react";

export default function About() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-6 tracking-tight">
        About Us
      </h2>

      {/* Description Paragraph */}
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        We are a passionate team dedicated to building exceptional web experiences using Next.js! Our mission is to create performant,
        scalable, and user-friendly applications that exceed expectations. Through our innovative approach, we aim to solve complex challenges 
        with simplicity and elegance.
      </p>

      {/* Our Values Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-semibold text-gray-100 mb-6">Our Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="text-blue-600 text-5xl mb-4">
              <span role="img" aria-label="lightbulb">💡</span>
            </div>
            <h4 className="text-2xl font-semibold text-gray-900">Innovation</h4>
            <p className="text-lg text-gray-700 mt-2">
              We push the boundaries with cutting-edge technology to create innovative solutions.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="text-green-600 text-5xl mb-4">
              <span role="img" aria-label="handshake">🤝</span>
            </div>
            <h4 className="text-2xl font-semibold text-gray-900">Collaboration</h4>
            <p className="text-lg text-gray-700 mt-2">
              We work as one team, combining our strengths to create better solutions for complex problems.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="text-yellow-600 text-5xl mb-4">
              <span role="img" aria-label="trophy">🏆</span>
            </div>
            <h4 className="text-2xl font-semibold text-gray-900">Integrity</h4>
            <p className="text-lg text-gray-700 mt-2">
              We are committed to delivering quality work with honesty, transparency, and accountability.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center bg-gray-100 py-12 px-6 rounded-lg shadow-lg mb-16">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="text-blue-600 text-5xl mb-4">
              <span role="img" aria-label="team member">👥</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900">John Doe</h4>
            <p className="text-gray-700">Lead Developer</p>
            <p className="text-gray-600 mt-2">John is a passionate coder with expertise in full-stack development and Next.js.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="text-green-600 text-5xl mb-4">
              <span role="img" aria-label="team member">👥</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Jane Smith</h4>
            <p className="text-gray-700">UI/UX Designer</p>
            <p className="text-gray-600 mt-2">Jane is the creative mind behind our beautiful and user-friendly designs.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="text-yellow-600 text-5xl mb-4">
              <span role="img" aria-label="team member">👥</span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Samuel Lee</h4>
            <p className="text-gray-700">Project Manager</p>
            <p className="text-gray-600 mt-2">Samuel ensures our projects are delivered on time and within budget, coordinating every step.</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-16 bg-white py-12 px-6 rounded-lg shadow-xl">
        <h3 className="text-3xl font-semibold text-center text-gray-900 mb-6">Our Achievements</h3>
        <div className="flex justify-center items-center space-x-12">
          <div className="flex flex-col items-center">
            <span className="text-6xl text-blue-600 mb-4">50+</span>
            <h4 className="text-2xl font-semibold text-gray-900">Projects Delivered</h4>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-6xl text-green-600 mb-4">5</span>
            <h4 className="text-2xl font-semibold text-gray-900">Years of Experience</h4>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-6xl text-yellow-600 mb-4">15+</span>
            <h4 className="text-2xl font-semibold text-gray-900">Industry Awards</h4>
          </div>
        </div>
        <p className="text-lg text-center text-gray-700 mt-6">
          With a passion for building exceptional web experiences, our team has delivered numerous projects across various industries, 
          earning accolades for our innovative solutions and commitment to excellence.
        </p>
      </div>
    </section>
  );
}
