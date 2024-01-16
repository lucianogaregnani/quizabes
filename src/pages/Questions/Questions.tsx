import questions from "./questions.module.scss";
import Question from "./components/Question";
import useQuestions from "./hooks/useQuestions";
import { useParams } from "react-router-dom";
import { themes } from "../Themes/models";
import { useAppSelector } from "./hooks/store";
import Score from "./pages/Score/Score";
function Questions() {
  const { themeId } = useParams();
  const { loading, error } = useQuestions({ themeId });
  const itsGameFinish = useAppSelector((state) => state.gameFinish);
  return (
    <section className={questions.questionsSection}>
      {itsGameFinish ? (
        <Score />
      ) : (
        <>
          {!loading && !error && (
            <h1>{themes.find((theme) => theme.to === themeId)?.name}</h1>
          )}
          {loading && <p>loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && <Question />}
        </>
      )}
    </section>
  );
}

export default Questions;
