import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/Home/HomePage';
import { SignUpPage } from '../Pages/SignUp/SignUpPage';
import { ProfilePage } from '../Pages/Profile/ProfilePage';
import routes from './constants';
import { StatsPage } from '../Pages/Stats/StatsPage';
import { TrainingPage } from '../Pages/Training/TrainingPage';

const { core, signup, profile, stats, training } = routes;

const router = createBrowserRouter([
    {
        path: core,
        element: <HomePage />,
    },
    {
        path: signup,
        element: <SignUpPage />
    },
    {
        path: profile,
        element: <ProfilePage />
    },
    {
        path: stats,
        element: <StatsPage />
    },
    {
        path: `${training}/:id`,
        element: <TrainingPage />
    }
]);

export default router;