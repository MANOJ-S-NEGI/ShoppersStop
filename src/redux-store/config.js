import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'], 
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Define middlewares to use (conditionally include logger only in development)
const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  sagaMiddleware,
].filter(Boolean);

// Configure store with reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignore persist actions during serialization checks
      },
    }).concat(middleWares),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development mode
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Set up persistence
export const persistor = persistStore(store);
