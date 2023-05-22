import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import dominationReducer from './redux/domination'
import homeReducer from './redux/home'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedDominationReducer = persistReducer( persistConfig, dominationReducer )
const persistedHomeReducer = persistReducer( persistConfig, homeReducer )

const rootReducer = {
    home: persistedHomeReducer,
    domination: persistedDominationReducer,
}

const store = configureStore( {
    reducer: rootReducer,
} )

const persistor = persistStore( store )

console.log( 'initial store:', store.getState() )

export { store, persistor }
