import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full flex flex-wrap justify-center lg:justify-between items-center mb-4 lg:mb-0">
          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="https://www.facebook.com/" className="text-gray-500 hover:text-white">
              Facebook
            </a>
            <a href="https://www.Twitter.com/" className="text-gray-500 hover:text-white">
              Twitter
            </a>
            <a href="https://www.Instagram.com/" target={'_blank'} className="text-gray-500 hover:text-white">
              Instagram
            </a>
          </div>
          <form className="flex justify-center lg:justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 rounded-l-full py-2 px-4 w-48 md:w-64 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 rounded-r-full px-6 py-2"
            >
              Send
            </button>
          </form>
        </div>
        <div className="w-full text-center text-gray-500">
          &copy; 2023 DNA101. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
