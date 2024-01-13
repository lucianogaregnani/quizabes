import { createSlice } from "@reduxjs/toolkit";
import { QuestionModel } from "../../models";

const initialState: QuestionModel = {
  question: "",
  correctAnswer: "",
  incorrectAnswers: [],
  type: "boolean",
  difficulty: "easy",
};

export const currentQuestionSlice = createSlice({
  name: "currentQuestion",
  initialState,
  reducers: {
    changeCurrentQuestion: (newQuestion: QuestionModel) => {
      return newQuestion;
    },
  },
});

export default currentQuestionSlice.reducer;
export const { changeCurrentQuestion } = currentQuestionSlice.actions
