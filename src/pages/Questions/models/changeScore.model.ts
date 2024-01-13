import { Difficulty, Type } from ".";

export interface ChangeScoreParams {
    difficulty:Difficulty,
    type: Type,
    isCorrectAnswer: "correct" | "incorrect"
} 