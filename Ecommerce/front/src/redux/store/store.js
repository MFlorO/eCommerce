import { configureStore } from '@reduxjs/toolkit'
import { adminSlice } from '../slice/admin'


export const store = configureStore({
  reducer: {
    admin: adminSlice.reducer
  },
})