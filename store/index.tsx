import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { createLogger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer'
import { injectDispatch } from '../utils/network'

const persistConfig = {
  key: 'root',
  storage,
}

const mainReducer = combineReducers(rootReducer)

const persistedReducer = persistReducer(persistConfig, mainReducer)

const logger = createLogger({})

export const appReducer = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
})

injectDispatch(appReducer.dispatch)

export const Persistor = persistStore(appReducer)

export type RootState = ReturnType<typeof appReducer.getState>
export type AppDispatch = typeof appReducer.dispatch
