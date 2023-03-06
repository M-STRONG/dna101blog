import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM1.229 10a8.764 8.764 0 0114.542-5.944A7.5 7.5 0 0120 10a7.5 7.5 0 01-4.229 6.944A8.764 8.764 0 011.23 10z" clipRule="evenodd" />
              </svg>
              My Logo
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/blog" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/courses" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Courses
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/login" className="bg-purple-700 hover:bg-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
          </div>
          <div className="flex md:hidden">
            <button className="mobile-menu-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu">
        <Link to="/" className="block text-white hover:text-gray-300 py-2 px-4">
          Home
        </Link>
        <Link to="/blog" className="block text-white hover:text-gray-300 py-2 px-4">
          Blog
        </Link>
       
        <Link to="/about" className="block text-white hover:text-gray-300 py-2 px-4">
          About
        </Link>
        <Link to="/login" className="block bg-purple-700 hover:bg-purple-600 text-white py-2 px-4">
            Login
        </Link>
    </div>
    </nav>
            );
            }

export default NavBar;
