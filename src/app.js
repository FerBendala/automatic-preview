import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomeMain from './pages/home/home-main'
import LayoutApp from './layout/layout-app/layout-app'
import Router from './routers/router'

import './app.scss'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<LayoutApp />}>
                <Route path='/tool/:tool' element={<Router />} />
                <Route path='*' element={<HomeMain />} />
                <Route index element={<HomeMain />} />
            </Route>
        </Routes>
    )
}

export default App