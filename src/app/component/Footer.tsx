
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-10 mt-16 shadow-lg">
      {/* Copyright Section */}
      <p className="text-sm mb-6">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">MyWebsite</span>. All rights
        reserved.
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-8 mb-6">
        <Link
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
          className="text-white hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
        >
          <i className="fab fa-facebook-square text-2xl"></i>
        </Link>
        <Link
          href="(link unavailable)"
          target="_blank"
          aria-label="Twitter"
          className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
        >
          <i className="fab fa-twitter-square text-2xl"></i>
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
          className="text-white hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </Link>
      </div>

      {/* Privacy Policy and Terms of Service Links */}
      <div className="text-sm mb-6">
        <Link
          href="/privacy-policy"
          aria-label="Privacy Policy"
          className="text-white hover:underline mx-4 transition-colors duration-300"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-service"
          aria-label="Terms of Service"
          className="text-white hover:underline mx-4 transition-colors duration-300"
        >
          Terms of Service
        </Link>
      </div>

      {/* Additional spacing to ensure footer looks balanced */}
      <div className="mt-6">
        <p className="text-sm text-gray-400">
          Crafted with 💙 by MyWebsite Team
        </p>
      </div>
    </footer>
  );
}
