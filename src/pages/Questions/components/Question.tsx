import { QuestionLayout, QuestionMultiple } from ".";
import { useAppSelector } from "../hooks/store";
import { reformatText } from "../utils/reformatText.util";
import QuestionBoolean from "./QuestionBoolean";

function Question() {
  const currentQuestion = useAppSelector(state => state.currentQuestion)
  const themeTitle = reformatText(currentQuestion.question)
  return (
    <QuestionLayout>
      <h5>{themeTitle}</h5>
      {currentQuestion.type === "multiple" ? (
        <QuestionMultiple question={currentQuestion} />
      ) : (
        <QuestionBoolean question={currentQuestion} />
      )}
    </QuestionLayout>
  );
}

export default Question;
