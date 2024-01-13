import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questions/questions"
import currentQuestionReducer from "./currentQuestion/currentQuestion"

export const store = configureStore({
    reducer:{
        questions: questionsReducer,
        currentQuestion: currentQuestionReducer
    }
})