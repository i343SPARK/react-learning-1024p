import React from 'react'
import AppRouter from './Routes/AppRouter'
import { BrowserRouter } from 'react-router-dom'

import "./Styles/styles.scss"

export function Main() {
    return (
    <BrowserRouter>
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    </BrowserRouter>
    )
}
