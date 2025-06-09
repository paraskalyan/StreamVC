import useAuthUser from '../hooks/useAuthUser'
import PageLoader from '../Pages/PageLoader';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
    const { isLoading, authUser } = useAuthUser();
    if (isLoading) return <PageLoader />

    if (!authUser) return <Navigate to='/login' />
    if (!authUser.isOnboarded) return <Navigate to='/onboarding' />

    return children;
}

export default ProtectedRoute