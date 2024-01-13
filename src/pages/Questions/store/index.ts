import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questions/questions"
import currentQuestionReducer from "./currentQuestion/currentQuestion"
import scoreReducer from "./score/score"

export const store = configureStore({
    reducer:{
        questions: questionsReducer,
        currentQuestion: currentQuestionReducer,
        score: scoreReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch