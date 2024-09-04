import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./Slices/authenticateSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import cartReducer from "./Slices/cartSlice";
import searchReducer from "./Slices/SearchSlice";
import pageReducer from "./Slices/PaginationSlice";

// Redux Persist import
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Creating Persist Config File
const persistConfig = {
  key: "root",
  storage,
};

// Combine Reducer
const reducer = combineReducers({
  authentication: authenticateReducer,
  cart: cartReducer,
  search: searchReducer,
  pagination: pageReducer,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
