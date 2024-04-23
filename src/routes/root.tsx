import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/Home/HomePage';
import { SignUpPage } from '../Pages/SignUp/SignUpPage';
import { ProfilePage } from '../Pages/Profile/ProfilePage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "signup",
        element: <SignUpPage />
    },
    {
        path: "profile",
        element: <ProfilePage />
    }
]);

export default router;