import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/store.js'


import Home from './Pages/Home.jsx'
import LoginPage from './pages/LoginPage.jsx' // Updated import to LoginPage
import Protected from './Components/AuthLayout.jsx'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <Protected authentication = {false}>
            <LoginPage /> // Updated to use LoginPage
          </Protected>
        )
      },
      {
        path: '/signup',
        element: (
          <Protected authentication = {false}>
            <Signup />
          </Protected>
        )
      },
      {
        path: '/all-posts',
        element: (
          <Protected authentication = {true}>
            <AllPosts />
          </Protected>
        )
      },
      {
        path: '/add-post',
        element: (
          <Protected authentication = {false}>
            <AddPost />
          </Protected>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Protected authentication = {true}>
            <EditPost />
          </Protected>
        )
      },
      {
        path: '/post/:slug',
        element: (
          <Protected authentication = {false}>
            <Post />
          </Protected>
        )
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
