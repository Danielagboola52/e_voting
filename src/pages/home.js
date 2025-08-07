import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Clock, Users, Shield, Smartphone } from 'lucide-react';

// NavBar Component (reusable across pages)
const NavBar = ({ currentPage = 'home', onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'aspirants', label: 'Aspirants' },
    { id: 'results', label: 'Live Results' },
    { id: 'voting', label: 'Voting' },
    { id: 'signout', label: 'Sign Out' }
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

// Countdown Timer Component
const CountdownTimer = ({ className = "" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;
        
        if (minutes > 0) {
          minutes--;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
        }
        
        return { days, hours, minutes };
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="bg-white text-black px-3 py-2 rounded font-bold text-xl">
        {timeLeft.days.toString().padStart(2, '0')}
      </div>
      <div className="bg-white text-black px-3 py-2 rounded font-bold text-xl">
        {timeLeft.hours.toString().padStart(2, '0')}
      </div>
      <span className="text-white text-xl">:</span>
      <div className="bg-white text-black px-3 py-2 rounded font-bold text-xl">
        {timeLeft.minutes.toString().padStart(2, '0')}
      </div>
    </div>
  );
};

// Main Homepage Component
const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    // Here you would typically handle routing to different pages
    console.log(`Navigating to: ${pageId}`);
  };

  const teamMembers = [
    {
      name: "Dr. Risikat Adebiyi",
      role: "Project Supervisor",
      image: "/images/dr-risikat.jpg",
      imagePosition: "center"
    },
    {
      name: "Mustapha Aminu",
      role: "Backend Engineer", 
      image: "/images/mustapha.jpeg",
      imagePosition: "center 5%"
    },
    {
      name: "Raji A. Ridwan",
      role: "Frontend Developer",
      image: "/images/ridwan.jpeg",
      imagePosition: "center 7%"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar currentPage={currentPage} onPageChange={handlePageChange} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-yellow-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-yellow-400">Voting</span><br />
                <span className="text-yellow-400">Made Easy</span><br />
                <span className="text-white">HOD ELECTION</span>
              </h1>
            </div>

            {/* Right Content - Timer */}
            <div className="text-center md:text-right">
              <div className="bg-black bg-opacity-50 rounded-lg p-6 inline-block">
                <h3 className="text-white text-lg mb-4">Time Remaining</h3>
                <CountdownTimer />
                <div className="flex justify-center md:justify-end space-x-8 mt-2 text-sm text-gray-300">
                  <span>DAYS</span>
                  <span>HOURS</span>
                  <span>MINUTES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Card */}
      <section className="py-8 px-6 relative -mt-8 z-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Hello Mustapha 👋
                </h2>
                <p className="text-gray-600">It's time to make your voice heard</p>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <span>Cast Your Vote Now</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">LIVE</span>
                  <span>→</span>
                </button>
                <p className="text-xs text-gray-500 mt-1">Voting is open now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">About the Project</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/images/votenow-project.png" 
                alt="VoteNow Platform" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Empowering Democracy Through Secure Digital Voting
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This project introduces a minimalist, blockchain-powered E-voting platform that lets eligible citizens vote securely from anywhere. Each vote is tamper-proof, verifiable, and transparently recorded on a distributed ledger.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to modernize elections by reducing fraud, cutting costs, and increasing participation through a decentralized, user-friendly system built for trust, accessibility, and mobile use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Meet the Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: member.imagePosition }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  </div>
                </div>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Election Ongoing */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Election Ongoing</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl mb-6">Time Remaining</h3>
              <div className="flex justify-center space-x-2 mb-8">
                <div className="bg-yellow-500 text-black px-4 py-3 rounded font-bold text-2xl">02</div>
                <div className="bg-green-500 text-black px-4 py-3 rounded font-bold text-2xl">12</div>
                <span className="text-2xl">:</span>
                <div className="bg-red-500 text-white px-4 py-3 rounded font-bold text-2xl">45</div>
              </div>
              <div className="flex justify-center space-x-8 text-sm text-gray-300">
                <span>DAYS</span>
                <span>HOURS</span>
                <span>MINUTES</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              {/* Hourglass Animation */}
              <div className="relative">
                <div className="w-24 h-32 bg-gradient-to-b from-amber-600 to-amber-800 rounded-lg relative overflow-hidden">
                  <div className="absolute top-2 left-2 right-2 h-12 bg-amber-200 rounded-t-lg"></div>
                  <div className="absolute bottom-2 left-2 right-2 h-12 bg-amber-200 rounded-b-lg"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-8 bg-amber-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;