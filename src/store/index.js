import cartSlice from "./cartSlice"
import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userReducer
  },
})

export default store
