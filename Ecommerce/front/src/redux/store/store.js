import { configureStore } from '@reduxjs/toolkit'
import { panelAdminSlice } from '../panelAdmin'

export const store = configureStore({
  reducer: {
    panelAdmin: panelAdminSlice.reducer
  },
})