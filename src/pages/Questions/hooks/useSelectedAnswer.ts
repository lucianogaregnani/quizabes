import { useNavigate } from "react-router-dom";
import { QuestionModel } from "../models";
import questions from "../questions.module.scss";
import { changeSelectedAnswer } from "../store/selectedAnswer/selectedAnswer";
import { useAppDispatch, useAppSelector } from "./store";
import useCurrentQuestion from "./useCurrentQuestion";

function useSelectedAnswer() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const selectedAnswer = useAppSelector((state) => state.selectedAnswer);
  const currentQuestion = useAppSelector((state) => state.currentQuestion);
  const questionsContext = useAppSelector((state) => state.questions);

  const indexQuestion = questionsContext.findIndex(
    (question) => question.question === currentQuestion.question
  );

  const { goToNextQuestion } = useCurrentQuestion();

  const getBackgroundColor = (answer: string, question: QuestionModel) => {
    if (!selectedAnswer) return questions.normalAnswer;
    if (answer === question.correctAnswer) return questions.correctAnswer;
    if (selectedAnswer === answer) return questions.incorrectAnswer;
    return questions.responseAnswer;
  };

  const handleResponse = (answer: string) => {
    if (!selectedAnswer) {
      dispatch(changeSelectedAnswer(answer));
      setTimeout(() => {
        if(indexQuestion <= 8) { 
          goToNextQuestion() 
        } else {
          navigate('/score')
        }
      }, 1000);
    }
  };

  return { getBackgroundColor, handleResponse };
}

export default useSelectedAnswer;
