import { cardReducer, columnReducer, commentReducer} from "redux/features";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
//@ts-ignore
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  column: columnReducer,
  card: cardReducer,
  comment: commentReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducers = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
})
export const persistor = persistStore(store)
// @ts-ignore
export type RootState = ReturnType<typeof store.getState>
