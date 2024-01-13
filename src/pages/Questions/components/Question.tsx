import { QuestionLayout, QuestionMultiple } from ".";
import { QuestionModel } from "../models";
import QuestionBoolean from "./QuestionBoolean";

function Question({ question }: { question: QuestionModel }) {
  return (
    <QuestionLayout>
      {question.type === "multiple" ? (
        <QuestionMultiple />
      ) : (
        <QuestionBoolean />
      )}
    </QuestionLayout>
  );
}

export default Question;
