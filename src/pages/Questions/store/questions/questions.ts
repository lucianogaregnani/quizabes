import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionModel } from "../../models";

const initialState: QuestionModel[] = [];

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addNewQuestions: (_state, action:PayloadAction<QuestionModel[]>) => {
      return action.payload;
    },
  },
});

export default questionsSlice.reducer;
export const { addNewQuestions } = questionsSlice.actions
