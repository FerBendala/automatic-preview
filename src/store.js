import { configureStore } from '@reduxjs/toolkit'
import { persistStore, REHYDRATE, PERSIST } from 'redux-persist'
import { persistedDominationReducer, persistedHomeReducer } from './redux/persist'

const rootReducer = {
    home: persistedHomeReducer,
    domination: persistedDominationReducer,
}

const store = configureStore( {
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( {
            serializableCheck: {
                ignoredActions: [PERSIST, REHYDRATE],
            },
        } ),
} )

const persistor = persistStore( store )

console.log( 'initial store:', store.getState() )
export { store, persistor }