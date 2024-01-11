import questions from "./questions.module.scss"
import Question from "./components/Question";
import { QuestionModel } from "./models";

function Questions() {
    const questionAux: QuestionModel = {
        type: "multiple",
        difficulty: "hard",
        question: "In &quot;League of Legends&quot;, there exists four different types of Dragon.",
        correctAnswer: "Bobby Darin",
        incorrectAnswers: [
            "Louis Armstrong",
            "Frank Sinatra",
            "Dean Martin"
        ]
    }

    return (
        <section className={questions.questionsSection}>
            <h1>General Knowledge</h1>
            <Question question={questionAux}/>
        </section>
    );
}

export default Questions;