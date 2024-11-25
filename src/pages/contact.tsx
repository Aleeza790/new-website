"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState<null | typeof formData>(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmittedData(formData);
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" }); // Clear errors after successful submit
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-teal-50 to-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
        We'd Love to Hear From You!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white shadow-2xl rounded-lg p-12 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      >
        {/* Name Field */}
        <div className="mb-10">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            className={`block w-full p-5 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-10">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className={`block w-full p-5 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div className="mb-10">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows={6}
            className={`block w-full p-5 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-200 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-200"
        >
          Send Message
        </button>

        {/* Success Message (conditionally rendered) */}
        {submittedData && (
          <div className="mt-6 text-center text-teal-600">
            <p>Thank you for reaching out, {submittedData.name}! We'll get back to you soon.</p>
          </div>
        )}
      </form>
    </section>
  );
}
