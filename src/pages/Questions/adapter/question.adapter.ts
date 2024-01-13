import { QuestionModel } from "../models";
import { QuestionFetch } from "../models/questionFetch.model";

export const questionAdapter:(questions: QuestionFetch[]) => QuestionModel[] = (questions) => {
    return questions.map(question =>({
        type: question.type,
        difficulty: question.difficulty,
        question: question.question,
        correctAnswer: question.correct_answer,
        incorrectAnswers: question.incorrect_answers,
    }))
}