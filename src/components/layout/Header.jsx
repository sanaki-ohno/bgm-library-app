import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ genres }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGenreChange = (e) => {
    const selectedGenre = e.target.value;
    if (selectedGenre === 'All') {
      navigate('/');
    } else {
      navigate(`/genre/${selectedGenre}`);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed w-full bg-primary text-white transition-transform duration-300 z-50 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            BGMart.online
          </Link>
          <nav className="hidden lg:flex items-center space-x-4">
            <select
              value={
                location.pathname === '/'
                  ? 'All'
                  : location.pathname.startsWith('/genre/')
                  ? location.pathname.split('/')[2]
                  : ''
              }
              onChange={handleGenreChange}
              className="bg-primary text-white border border-gray-600 rounded px-2 py-1"
            >
              <option value="All">All</option>
              {genres.map(
                (genre) =>
                  genre !== 'All' && (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  )
              )}
            </select>
            <Link
              to="/"
              className={`hover:text-accent transition duration-150 ease-in-out ${
                location.pathname === '/' ? 'text-accent' : ''
              }`}
            >
              All
            </Link>
            {genres.map(
              (genre) =>
                genre !== 'All' && (
                  <Link
                    key={genre}
                    to={`/genre/${genre}`}
                    className={`hover:text-accent transition duration-150 ease-in-out ${
                      location.pathname === `/genre/${genre}`
                        ? 'text-accent'
                        : ''
                    }`}
                  >
                    {genre}
                  </Link>
                )
            )}
          </nav>
          <button onClick={toggleMenu} className="lg:hidden text-2xl">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden">
          <ul className="bg-primary-dark py-2">
            <li>
              <select
                value={
                  location.pathname === '/'
                    ? 'All'
                    : location.pathname.startsWith('/genre/')
                    ? location.pathname.split('/')[2]
                    : ''
                }
                onChange={handleGenreChange}
                className="bg-primary text-white border border-gray-600 rounded px-2 py-1 m-2"
              >
                <option value="All">All</option>
                {genres.map(
                  (genre) =>
                    genre !== 'All' && (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    )
                )}
              </select>
            </li>
            <li>
              <Link
                to="/"
                className={`block px-4 py-2 hover:bg-primary-light ${
                  location.pathname === '/' ? 'text-accent' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                All
              </Link>
            </li>
            {genres.map(
              (genre) =>
                genre !== 'All' && (
                  <li key={genre}>
                    <Link
                      to={`/genre/${genre}`}
                      className={`block px-4 py-2 hover:bg-primary-light ${
                        location.pathname === `/genre/${genre}`
                          ? 'text-accent'
                          : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {genre}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
