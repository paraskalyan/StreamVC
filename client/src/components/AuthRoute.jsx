import React from 'react'
import useAuthUser from '../hooks/useAuthUser'
import { Navigate } from 'react-router';
import PageLoader from '../Pages/PageLoader';

const AuthRoute = ({ children }) => {
    const { isLoading, authUser } = useAuthUser();

    if (isLoading) return <PageLoader />
    if (authUser) return <Navigate to={authUser.isOnboarded ? '/' : '/onboarding'} />

    return children
}

export default AuthRoute