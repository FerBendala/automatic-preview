import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime.js'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'


import { store, persistor } from './redux/store'

import App from './app'

const root = createRoot( document.getElementById( 'root' ) )
root.render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>
)
