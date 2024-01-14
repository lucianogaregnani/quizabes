import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const selectedAnswerSlice = createSlice({
  name: "selectedAnswer",
  initialState: "",
  reducers: {
    changeSelectedAnswer: (_state, action:PayloadAction<string>) => {
        return action.payload
    },

    resetSelectedAnswer: () => {
      return "";
    },
  },
});

export default selectedAnswerSlice.reducer
export const { changeSelectedAnswer, resetSelectedAnswer } = selectedAnswerSlice.actions