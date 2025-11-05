import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Confetti from 'react-confetti';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ThankYouPageProps {
  onClose: () => void;
  name?: string;
  email?: string;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onClose, name = 'Student', email = 'your email' }) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  const [showConfetti, setShowConfetti] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Update window dimensions when component mounts
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set up event listener
    window.addEventListener('resize', handleResize);
    handleResize();

    // Stop confetti after 8 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleExplorePrograms = () => {
    onClose();
    router.push('/');
  };

  const firstName = name.split(' ')[0];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.15}
        />
      )}
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        
        <div className="p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Thank You, {firstName}!
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            Your information has been successfully submitted. One of our education counselors will contact you shortly.
          </p>
          
          {email && (
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <p className="text-red-800">
                We&apos;ve sent a confirmation email to <span className="font-semibold">{email}</span>
              </p>
            </div>
          )}
          
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">What&apos;s Next?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Counseling Session</h4>
                <p className="text-gray-600 text-sm">Our expert will reach out to schedule your personalized counseling session</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Program Details</h4>
                <p className="text-gray-600 text-sm">You&apos;ll receive detailed information about our programs and admission process</p>
              </div>
            </div>
            
            <button
              onClick={handleExplorePrograms}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Explore Our Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;