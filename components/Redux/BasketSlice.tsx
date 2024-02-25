//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { title } from "process";

export const BacketSlice = createSlice({
    name: "SHOPPING",
    initialState: {
        Cart: [],
    },
    reducers: {
        ADD: (state, actions) => {
            if (!state.Cart.find((i) => i.id === actions.payload.id)) {
                state.Cart.push({
                    ...state,
                    Cart: state.Cart = [
                        ...state.Cart,
                        {
                            id: actions.payload.id,
                            title: actions.payload.title,
                            mentorName: actions.payload.name,
                            price: actions.payload.price,
                            image: actions.payload.image
                        }
                    ]
                })
            }
        },


        DELETE: (state, actions) => {
            if (state.Cart.find((i) => i.id === actions.payload.id)) {
                return {
                    Cart: state.Cart.filter((item) => item.id !== actions.payload.id)
                }
            } else {
                return state.Cart
            }
        }
    }
})

export const { ADD, DELETE } = BacketSlice.actions
export default BacketSlice.reducer