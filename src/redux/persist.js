import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import dominationReducer from './domination'
import homeReducer from './home'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedDominationReducer = persistReducer( persistConfig, dominationReducer )
const persistedHomeReducer = persistReducer( persistConfig, homeReducer )

export { persistedDominationReducer, persistedHomeReducer }
