import { QuestionModel } from "../models";
import questions from "../questions.module.scss";
import { shuffleArray } from "../utils";
import useSelectedAnswer from "../hooks/useSelectedAnswer";
import { useEffect, useState } from "react";

function QuestionMultiple({ question }: { question: QuestionModel }) {
  const { getBackgroundColor, handleResponse } = useSelectedAnswer();
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    setAnswers(
      shuffleArray([question.correctAnswer, ...question.incorrectAnswers])
    );
  }, [question]);

  return (
    <div className={questions.questionMultiple}>
      <div>
        {answers.map((answer) => (
          <button
            key={answer}
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
