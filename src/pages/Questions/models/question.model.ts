import { Difficulty, Type } from ".";

export interface QuestionModel {
    type: Type,
    difficulty: Difficulty,
    question: string,
    correctAnswer: string,
    incorrectAnswers: string[]
}