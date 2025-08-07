import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';

// NavBar Component (reusable across pages)
const NavBar = ({ currentPage = 'results', onPageChange }) => {
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

// Result Card Component
const ResultCard = ({ candidate, rank, totalVotes }) => {
  const percentage = totalVotes > 0 ? Math.round((candidate.votes / totalVotes) * 100) : 0;
  
  const getCardColor = (rank) => {
    switch(rank) {
      case 1: return 'bg-green-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-orange-600';
      case 4: return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCardGradient = (rank) => {
    switch(rank) {
      case 1: return 'from-green-400 to-green-600';
      case 2: return 'from-orange-400 to-orange-600';
      case 3: return 'from-orange-500 to-orange-700';
      case 4: return 'from-red-400 to-red-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="flex">
        {/* Candidate Photo and Info */}
        <div className={`bg-gradient-to-br ${getCardGradient(rank)} p-4 flex items-center space-x-4 flex-1`}>
          <img
            src={candidate.image || "/images/default-avatar.jpg"}
            alt={candidate.name}
            className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
          />
          <div className="text-white">
            <h3 className="font-bold text-lg">{candidate.name}</h3>
            <p className="text-sm opacity-90">{candidate.party || 'Independent'}</p>
          </div>
        </div>

        {/* Vote Statistics */}
        <div className="bg-gray-50 p-4 flex flex-col justify-center items-center min-w-[120px]">
          <div className="text-3xl font-bold text-gray-900 mb-1">{percentage}%</div>
          <div className="text-sm text-blue-600 font-medium">{candidate.votes.toLocaleString()} Votes</div>
          {rank === 1 && (
            <div className="flex items-center mt-2 text-green-600">
              <Award className="w-4 h-4 mr-1" />
              <span className="text-xs font-medium">Leading</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Position Results Section
const PositionResultsSection = ({ position, candidates, totalVotes }) => {
  // Sort candidates by votes (descending)
  const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);

  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="bg-black text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6" />
          <h2 className="text-xl font-bold">{position}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5" />
          <span className="font-medium">{totalVotes.toLocaleString()} Votes</span>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 gap-4 p-6 bg-gray-100 rounded-b-lg">
        {sortedCandidates.map((candidate, index) => (
          <ResultCard
            key={candidate.id}
            candidate={candidate}
            rank={index + 1}
            totalVotes={totalVotes}
          />
        ))}
      </div>
    </div>
  );
};

// Main Live Results Page Component
const LiveResultsPage = () => {
  const [currentPage, setCurrentPage] = useState('results');
  const [results, setResults] = useState({});
  const [isLive, setIsLive] = useState(true);

  // Initialize results data
  useEffect(() => {
    const initialResults = {
      hod: {
        title: "HOD ASPIRANTS",
        totalVotes: 1000,
        candidates: [
          { id: 1, name: "Mustapha Abdulazez", votes: 550, image: "/images/candidate1.jpg", party: "Progressive Party" },
          { id: 2, name: "Sarah Johnson", votes: 300, image: "/images/candidate2.jpg", party: "Unity Alliance" },
          { id: 3, name: "Ahmed Ibrahim", votes: 100, image: "/images/candidate3.jpg", party: "Reform Movement" },
          { id: 4, name: "Grace Adebayo", votes: 50, image: "/images/candidate4.jpg", party: "Independent" }
        ]
      },
      examOfficer: {
        title: "EXAM OFFICER",
        totalVotes: 1000,
        candidates: [
          { id: 5, name: "Mustapha Abdulazez", votes: 550, image: "/images/candidate1.jpg", party: "Academic Excellence" },
          { id: 6, name: "Dr. Fatima Ali", votes: 300, image: "/images/candidate5.jpg", party: "Education First" },
          { id: 7, name: "Prof. John Smith", votes: 100, image: "/images/candidate6.jpg", party: "Innovation Party" },
          { id: 8, name: "Aisha Mohammed", votes: 50, image: "/images/candidate7.jpg", party: "Independent" }
        ]
      },
      secretary1: {
        title: "SECRETARY (Position 1)",
        totalVotes: 1000,
        candidates: [
          { id: 9, name: "Mustapha Abdulazez", votes: 550, image: "/images/candidate1.jpg", party: "Administrative Excellence" },
          { id: 10, name: "Kemi Oluwaseun", votes: 300, image: "/images/candidate8.jpg", party: "Efficient Governance" },
          { id: 11, name: "David Okafor", votes: 100, image: "/images/candidate9.jpg", party: "Transparency First" },
          { id: 12, name: "Blessing Eze", votes: 50, image: "/images/candidate10.jpg", party: "Independent" }
        ]
      },
      secretary2: {
        title: "SECRETARY (Position 2)",
        totalVotes: 1000,
        candidates: [
          { id: 13, name: "Mustapha Abdulazez", votes: 550, image: "/images/candidate1.jpg", party: "Digital Transformation" },
          { id: 14, name: "Yusuf Hassan", votes: 300, image: "/images/candidate11.jpg", party: "Modern Administration" },
          { id: 15, name: "Folake Adamu", votes: 100, image: "/images/candidate12.jpg", party: "Progressive Alliance" },
          { id: 16, name: "Chidi Okwu", votes: 50, image: "/images/candidate13.jpg", party: "Independent" }
        ]
      }
    };

    setResults(initialResults);
  }, []);

  // Simulate live updates (optional)
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setResults(prevResults => {
        const newResults = { ...prevResults };
        
        // Randomly update vote counts for simulation
        Object.keys(newResults).forEach(position => {
          newResults[position].candidates = newResults[position].candidates.map(candidate => ({
            ...candidate,
            votes: candidate.votes + Math.floor(Math.random() * 3) // Add 0-2 random votes
          }));
          
          // Update total votes
          newResults[position].totalVotes = newResults[position].candidates.reduce(
            (sum, candidate) => sum + candidate.votes, 0
          );
        });
        
        return newResults;
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [isLive]);

  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
    console.log(`Navigating to: ${pageId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar currentPage={currentPage} onPageChange={handlePageChange} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Election Results</span>
          </h1>
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
            <span className="text-lg">{isLive ? 'LIVE RESULTS' : 'FINAL RESULTS'}</span>
            <button
              onClick={() => setIsLive(!isLive)}
              className="ml-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              {isLive ? 'Stop Live' : 'Start Live'}
            </button>
          </div>
        </div>
      </section>

      {/* Results Content */}
      <main className="flex-1 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          {Object.entries(results).map(([key, position]) => (
            <PositionResultsSection
              key={key}
              position={position.title}
              candidates={position.candidates}
              totalVotes={position.totalVotes}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LiveResultsPage;