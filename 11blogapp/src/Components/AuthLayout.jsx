import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication = true}) {

    const authStatus = useSelector(state => state.auth.status)

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')       // If authentication is required but user is not authenticated, redirect to login page
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')       // If no authentication is required but user is authenticated, redirect to home
        } else {
        setLoader(false)       // Continue with the rendering of the children if conditions are met or after delayed navigation
        }
    } , [authStatus, authentication, navigate]) // eslint-disable-line react-hooks/exhaustive-deps // We know what we're doing he

  return loader ? null : <>{children}</> // If loader is false, render the children   // Show a loading state while the navigation happens
}

export default Protected

