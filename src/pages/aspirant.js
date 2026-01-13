import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Candidate Details Modal/Page Component
const CandidateDetails = ({ candidate, onBack }) => {
  if (!candidate) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-12">
            Candidate Details
          </h1>
          
          {/* Candidate Photo */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-300">
              <img 
                src={candidate.image} 
                alt={candidate.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Candidate Info */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {candidate.name}
          </h2>
          
          <p className="text-gray-600 text-lg mb-8">
            Public Key: {candidate.publicKey}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Confirm
            </button>
            <button 
              onClick={onBack}
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Back
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Main Aspirants Page Component
const AspirantsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('hod');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Sample candidate data - In real app, this would come from backend
  const candidatesData = {
    hod: [
      {
        id: 1,
        name: "Mustapha Aminu",
        party: "COEN PARTY",
        image: "/images/candidate1.jpeg",
        publicKey: "Euqw12jskaOjSdF"
      },
      {
        id: 2,
        name: "Raji Abdulfatai Ridwan",
        party: "CVEN PARTY",
        image: "/images/candidate2.jpeg",
        publicKey: "Bxqp98mklaPqWer"
      },
      {
        id: 3,
        name: "Dr. Sarah Johnson",
        party: "TECH PARTY",
        image: "/images/candidate3.jpeg",
        publicKey: "Cytr45nopbRtYui"
      }
    ],
    examOfficer: [
      {
        id: 4,
        name: "Ahmed Bello",
        party: "ACADEMIC PARTY",
        image: "/images/exam1.jpeg",
        publicKey: "Dxyw67qrsaLmNop"
      },
      {
        id: 5,
        name: "Fatima Hassan",
        party: "PROGRESS PARTY",
        image: "/images/exam2.jpeg",
        publicKey: "Ezab89tuvbQwErt"
      }
    ],
    secretary: [
      {
        id: 6,
        name: "Kemi Adebayo",
        party: "UNITY PARTY",
        image: "/images/secretary1.jpeg",
        publicKey: "Fhgc12defcZxCvb"
      },
      {
        id: 7,
        name: "Ibrahim Yusuf",
        party: "FORWARD PARTY",
        image: "/images/secretary2.jpeg",
        publicKey: "Gjkl34ghijAsQwe"
      }
    ]
  };

  const categories = [
    { id: 'hod', label: 'HOD ASPIRANTS' },
    { id: 'examOfficer', label: 'EXAM OFFICER ASPIRANTS' },
    { id: 'secretary', label: 'SECRETARY ASPIRANTS' }
  ];

  const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleBackToAsprirants = () => {
    setSelectedCandidate(null);
  };

  const handleVoteNow = (candidate) => {
    console.log(`Voting for: ${candidate.name}`);
    // Here you would handle the voting process
  };

  const currentCandidates = candidatesData[selectedCategory] || [];
  const currentCategoryLabel = categories.find(cat => cat.id === selectedCategory)?.label || 'ASPIRANTS';

  // If showing candidate details, render that component
  if (selectedCandidate) {
    return <CandidateDetails candidate={selectedCandidate} onBack={handleBackToAsprirants} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      {/* Main Content */}
      <main className="flex-grow py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose your Candidate
            </h1>
            <p className="text-gray-600 text-lg">
              Get to know the aspirant profile & make an informed decision
            </p>
          </div>

          {/* Category Selector */}
          <div className="mb-8">
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full bg-black text-white px-6 py-4 rounded-lg flex items-center justify-between font-medium text-lg"
              >
                <span>{currentCategoryLabel}</span>
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Select</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setShowDropdown(false);
                      }}
                      className="w-full px-6 py-3 text-left hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-b-0"
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Meet the Aspirant Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet the Aspirant</h2>
          </div>

          {/* Candidates List */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {currentCandidates.map((candidate, index) => (
              <div key={candidate.id}>
                <div className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    {/* Candidate Photo */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
                      <img 
                        src={candidate.image} 
                        alt={candidate.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Candidate Info */}
                    <div>
                      <button
                        onClick={() => handleCandidateClick(candidate)}
                        className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors text-left"
                      >
                        {candidate.name}
                      </button>
                      <p className="text-gray-600 font-medium">{candidate.party}</p>
                      <button
                        onClick={() => handleCandidateClick(candidate)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        More details...
                      </button>
                    </div>
                  </div>
                  
                  {/* Vote Button */}
                  <button 
                    onClick={() => handleVoteNow(candidate)}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Vote Now
                  </button>
                </div>
                {index < currentCandidates.length - 1 && (
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

export default AspirantsPage;