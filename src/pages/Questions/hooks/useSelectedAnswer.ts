import { useState } from "react";
import { QuestionModel } from "../models";
import questions from "../questions.module.scss";

function useSelectedAnswer() {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const getBackgroundColor = (answer: string, question: QuestionModel) => {
      if (!selectedAnswer) return questions.normalAnswer;
      if (answer === question.correctAnswer) return questions.correctAnswer;
      if (selectedAnswer === answer) return questions.incorrectAnswer;
      return questions.responseAnswer;
    };
  
    const handleResponse = (answer: string) => {
      if(!selectedAnswer) setSelectedAnswer(answer);
    };
    
    return ({ selectedAnswer, getBackgroundColor, handleResponse });
}

export default useSelectedAnswer;