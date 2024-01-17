import { QuestionModel } from "../models";
import { QuestionFetch } from "../models/questionFetch.model";
import { reformatText } from "../utils/reformatText.util";

export const questionAdapter:(questions: QuestionFetch[]) => QuestionModel[] = (questions) => {
    return questions.map(question =>({
        type: question.type,
        difficulty: question.difficulty,
        question: reformatText(question.question),
        correctAnswer: reformatText(question.correct_answer),
        incorrectAnswers: question.incorrect_answers.map(answer => reformatText(answer)),
    }))
}