import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api'

// BEGIN (write your solution here)
const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(authApi.middleware)
});

export default store;