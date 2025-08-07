import React, { useState } from 'react';
import { Menu, X, CheckCircle } from 'lucide-react';

// Updated NavBar Component with Election menu item
const NavBar = ({ currentPage = 'home', onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'aspirants', label: 'Aspirants' },
    { id: 'election', label: 'Election' }, // New Election menu item
    { id: 'results', label: 'Live Results' },
    { id: 'signin', label: 'Sign In' }
  ];

  return (
    <nav className="bg-black text-white py-4 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold">VoteNow</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-300">HOD Election</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange && onPageChange(item.id)}
              className={`transition-colors ${
                currentPage === item.id
                  ? 'text-yellow-400 font-medium'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
          <div className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange && onPageChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors ${
                  currentPage === item.id
                    ? 'text-yellow-400 font-medium'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 md:space-x-8 mb-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Terms</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Help center</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Socials</a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-black" />
            </div>
            <span className="text-lg font-bold">VoteNow</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">2025 Vote-Now. All rights reserves.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Election Page Component
const ElectionPage = () => {
  const [currentPage, setCurrentPage] = useState('election');

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    console.log(`Navigating to: ${pageId}`);
  };

  const handleVoteNow = (position) => {
    console.log(`Voting for: ${position}`);
    // Here you would navigate to the specific voting page for that position
  };

  const electionPositions = [
    { id: 'hod', title: 'HOD' },
    { id: 'exam-officer', title: 'Exam Officer' },
    { id: 'secretary1', title: 'Secretary' },
    { id: 'secretary2', title: 'Secretary' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar currentPage={currentPage} onPageChange={handlePageChange} />
      
      {/* Main Content */}
      <main className="flex-grow py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose your Election
            </h1>
            <p className="text-gray-600 text-lg">
              Get to know the aspirant profile & make an informed decision
            </p>
          </div>

          {/* Election Positions List */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {electionPositions.map((position, index) => (
              <div key={position.id}>
                <div className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">
                      {position.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => handleVoteNow(position.title)}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Vote Now
                  </button>
                </div>
                {index < electionPositions.length - 1 && (
                  <div className="border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ElectionPage;