import React from 'react'
import {useDispatch} from "react-redux"
import authService from "../../appwrite/auth.js"
import {Logout} from "../../Store/authSlice.js"


function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout().then(() => {
            dispatch(Logout());
        })
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={handleLogout}
    >Logout</button>
  )
}

export default LogoutBtn