import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/Home/HomePage';
import { SignUpPage } from '../Pages/SignUp/SignUpPage';
import { ProfilePage } from '../Pages/Profile/ProfilePage';
import routes from './constants';
import { StatsPage } from '../Pages/Stats/StatsPage';
import { TrainingPage } from '../Pages/Training/TrainingPage';
import { ExcercisesPage } from '../Pages/Excercises/ExercisesPage';
import { ExercisePage } from '../Pages/Excercises/ExercisePage';

const { core, signup, profile, stats, training, exercises, favourites } = routes;

export const router = createBrowserRouter([
  {
    path: core,
    element: <HomePage />,
  },
  {
    path: signup,
    element: <SignUpPage />,
  },
  {
    path: profile,
    element: <ProfilePage />,
  },
  {
    path: stats,
    element: <StatsPage />,
  },
  {
    path: `${training}/:id`,
    element: <TrainingPage />,
  },
  {
    path: exercises,
    element: <ExcercisesPage />,
  },
  {
    path: `${exercises}/:id`,
    element: <ExercisePage />,
  },
  {
    path: favourites,
    element: <ExcercisesPage />,
  },
]);
