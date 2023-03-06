import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-6 flex justify-between items-center">
          <div className="flex">
            <a href="#" className="mr-6">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="mr-6">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="mr-6">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
          <div className="flex items-center">
            <p className="mr-4">Subscribe to our newsletter:</p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              />
              <button
                type="submit"
                className="px-8 rounded-r-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 uppercase tracking-wide"
              >
                <FiMail className="inline-block mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
  )
}

export default Footer
