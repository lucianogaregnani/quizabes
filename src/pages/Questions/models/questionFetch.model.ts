import { Difficulty, Type } from "."

export interface QuestionFetch {
    type: Type
    category: string,
    difficulty: Difficulty,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}