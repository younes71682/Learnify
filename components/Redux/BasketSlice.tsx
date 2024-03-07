//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit"


export const BacketSlice = createSlice({
    name: "SHOPPING",
    initialState: {
        Cart: [],
    },

    reducers: {
        ADD: (state, action) => {
            const { courseId, title, mentorName, mentorfamily, price } = action.payload
            if (!state.Cart?.find(item => item.id === courseId)) {
                state.Cart?.push({
                    ...state,
                    Cart: state.Cart = [
                        ...state.Cart, {
                            id: courseId,
                            title: title,
                            mentorName: mentorName,
                            mentorfamily: mentorfamily,
                            price: price,
                            // image: action.payload?.image 
                        }
                    ]

                })

            }
            else {
                return {
                    Cart: state.Cart
                }
            }

        },

        DELETE: (state, action) => {
            if ((state.Cart?.find((item) => item.id === action.payload.id))) {
                return {
                    Cart: state.Cart.filter((item) => item.id !== action.payload.id)
                }
            } else {
                return {
                    Cart: state.Cart
                }
            }
        },

    }
})




export const { ADD, DELETE, } = BacketSlice.actions
export default BacketSlice.reducer


