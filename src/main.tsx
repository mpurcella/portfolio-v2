import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './containers/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />,
);
