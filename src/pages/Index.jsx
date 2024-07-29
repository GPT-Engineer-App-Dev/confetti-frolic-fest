import { useState } from 'react';
import ConfettiEffect from '../components/ConfettiEffect';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const handleConfettiClick = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <ConfettiEffect isActive={isConfettiActive} />
      <h1 className="text-4xl font-bold text-white mb-8">Fun Confetti App</h1>
      <Button
        onClick={handleConfettiClick}
        className="bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300 text-lg py-2 px-6 rounded-full shadow-lg"
      >
        Celebrate!
      </Button>
    </div>
  );
};

export default Index;
