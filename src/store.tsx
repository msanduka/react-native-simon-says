import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducers';

export type RootState = ReturnType<typeof reducer>;

import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const pReducer = persistReducer(persistConfig, reducer);

// create store and persistor store
export const store = configureStore({
  reducer: pReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);

export default () => {
  return {store, persistor};
};
