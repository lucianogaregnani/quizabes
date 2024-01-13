import questions from "./questions.module.scss"
import Question from "./components/Question";
import { QuestionModel } from "./models";

function Questions() {
    const questionAux: QuestionModel = {
        type: "boolean",
        difficulty: "medium",
        question:
          "The British organisation CAMRA stands for The Campaign for Real Ale.",
        correctAnswer: "True",
        incorrectAnswers: ["False"],
      };

    return (
        <section className={questions.questionsSection}>
            <h1>General Knowledge</h1>
            <Question question={questionAux}/>
        </section>
    );
}

export default Questions;