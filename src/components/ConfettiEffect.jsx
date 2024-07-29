import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = ({ isActive }) => {
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Confetti
      width={windowDimension.width}
      height={windowDimension.height}
      numberOfPieces={isActive ? 200 : 0}
      recycle={false}
    />
  );
};

export default ConfettiEffect;
