import { useState } from "react";
import { QuestionModel } from "../models";
import questions from "../questions.module.scss";
import { shuffleArray } from "../utils";
import useSelectedAnswer from "../hooks/useSelectedAnswer";

const questionAux: QuestionModel = {
  type: "multiple",
  difficulty: "hard",
  question:
    "In &quot;League of Legends&quot;, there exists four different types of Dragon.",
  correctAnswer: "Bobby Darin",
  incorrectAnswers: ["Louis Armstrong", "Frank Sinatra", "Dean Martin"],
};

function QuestionMultiple() {
  const { getBackgroundColor, handleResponse } = useSelectedAnswer()

  const [answers] = useState(shuffleArray([
    questionAux.correctAnswer,
    ...questionAux.incorrectAnswers,
  ]));

  return (
    <div className={questions.questionMultiple}>
      <h5>{questionAux.question}</h5>
      <div>
        {answers.map((answer) => (
          <button
            className={`${questions.answer} ${getBackgroundColor(answer, questionAux)}`}
            onClick={() => handleResponse(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionMultiple;
