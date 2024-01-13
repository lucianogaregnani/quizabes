import { useEffect, useState } from "react";
import { QuestionModel } from "../models";
import { changeCurrentQuestion } from "../store/currentQuestion/currentQuestion";
import { addNewQuestions } from "../store/questions/questions";
import { useAppDispatch, useAppSelector } from "./store";

function useCurrentQuestion() {
    const dispatch = useAppDispatch()
    const questions = useAppSelector(state => state.questions)
    const currentQuestion = useAppSelector(state => state.currentQuestion)
    const [currentIndex, setCurrentIndex] = useState(-1)

    useEffect(() => {
        setCurrentIndex(questions.findIndex(question => question.question === currentQuestion.question) + 1)
    }, [currentQuestion, questions])

    const changeQuestions = (newQuestions:QuestionModel[]) => {
        dispatch(addNewQuestions(newQuestions))
    }

    const changeQuestion = (newQuestion:QuestionModel) => {
        dispatch(changeCurrentQuestion(newQuestion))
    }

    const goToNextQuestion = () => {
        if(currentIndex !== -1 && currentIndex < questions.length) {
            const nextIndex = currentIndex + 1
            changeQuestion(questions[nextIndex])
            setCurrentIndex(nextIndex)
        }
    }

    return ({
        currentIndex,
        changeQuestions,
        changeQuestion,
        goToNextQuestion
    });
}

export default useCurrentQuestion;