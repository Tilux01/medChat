import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function ProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen grid place-items-center bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                <p className="text-sm font-medium">Please Wait Loading your account…</p>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
}

export default ProtectedRoute;
