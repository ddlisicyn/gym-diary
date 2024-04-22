import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../Pages/Home/HomePage';
import { SignUpPage } from '../Pages/SignUp/SignUpPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "signup",
        element: <SignUpPage />
    }
]);

export default router;