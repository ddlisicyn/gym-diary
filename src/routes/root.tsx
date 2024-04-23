import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/Home/HomePage';
import { SignUpPage } from '../Pages/SignUp/SignUpPage';
import { ProfilePage } from '../Pages/Profile/ProfilePage';
import routes from './constants';
import { StatsPage } from '../Pages/StatsPage/StatsPage';

const { core, signup, profile, stats } = routes;

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
    }
]);

export default router;