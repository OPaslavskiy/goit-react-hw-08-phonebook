import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/authReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    // auth: persistReducer(authPersistConfig, authReducer),
  },
});

// export const persistor = persistStore(store);
