import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/home/homePage';
import { SignUpPage } from 'pages/signUp/signUpPage';
import { ProfilePage } from 'pages/profile/profilePage';
import { StatsPage } from 'pages/stats/statsPage';
import { TrainingPage } from 'pages/training/trainingPage';
import { ExcercisesPage } from 'pages/excercises/exercisesPage';
import { ExercisePage } from 'pages/excercise/exercisePage';
import { routes } from '../shared/nav/constants';

export const router = createBrowserRouter([
  {
    path: routes.core,
    element: <HomePage />,
  },
  {
    path: routes.signup,
    element: <SignUpPage />,
  },
  {
    path: routes.profile,
    element: <ProfilePage />,
  },
  {
    path: routes.stats,
    element: <StatsPage />,
  },
  {
    path: `${routes.training}/:id`,
    element: <TrainingPage />,
  },
  {
    path: routes.exercises,
    element: <ExcercisesPage />,
  },
  {
    path: `${routes.exercises}/:id`,
    element: <ExercisePage />,
  },
  {
    path: routes.favourites,
    element: <ExcercisesPage />,
  },
]);
