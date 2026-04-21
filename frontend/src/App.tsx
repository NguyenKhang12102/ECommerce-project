import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import StoreLayout from './components/StoreLayout'
import LoginPage from './pages/login/LoginPage'
import Home from './pages/home/Home'
import Workouts from './pages/workouts/Workouts'
import Memberships from './pages/memberships/Memberships'
import PersonalTraining from './pages/personal-training/PersonalTraining'

const router = createBrowserRouter([
  {
    path: '/',
    element: <StoreLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'workouts',
        element: <Workouts />,
      },
      {
        path: 'memberships',
        element: <Memberships />,
      },
      {
        path: 'personal-training',
        element: <PersonalTraining />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/store',
    element: <Navigate to="/" replace />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
