import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './rootReducer';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'cart',
    ],
}
const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)
const store = createStore(persistedReducer);
const persistor = persistStore(store)

export {store, persistor};