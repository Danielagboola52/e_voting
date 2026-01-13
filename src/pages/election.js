import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Election Page Component
const ElectionPage = () => {
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
      <NavBar />
      
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