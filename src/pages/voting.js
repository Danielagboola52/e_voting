import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Voting Confirmation Modal Component
const VotingConfirmationModal = ({ isOpen, onClose, onConfirm, candidate, position }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-2xl">
        <h2 className="text-2xl font-bold text-green-600 mb-6">Voting Successful</h2>
        
        {/* Ballot Box Icon */}
        <div className="mb-6">
          <div className="relative mx-auto w-24 h-20">
            {/* Ballot Box */}
            <div className="w-full h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg"></div>
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-lg"></div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-blue-800 rounded-sm"></div>
            
            {/* Ballot Paper */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-12">
              <div className="w-8 h-12 bg-white border border-gray-300 rounded-sm shadow-md">
                <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">You've Decided</h3>
        <p className="text-gray-600 mb-2">Position: <span className="font-medium">{position}</span></p>
        <p className="text-gray-600 mb-6">Candidate: <span className="font-medium">{candidate}</span></p>

        <div className="flex space-x-4">
          <button
            onClick={onConfirm}
            className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Confirm
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Voting Page Component
const VotingPage = () => {
  const [selectedPositions, setSelectedPositions] = useState({});
  const [votingComplete, setVotingComplete] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingVote, setPendingVote] = useState({ position: '', candidate: '', positionTitle: '' });

  const positions = [
    { id: 'hod', title: 'HOD', candidates: ['Dr. Johnson Smith', 'Prof. Sarah Williams', 'Dr. Michael Brown'] },
    { id: 'examOfficer', title: 'Exam Officer', candidates: ['Dr. Emily Davis', 'Prof. Robert Wilson', 'Dr. Lisa Anderson'] },
    { id: 'secretary1', title: 'Secretary (Position 1)', candidates: ['John Thompson', 'Mary Johnson', 'David Lee'] },
    { id: 'secretary2', title: 'Secretary (Position 2)', candidates: ['Anna Martinez', 'James Taylor', 'Jennifer White'] }
  ];

  const handleVote = (positionId, candidate, positionTitle) => {
    setPendingVote({ position: positionId, candidate, positionTitle });
    setShowConfirmation(true);
  };

  const confirmVote = () => {
    setSelectedPositions(prev => ({
      ...prev,
      [pendingVote.position]: pendingVote.candidate
    }));
    setShowConfirmation(false);
    setPendingVote({ position: '', candidate: '', positionTitle: '' });
  };

  const cancelVote = () => {
    setShowConfirmation(false);
    setPendingVote({ position: '', candidate: '', positionTitle: '' });
  };

  const handleSubmitVotes = () => {
    if (Object.keys(selectedPositions).length === positions.length) {
      setVotingComplete(true);
    } else {
      alert('Please vote for all positions before submitting.');
    }
  };

  if (votingComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <NavBar />
        
        <main className="flex-1 flex items-center justify-center py-12 px-6">
          <div className="text-center max-w-md">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Vote Submitted!</h1>
            <p className="text-gray-600 mb-6">Thank you for participating in the HOD Election. Your votes have been recorded successfully.</p>
            <button 
              onClick={() => setVotingComplete(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Results
            </button>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-1 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cast your Vote</h1>
            <p className="text-gray-600 text-lg">Select your preferred candidate for each position</p>
          </div>

          {/* Voting Sections */}
          <div className="space-y-8">
            {positions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">{position.title}</h2>
                
                <div className="grid gap-4 md:grid-cols-3">
                  {position.candidates.map((candidate, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{candidate}</h3>
                          <p className="text-sm text-gray-500">Candidate {index + 1}</p>
                        </div>
                        <button
                          onClick={() => handleVote(position.id, candidate, position.title)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            selectedPositions[position.id] === candidate
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          }`}
                        >
                          {selectedPositions[position.id] === candidate ? 'Selected' : 'Vote'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-12">
            <button
              onClick={handleSubmitVotes}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              Submit All Votes
            </button>
            <p className="text-sm text-gray-500 mt-2">
              {Object.keys(selectedPositions).length} of {positions.length} positions voted
            </p>
          </div>
        </div>

        {/* Voting Confirmation Modal */}
        <VotingConfirmationModal
          isOpen={showConfirmation}
          onClose={cancelVote}
          onConfirm={confirmVote}
          candidate={pendingVote.candidate}
          position={pendingVote.positionTitle}
        />
      </main>

      <Footer />
    </div>
  );
};

export default VotingPage;