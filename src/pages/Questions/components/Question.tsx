import { QuestionLayout, QuestionMultiple } from ".";
import { QuestionModel } from "../models";

function Question({ question }: { question: QuestionModel }) {
  return (
    <QuestionLayout>
      {question.type === "multiple" ? <QuestionMultiple /> : <div>b</div>}
    </QuestionLayout>
  );
}

export default Question;
