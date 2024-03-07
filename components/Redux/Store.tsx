import { configureStore } from "@reduxjs/toolkit";
import ShoppingReducer from '@/components/Redux/BasketSlice'
import TokenSlice from '@/components/Redux/TokenSlise'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    SHOPPING: ShoppingReducer,
    TOKEN: TokenSlice
})

const Store = configureStore({
    reducer: persistReducer(persistConfig, reducer)
})

export default Store