import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/theme'
import cartReducer from './features/cartSlice'

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    theme:themeReducer,
  },
})