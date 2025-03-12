import React from 'react'
import {Container} from '../Container/Container'
import {Logo} from '../Logo'
import {Link} from "react-router-dom"
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Header() {
    const authStatus = useSelector((state) => state.authStatus)
    const navigate = useNavigate()

    const navItems = [
        {
            label: 'Home',
            slug: '/',
            active: true
        },
        {
            label: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            label: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            label: 'All posts',
            slug: '/all-posts',
            active: authStatus
        },
        {
            label: 'Add Posts',
            slug: '/add-posts',
            active: authStatus
        },
    ]

  return (
    <header className="py-3 shadow bg-gray-500">
        <Container>
            <nav className="flex justify-between items-center">
                <div className="mr-4">
                    <Link to="/">
                        <Logo/>
                    </Link>
                </div>
               <ul className="flex ml-auto space-x-2 text-sm font-medium">
                 {
                    navItems.map((item) => item.active ? (
                        <li key={item.slug}>
                            <button
                                className='inline-block py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white'
                                onClick = {() => navigate (item.slug)}>
                                    {item.label}
                            </button>
                        </li>
                    ) : null)
                }
                {authStatus && (
                    <li>
                        <LogoutBtn/>
                    </li>
                )}
              </ul>
          </nav>
        </Container>
    </header>
  )
}

export default Header