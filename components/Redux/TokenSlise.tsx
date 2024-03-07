import { Token } from "@mui/icons-material"
import { createSlice } from "@reduxjs/toolkit"

export const TokenSlice = createSlice({
    name: 'USERTOKEN',
    initialState: {
        Token: ''
    },

    reducers: {
        ADD_TOKEN: (state, action) => {

            return {
                Token: action.payload
            }
        }
    }
})

export const { ADD_TOKEN } = TokenSlice.actions
export default TokenSlice.reducer