import { useEffect, useState } from 'react';
import { HomeButton } from './homeButton';
import { useLocation } from 'react-router-dom';
import { StatsButton } from './statsButton';
import { routes } from 'shared/nav/constants';
import { AddTrainingButton } from './addTrainingButton';

export const Navbar = () => {
  const [activeLocation, setActiveLocation] = useState('Stats');
  const location = useLocation();

  useEffect(() => {
    setActiveLocation(location.pathname);
  }, [location]);

  return (
    // todo ui: надо переверстать, потому что сейчас кнопки по ширину не встают в центр из-за разного размера боковых кнопок
    <div className="fixed bottom-0 h-[64px] w-full flex justify-center align-baseline gap-7 bg-white">
      <HomeButton isActive={activeLocation === routes.core} />
      <AddTrainingButton />
      <StatsButton isActive={activeLocation === routes.stats} />
    </div>
  );
};
