import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChangeScoreParams } from "../../models";
import { responseScore } from "../../models/responseScore.model";

export const scoreSlice = createSlice({
    name:"score",
    initialState: 0,
    reducers:{
        changeScore: (state, action: PayloadAction<ChangeScoreParams>) => {
            const { difficulty, type, isCorrectAnswer } = action.payload
            return state + responseScore[difficulty][type][isCorrectAnswer]
        }
    }
})