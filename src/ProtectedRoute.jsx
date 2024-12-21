import { useAuth } from './config/Context';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const { user, loading, userDoc } = useAuth(); // Get userDoc if you are using it
    const location = useLocation();

    useEffect(() => {
        console.log("--- Protected Route Render ---");
        console.log("User:", user);
        console.log("Loading:", loading);
        console.log("User Claims:", user?.claims);
        console.log("User Role (from Firestore):", userDoc?.role); // Log userDoc role
        console.log("isAdmin:", user?.claims?.admin === true || userDoc?.role === 'admin');
        console.log("--- End of Protected Route Render ---");
    }, [user, loading, userDoc]); // Add userDoc to the dependency array

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    const isAdmin = user?.claims?.admin === true || userDoc?.role === 'admin';

    if (!isAdmin) {
        return <Navigate to="/forbidden" replace />;
    }

    return children;
};

export default ProtectedRoute;