import React from 'react'
import useAuthUser from '../hooks/useAuthUser'
import PageLoader from '../Pages/PageLoader'
import { Navigate } from 'react-router'

const OnboardRoute = ({ children }) => {
    const { isLoading, authUser } = useAuthUser()

    if (isLoading) return <PageLoader />
    if (!authUser) return <Navigate to='/login' />
    if (authUser.isOnboarded) return <Navigate to='/' />

    return children
}

export default OnboardRoute