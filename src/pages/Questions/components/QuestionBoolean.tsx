import useSelectedAnswer from "../hooks/useSelectedAnswer";
import { QuestionModel } from "../models";
import questions from "../questions.module.scss"

function QuestionBoolean({ question }:{ question:QuestionModel }) {
  const { getBackgroundColor, handleResponse } = useSelectedAnswer()

  return (
    <div className={questions.questionBoolean}>
      <div>
        <button className={getBackgroundColor("True", question)} onClick={() => handleResponse("True")}>True</button>
        <button className={getBackgroundColor("False", question)} onClick={() => handleResponse("False")}>False</button>
      </div>
    </div>
  );
}

export default QuestionBoolean;
