import useSelectedAnswer from "../hooks/useSelectedAnswer";
import { QuestionModel } from "../models";
import questions from "../questions.module.scss"

const questionAux: QuestionModel = {
  type: "boolean",
  difficulty: "medium",
  question:
    "The British organisation CAMRA stands for The Campaign for Real Ale.",
  correctAnswer: "True",
  incorrectAnswers: ["False"],
};

function QuestionBoolean() {
  const { getBackgroundColor, handleResponse } = useSelectedAnswer()

  return (
    <div className={questions.questionBoolean}>
      <h5>{questionAux.question}</h5>
      <div>
        <button className={getBackgroundColor("True", questionAux)} onClick={() => handleResponse("True")}>True</button>
        <button className={getBackgroundColor("False", questionAux)} onClick={() => handleResponse("False")}>False</button>
      </div>
    </div>
  );
}

export default QuestionBoolean;
