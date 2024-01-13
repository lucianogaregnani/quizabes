import questions from "./questions.module.scss";
import Question from "./components/Question";
import useQuestions from "./hooks/useQuestions";
import { useParams } from "react-router-dom";

function Questions() {
  const { themeId } = useParams();
  const { loading, error } = useQuestions({ themeId });

  return (
    <section className={questions.questionsSection}>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <Question />}
    </section>
  );
}

export default Questions;
