import { createSlice } from "@reduxjs/toolkit";
import { QuestionModel } from "../../models";

const initialState: QuestionModel[] = [];

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addNewQuestions: (newQuestions: QuestionModel[]) => {
      return newQuestions;
    },
  },
});

export default questionsSlice.reducer;
export const { addNewQuestions } = questionsSlice.actions
