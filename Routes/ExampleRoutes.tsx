import React, { Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom'

export const routesObject = {}

const RoutesDeclaration: React.FC = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      {/* 
      <Route
        path={home}
        element={<Home />}
      />
      <Route
        path="*"
        element={<Navigate to={`${home}`} replace />}
      />
      */}
    </Routes>
  )
}

export const AppRoutes = () => (
  <BrowserRouter>
    {/* <Suspense fallback={<Load />}> */}
      <RoutesDeclaration />
    {/* </Suspense> */}
  </BrowserRouter>
)
