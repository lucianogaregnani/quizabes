import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const gameFinishSlice = createSlice({
    name: 'gameFinish',
    initialState: false, 
    reducers: {
        changeGameFinish: (_state, action: PayloadAction<boolean>) => {
            return action.payload
        }  
    }
})

export default gameFinishSlice.reducer
export const { changeGameFinish } = gameFinishSlice.actions