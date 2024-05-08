import { configureStore } from '@reduxjs/toolkit'
import IsLoadingSlice from './slices/IsLoadingSlice'


export const store = configureStore({
  reducer: {
    IsLoading: IsLoadingSlice,
  },
})