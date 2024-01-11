export interface QuestionModel {
    type: "multiple" | "boolean",
    difficulty: "easy" | "medium" | "hard",
    question: string,
    correctAnswer: string,
    incorrectAnswers: string[]
}