import { configureStore } from "@reduxjs/toolkit";
import ShoppingReducer from '@/components/Redux/BasketSlice'
const Store = configureStore({
reducer:{
    SHOPPING:ShoppingReducer
}
})

export default Store