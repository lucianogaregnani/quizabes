import { QuestionModel } from "../models";
import questions from "../questions.module.scss";
import { shuffleArray } from "../utils";
import useSelectedAnswer from "../hooks/useSelectedAnswer";
import { useState } from "react";

function QuestionMultiple({ question }: { question: QuestionModel }) {
  const { getBackgroundColor, handleResponse } = useSelectedAnswer();
  const [answers] = useState(
    shuffleArray([question.correctAnswer, ...question.incorrectAnswers])
  );

  return (
    <div className={questions.questionMultiple}>
      <h5>{question.question}</h5>
      <div>
        {answers.map((answer) => (
          <button
            className={`${questions.answer} ${getBackgroundColor(
              answer,
              question
            )}`}
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
