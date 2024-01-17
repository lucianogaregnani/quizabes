import questions from "./questions.module.scss";
import Question from "./components/Question";
import useQuestions from "./hooks/useQuestions";
import { Link, useParams } from "react-router-dom";
import { themes } from "../Themes/models";
import { useAppSelector } from "./hooks/store";
import ReactLoading from "react-loading";
import Score from "./pages/Score/Score";
import { Button } from "../../components";

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
          {loading && (
            <ReactLoading
              type="bars"
              color="white"
              height={"20%"}
              width={"20%"}
            />
          )}
          {error && (
            <div className={questions.errorMessage}>
              <p>Ups... {error}&#128517;</p>
              <Link to="/themes">
                <Button text="Return to themes" />
              </Link>
            </div>
          )}
          {!loading && !error && <Question />}
        </>
      )}
    </section>
  );
}

export default Questions;
