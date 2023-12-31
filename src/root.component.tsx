import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import appRoutes from './routes/appRoute'
import {
  consoleReportHandler,
  Footer,
  reportWebVitals,
} from '@yoonghan/walcron-microfrontend-shared'
import './index.css'
import { AuthenticationProvider } from './context/authentication'

const router = createBrowserRouter(appRoutes)

export default function Root() {
  return (
    <React.StrictMode>
      <AuthenticationProvider>
        <div className="main-container" data-testid="zelda-main">
          <RouterProvider router={router} />
          <Footer lastUpdatedYear={2023} />
        </div>
      </AuthenticationProvider>
    </React.StrictMode>
  )
}

reportWebVitals(consoleReportHandler)
