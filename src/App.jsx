import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LicenseTerms from './pages/LicenseTerms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import GenrePage from './pages/GenrePage';
import GenreList from './components/genre/GenreList';
import CookieConsent from './components/CookieConsent';
import { musicData, getGenres } from './data/musicData';
import {
  initializeAnalytics,
  initializeAdvertising,
} from './utils/cookieUtils';

function App() {
  const genres = getGenres().filter((genre) => genre !== 'All');

  useEffect(() => {
    initializeAnalytics();
    initializeAdvertising();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-secondary">
        <Header genres={genres} />
        <main className="flex-grow container mx-auto px-4 py-8 mt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1 className="text-4xl font-bold mb-6 text-white">
                    Welcome to BGM Library
                  </h1>
                  <GenreList genres={genres} />
                  <Home musicData={musicData} genres={['All', ...genres]} />
                </>
              }
            />
            <Route
              path="/genre/:genre"
              element={
                <>
                  <GenreList genres={genres} />
                  <GenrePage musicData={musicData} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/license-terms" element={<LicenseTerms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
